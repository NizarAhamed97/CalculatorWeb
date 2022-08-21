let output = document.querySelector('#output')
let buttons = document.querySelectorAll('button')
let display = document.querySelector('#display')

// buttons.map(button => {
//     button.addEventListener("click", (e) => {
//         console.log(e);
//     })
// })

for (let button of buttons) {
    button.addEventListener("click", () => {
        if (button.innerText == 'C') {
            display.innerHTML = '';
            output.innerHTML = '';
        } else if (button.innerText == '=') {
            try {
                output.innerHTML = eval(display.innerHTML)
            } catch {
                output.innerHTML = 'Error'
            }
        } else {
            display.innerHTML += button.innerText
        }
    })
}