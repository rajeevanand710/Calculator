let string = ""
let buttons = document.querySelectorAll("button")

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("#display").innerHTML = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            document.querySelector("#display").innerHTML = string
        }
        else{
            // console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector("#display").value = string
            // console.log(string)
            document.querySelector("#display").innerHTML = string
        }
    })
});