const radios = document.querySelectorAll('input[name="radio-btn"]')

function changeRadio() {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked = false;
            if (i + 1 < radios.length) {
                radios[i + 1].checked = true;
            } else {
                radios[0].checked = true;
            }
            break;
        }
    }
}

setInterval(changeRadio, 4000)