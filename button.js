const variant_input = document.querySelector("#variant-input");
const submit = document.querySelector("#submit");
const container = document.querySelector("#container");
const key_label = document.querySelector("#key-label");
const openedText_label = document.querySelector("#openedText-label");

const openedText_input = document.querySelector("#openedText-input");
const key_input = document.querySelector("#key-input");
const shifts_input = document.querySelectorAll(".shift-input");

let openedText_value = document.querySelector("#openedText-input").value;
let key_value = document.querySelector("#key-input").value;
let shifts = [];
let radioBtns_Arr = [];

submit.addEventListener("click", function() {
    indexBtn_Box.textContent = "";
    radioBtns_Arr = [];
    openedText_value = document.querySelector("#openedText-input").value;
    key_value = document.querySelector("#key-input").value;
    shifts = [];
    for (let i = 0; i < 3; i++) {
        let val = document.querySelector(`#shift${i+1}`).value;
        if (val == "")
            val = 0;
        shifts.push(val);
    }
    if (openedText_value != "" && key_value != "") {
        key_label.innerHTML = key_value;
        openedText_label.innerHTML = openedText_value;
        main(key_value, openedText_value, shifts);
        container.style.display = "flex";
        

        // Кнопушки для переключения части текста
        if (openedTextArrs.length > 1) {
            for (let i = 0; i < openedTextArrs.length; i++) {
                let radio = document.createElement("input");
                radio.type = "radio";
                radio.id = "part" + i+1;
                radio.name = "parts";
                radio.value = i;
                if (i == 0) {
                    radio.checked = true;
                }
                let label = document.createElement("label")
                label.htmlFor = "part" + i+1;
                for (let j = 0; j < 8; j++) {
                    char = openedText_value[j+i*8];
                    if (char === undefined) {
                        char = "";
                    }
                    label.innerHTML += char;
                }
                radioBtns_Arr.push(radio);
                indexBtn_Box.appendChild(radio)
                indexBtn_Box.appendChild(label);
            }
        }

        for (let i = 0; i < radioBtns_Arr.length; i++) {
            radioBtns_Arr[i].addEventListener("change", (event) => main(key_value, openedText_value, shifts, event.target.value));
        }
    }
});

variant_input.addEventListener("change", (event) => {
    if (event.target.value == -1) {
        openedText_input.value = "";
        key_input.value = "";
    }
    else {
        openedText_input.value = textsList[textVars[event.target.value]-1];
        key_input.value = keysList[keyVars[event.target.value]-1];
        for (let i = 0; i < 3; i++) {
            shifts_input[i].value = shiftsList[event.target.value][i];
        }
    }
});


// for (let i = 0; i < radioBtns_Arr.length; i++) {
//     radioBtns_Arr[i].addEventListener("change", main(key_value, openedText_value, shifts, radioBtns_Arr[i].value));
// }