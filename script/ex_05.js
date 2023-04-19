window.onload = () => {
    const buttonsList = document.querySelector('footer div').querySelectorAll('button')
    const body = document.querySelector('body')
    const select = document.querySelector('footer div select')
    const div = document.querySelector('footer div')
    const bntPlus = buttonsList[0]
    const bntMoing = buttonsList[1]

    let taille = 16

    bntPlus.onclick = () => {
        taille++
        body.style.fontSize = taille + "px"
    }

    bntMoing.onclick = () => {
        if (taille > 1) {
            taille--
            body.style.fontSize = taille + "px"
        }
    }

    select.addEventListener('input', (ouf) => {
        console.log(ouf.target.value);
        const color = ouf.target.value
        div.style.backgroundColor = color
    })
}