window.addEventListener(("load"), () => {

    var div = document.querySelector("footer div")
    div.onclick = () => {
        let name;
        while (typeof (name) == "undefined") {
            name = prompt("What is your name?");
            if (name != null && name != "" && window.confirm("Are you sure " + name + " is your name ?")) {
                div.innerText = "Hello " + name + " !"
            } else {
                return name = prompt("what is your name ?");
            }
        }
    }
})
