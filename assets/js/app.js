window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function (registration) {
        console.log(
          'ServiceWorker registration successful with scope:',
          registration.scope
        );
      })
      .catch(function (error) {
        console.log('ServiceWorker registration failed:', error);
      });
  }
});
window.onload = function() {
  document.getElementById("audioplayer").play();
}