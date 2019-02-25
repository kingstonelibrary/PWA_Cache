if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
   .then( function (registration) {
    registration.onupdatefound = function() {
      console.log('アップデート発見！');
      if (typeof registration.update == 'function') {
        registration.update();       
        setTimeout("location.reload()",1000);
      }
    }
   })
   .catch(function (error) {
     console.log("Error Log: " + error);
   });
 }

 const channel = new MessageChannel();
 window.onload = function() {
  var updateBtn = document.getElementById('updateBtn')
  updateBtn.addEventListener("click", function(){
   navigator.serviceWorker.controller.postMessage('update', [channel.port2]);
   setTimeout("location.reload()",1000);
  }, false);
};