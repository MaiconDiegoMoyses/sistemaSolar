document.querySelectorAll('.planet, .sun').forEach(item => {
    item.addEventListener('mouseover', event => {
        const infoBox = document.getElementById('info-box');
        infoBox.innerText = event.target.getAttribute('data-info');
        infoBox.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        document.getElementById('info-box').style.display = 'none';
    });
    item.addEventListener('mousemove', event => {
        const infoBox = document.getElementById('info-box');
        infoBox.style.left = event.pageX + 10 + 'px';
        infoBox.style.top = event.pageY + 10 + 'px';
    });
});
