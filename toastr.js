(function (window) {
    "use strict";

    var __toastrSetting__ = {}, toastr = {};

    function defaults(target, obj) {
        for (var prop in obj) {
            target[prop] = target[prop] === undefined ? obj[prop] : target[prop];
        }
    }

    function addclass(selector, classname) {
        var el = document.querySelector(selector);
        if (el !== null) {
            el.classList.add(classname);
        }
    }

    function remove(selector) {
        var el = document.querySelector(selector);
        if (el !== null) {
            el.parentNode.removeChild(el);
        }
    }

    toastr.setup = function (settings) {
        defaults(__toastrSetting__, settings);
    };

    toastr.info = function (message, callback, options) {
        toastr.notify('info', message, callback, options);
    };

    toastr.success = function (message, callback, options) {
        toastr.notify('success', message, callback, options);
    };

    toastr.warning = function (message, callback, options) {
        toastr.notify('warning', message, callback, options);
    };

    toastr.error = function (message, callback, options) {
        toastr.notify('error', message, callback, options);
    };

    toastr.pusher = function (message, callback, options) {
        toastr.notify('pusher', message, callback, options);
    };

    toastr.notify = function (type, message, callback, options) {
        var link = (typeof callback) === "string";
        var setting = options || {};
        defaults(setting, __toastrSetting__);
        defaults(setting, {
            showIcon: true,
            infoIcon: 'zmdi zmdi-alert-circle-o',
            successIcon: 'zmdi zmdi-check',
            warningIcon: 'zmdi zmdi-alert-triangle',
            errorIcon: 'zmdi zmdi-block-alt',
            pusherIcon: 'zmdi zmdi-notifications-none',
            sound: false,
            infoSound: '',
            successSound: '',
            warningSound: '',
            errorSound: '',
            pusherSound: '',
            duration: 330,
            timeOut: 5000
        });
        var uid = Math.random().toString(36).substring(7);
        if (document.querySelector('#toast-container') == null) {
            var e = document.createElement('div');
            e.id = 'toast-container';
            document.body.appendChild(e);
        }
        var toastr_container = document.querySelector('#toast-container');
        var e = document.createElement('div');
        if (link) {
            e.setAttribute('toastr-link', true);
            e.setAttribute('toastr-target', callback);
        }
        e.setAttribute('class', 'toast toast-' + type);
        e.setAttribute('uid', uid);
        e.setAttribute('toastr-icon', setting.showIcon);
        e.innerHTML = '<div class="toast-message">' + message + '</div>' + (setting.showIcon ? '<i class="' + setting[type + 'Icon'] + '"></i>' : '');
        toastr_container.appendChild(e);
        if (setting.sound) {
            var sound = document.createElement('audio');
            sound.setAttribute('src', setting[type + 'Sound']);
            sound.play();
        }

        var toast = document.querySelector('#toast-container div[uid="' + uid + '"]');
        toast.onclick = function () {
            if (link) {
                var a = document.createElement('a');
                a.href = toast.getAttribute('toastr-target');
                document.body.appendChild(a);
            } else if (typeof callback === "function") {
                callback();
            }
            addclass('#toast-container div[uid="' + uid + '"]', 'toast-out');
            setTimeout(function () {
                remove('#toast-container div[uid="' + uid + '"]');
                if (document.querySelector('#toast-container') != null && document.querySelector('#toast-container').innerHTML === '') {
                    remove('#toast-container');
                }
                if (link) {
                    a.click();
                    document.body.removeChild(a);
                }
            }, setting.duration);
        };
        setTimeout(function () {
            addclass('#toast-container div[uid="' + uid + '"]', 'toast-out');
        }, setting.duration + setting.timeOut);
        setTimeout(function () {
            remove('#toast-container div[uid="' + uid + '"]');
            if (document.querySelector('#toast-container') != null && document.querySelector('#toast-container').innerHTML === '') {
                remove('#toast-container');
            }
        }, setting.duration + setting.timeOut + setting.duration);
    };

    // Support CommonJS, AMD & browser
    if (typeof exports === 'object') {
        module.exports = toastr;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return toastr;
        });
    } else {
        window.toastr = toastr;
    }

})(typeof window != 'undefined' ? window : undefined);