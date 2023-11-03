window.onload = function() {
    const radios = document.querySelectorAll('input[name="radio-btn"]')
    const labels = document.querySelectorAll('.manual-btn')
    radios[0].checked = true

    let intervalId = setInterval(changeRadio, 6000)

    function changeRadio() {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                radios[i].checked = false;
                labels[i].style.background = 'transparent'
                if (i + 1 < radios.length) {
                    radios[i + 1].checked = true;
                    labels[i + 1].style.background = 'var(--white-color)'
                } else {
                    radios[0].checked = true;
                    labels[0].style.background = 'var(--white-color)'
                }
                break
            }
        }
    }

    radios.forEach(function(radio, index) {
        radio.addEventListener('click', function() {
            clearInterval(intervalId)
            intervalId = setInterval(changeRadio, 6000)
            labels.forEach((label, i) => {
                label.style.background = i === index ? 'var(--white-color)' : 'transparent'
            })
        })
    })
}
