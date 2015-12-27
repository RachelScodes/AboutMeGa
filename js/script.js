if ($(window).width() > 1000) {
   $(function () {

      $('#fullpage').fullpage({
         anchors:['main', 'about', 'port', 'codepen', 'charity', 'contact'],
         navigation: true,
         navigationPosition: 'right',
      });

   });
}

if ($(window).width() < 999) {
   $(function () {

     $('#fullpage').fullpage({
         anchors:['main', 'about', 'port', 'charity', 'contact'],
         navigation: true,
         navigationPosition: 'right',
         scrollBar: true
      });

   });
}
