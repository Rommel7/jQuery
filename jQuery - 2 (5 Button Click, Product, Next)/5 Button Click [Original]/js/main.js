 var onClick = function (e) {
     var clicked = function () {
         alert('Item clicked!')
     }
     var items = [
         {
             title: 'Add Sites'
             , icon: 'ion-plus-round'
             , fn: clicked
            }
            , {
             title: 'Reset Login'
             , icon: 'ion-person'
             , fn: clicked
            }
            , {
             title: 'Help'
             , icon: 'ion-help-buoy'
             , fn: clicked
            }
            , {
             title: 'Disabled'
             , icon: 'ion-minus-circled'
             , fn: clicked
             , disabled: true
            }
            , {
             title: 'Invisible'
             , icon: 'ion-eye-disabled'
             , fn: clicked
             , visible: false
            }
            , {}
            , {
             title: 'Logout'
             , icon: 'ion-log-out'
             , fn: clicked
            }
			]
     basicContext.show(items, e)
 }
 document.addEventListener('DOMContentLoaded', function () {
     document.querySelector('a.topleft').addEventListener('click', onClick)
     document.querySelector('a.topright').addEventListener('click', onClick)
     document.querySelector('a.bottomleft').addEventListener('click', onClick)
     document.querySelector('a.bottomright').addEventListener('click', onClick)
     document.querySelector('a.center').addEventListener('click', onClick)
 })