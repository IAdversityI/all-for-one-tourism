var content = document.getElementById('content'), oy;

function mousemove(e) {
    e = e || window.event;
    content.scrollTop += -(e.clientY - oy) / 15;
}

function mouseup() {
    content.className = '';
    content.onmouseup = content.onmousemove = null;
}

content.onmousedown = function (e) {
    content.onmousemove = mousemove;
    content.onmouseup = mouseup;
    e = e || window.event;
    oy = e.clientY;
    content.className = 'noselect';
}
