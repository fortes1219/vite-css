(function (doc, win) {
  var resizeTimer;
  function setRootFontSize() {
    var clientWidth = doc.documentElement.clientWidth;
    if (!clientWidth) return;

    // Check if the device is a PC
    var isPC = win.matchMedia('(min-width: 1024px)').matches;
    if (isPC) {
      doc.documentElement.style.fontSize = '72px';
      return;
    }

    // Set font size based on screen width
    var baseFontSize = 100 * (clientWidth / 750);
    if (clientWidth >= 750) {
      doc.documentElement.style.fontSize = '100px';
    } else {
      doc.documentElement.style.fontSize = baseFontSize + 'px';
    }
  }

  // Hide the page until it has finished loading
  doc.documentElement.style.visibility = 'hidden';

  function onResize() {
    if (resizeTimer) {
      win.cancelAnimationFrame(resizeTimer);
    }
    resizeTimer = win.requestAnimationFrame(setRootFontSize);
  }

  // Call the setRootFontSize function on page load and window resize
  win.addEventListener('resize', onResize, false);
  win.addEventListener('orientationchange', onResize, false);
  doc.addEventListener('DOMContentLoaded', function () {
    setRootFontSize();
    // Show the page once it has finished loading
    doc.documentElement.style.visibility = 'visible';
    // Remove the resize and orientationchange events
    win.removeEventListener('resize', onResize, false);
    win.removeEventListener('orientationchange', onResize, false);
  }, false);

})(document, window);
