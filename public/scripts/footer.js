document.addEventListener('DOMContentLoaded', function () {
    const phoneLink = document.getElementById('phoneLink')
    const emailLink = document.getElementById('emailLink')

    if (phoneLink) {
        phoneLink.addEventListener('click', function (event) {
            event.preventDefault();
            copyToClipboard('01158338131');
        })
    }

    if (emailLink) {
        emailLink.addEventListener('click', function (event) {
            event.preventDefault()
            copyToClipboard('albertoluis196@hotmail.com')
        })
    }

    function copyToClipboard(text) {
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        // Mensaje estético
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = 'Enlace copiado';
        document.body.appendChild(notification);

        // Desaparecer el mensaje después de unos segundos
        setTimeout(function () {
            document.body.removeChild(notification);
        }, 2000);
    }
})