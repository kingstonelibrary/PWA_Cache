if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
   .then( function (registration) {
    registration.onupdatefound = function() {     // インスト時、SWの更新チェック
      console.log('アップデート発見！');
      if (typeof registration.update == 'function') {
        registration.update();       
      }
    }
   })
   .catch(function (error) {
     console.log("Error Log: " + error);
   });
 }

 const channel = new MessageChannel();
 var updateBtn = document.getElementsByClassName('updateBtn')[0];
 updateBtn.addEventListener("click", function(){
  navigator.serviceWorker.controller.postMessage('update', [channel.port2]);
 }, false);