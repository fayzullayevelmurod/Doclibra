const tooltip = document.getElementById('tooltip');
const tooltip_icon = document.querySelector('#tooltip span');

tooltip.addEventListener('click', () => {
    tooltip_icon.textContent = 'Copied'

    setTimeout(() => {
        tooltip_icon.textContent = 'Copy to Clipboard?' 
    }, 3000);
})