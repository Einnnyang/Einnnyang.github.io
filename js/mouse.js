/* Mouse click effects */
document.addEventListener('click', function(e) {
  // Simple ripple on click
  var ripple = document.createElement('div');
  ripple.className = 'mouse-click-effect';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  ripple.style.background = 'rgba(100, 149, 237, 0.3)';
  document.body.appendChild(ripple);
  
  setTimeout(function() {
    ripple.remove();
  }, 600);
});
