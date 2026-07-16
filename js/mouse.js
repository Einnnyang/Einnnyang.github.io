/* Mouse cursor effect - custom cursor that follows the mouse pointer */

(function() {
    var cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    var mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = 'translate(' + (mouseX - 8) + 'px, ' + (mouseY - 8) + 'px)';
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', function() {
        cursor.classList.add('hidden');
    });

    document.addEventListener('mouseenter', function() {
        cursor.classList.remove('hidden');
    });

    // Hover effect on links and buttons
    var hoverTargets = document.querySelectorAll('a, button, .clickable, input[type="submit"], input[type="button"]');
    hoverTargets.forEach(function(target) {
        target.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        target.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });

    // Active effect on click
    document.addEventListener('mousedown', function() {
        cursor.classList.add('active');
    });
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('active');
    });
})();
