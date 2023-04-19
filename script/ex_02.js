window.onload = () => {
    var div = document.querySelector('footer div');
    var click = 0;
    div.onclick = () => {
        click = click + 1;
        div.innerText = click;
    };
}