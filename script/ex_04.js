window.addEventListener("load", () => {
    const div = document.querySelector("footer div");
    let charList = "";
    window.addEventListener("keydown", (event) => {
        if (event.key.length == 1) {
            charList += event.key;
            div.innerText = charList.slice(-42);
        }

        console.log(event.key);
    })
})