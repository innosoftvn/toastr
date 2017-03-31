<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/7092420/24548757/6acd1212-1640-11e7-8941-10336f1172fb.png" alt="logo">
</p>
<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/7092420/24548760/716a210a-1640-11e7-9df7-764c3de5edd9.png" alt="demo">
</p>


## Quick Start
3 Easy Steps
 1. Link to toastr.css `<link href="toastr.min.css" rel="stylesheet"/>`
 2. Link to toastr.js `<script src="toastr.min.js"></script>`
 3. use toastr to display a toast for info, success, warning, error or pusher


    toastr.info("message")
    toastr.success("message")
    toastr.warning("message")
    toastr.error("message")
    toastr.pusher("message")

## Default settings

    {
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
    }

## Toastr setup
Set default settings for future toastr.

    toastr.setup({
        duration: 330,
        timeOut: 5000
    });

## Icons
Demo using [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/) icons with toastr

    {
        showIcon: true,
        infoIcon: 'zmdi zmdi-alert-circle-o',
        successIcon: 'zmdi zmdi-check',
        warningIcon: 'zmdi zmdi-alert-triangle',
        errorIcon: 'zmdi zmdi-block-alt',
        pusherIcon: 'zmdi zmdi-notifications-none'
    }

## Sound
Setup sound of notifications.

    {
        sound: false,
        infoSound: 'infoSound.mp3',
        successSound: 'successSound.mp3',
        warningSound: 'warningSound.mp3',
        errorSound: 'errorSound.mp3',
        pusherSound: 'pusherSound.mp3',
    }

## Callbacks

    // Function callback
    toastr.info('message', function(){
        //
    });

    // Redirect
    toastr.info('message', 'http://link-redirect');

## Only settings
Settings for only current toastr.
    
    toastr.info('Mail message', 'http://link-redirect', {
        infoIcon: 'zmdi zmdi-email'
    });
    
## Browser Support
![chrome](https://cloud.githubusercontent.com/assets/7092420/24220167/e269228c-0f7b-11e7-97ca-ffb3e92134ed.jpg)|![firefox](https://cloud.githubusercontent.com/assets/7092420/24220162/e263c6a2-0f7b-11e7-90b0-7b84048b55c6.jpg)|![safari](https://cloud.githubusercontent.com/assets/7092420/24220166/e267f380-0f7b-11e7-884b-1516507948f2.jpg)|![edge](https://cloud.githubusercontent.com/assets/7092420/24220165/e2653d0c-0f7b-11e7-8ff8-fee09ab30a72.jpg)|![opera](https://cloud.githubusercontent.com/assets/7092420/24220164/e2641288-0f7b-11e7-9a3a-59fd105b267f.jpg)|![ie](https://cloud.githubusercontent.com/assets/7092420/24220163/e263d156-0f7b-11e7-8c89-7dd480fd98fb.jpg)
-------- |---------|---------|---------|---------|---------
Latest ✔ |Latest ✔ |Latest ✔ |Latest ✔ |Latest ✔ |9+✔ 
## License
[MIT](http://opensource.org/licenses/MIT)