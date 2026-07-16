/* Custom mouse effects for Butterfly theme */

// Click effect: ripple + random colored particles
document.addEventListener('click', function(e) {
  // Create a ripple effect
  var ripple = document.createElement('div');
  ripple.className = 'mouse-ripple';
  
  var size = Math.random() * 20 + 10;
  var colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  
  ripple.style.cssText = 
    'position:fixed;' +
    'z-index:9999;' +
    'pointer-events:none;' +
    'width:' + size + 'px;' +
    'height:' + size + 'px;' +
    'left:' + (e.clientX - size / 2) + 'px;' +
    'top:' + (e.clientY - size / 2) + 'px;' +
    'background:' + color + ';' +
    'border-radius:50%;' +
    'opacity:0.8;' +
    'transform:scale(0);' +
    'animation:rippleEffect 0.6s ease-out forwards;';
  
  document.body.appendChild(ripple);
  setTimeout(function() { ripple.remove(); }, 600);
});

// Add the keyframe animation via a style element
var style = document.createElement('style');
style.textContent = 
  '@keyframes rippleEffect {' +
  '  0% { transform: scale(0); opacity: 0.8; }' +
  '  100% { transform: scale(3); opacity: 0; }' +
  '}';
document.head.appendChild(style);
