document.addEventListener('DOMContentLoaded', () => {
    const mainThumbnail = document.getElementById('main-thumbnail');
    const thumbnailImages = document.querySelectorAll('.thumbnails img');
    const buyButton = document.getElementById('buyButton');
    const productName = document.getElementById('product-name').innerHTML;

    //productID
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const productID = url.pathname.split('/').pop();

    console.log('Product Name:', productName);
    console.log('Product ID:', productID);

    buyButton.addEventListener('click', () => {
        const selectedColor = document.getElementById('colorSelect').value;
        const selectedMaterial = document.getElementById('materialSelect').value;
        const quantity = document.getElementById('quantityInput').value;

        const message = `¡Hola! Me interesa comprar el producto ${productName} (${productID}), color ${selectedColor}, material ${selectedMaterial}, cantidad ${quantity}. ¿Puedes proporcionarme más información?`;

        console.log('WhatsApp Message:', message);

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/5491158338131?text=${encodedMessage}`;

        console.log('WhatsApp URL:', whatsappURL);

        // Redirige al usuario a la URL de WhatsApp
        window.location.href = whatsappURL;
    });

    // Thumbnails selector
    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainThumbnail.src = thumbnail.src;
            thumbnailImages.forEach(image => {
                image.classList.remove('selectedThumbnail');
            });
            thumbnail.classList.add('selectedThumbnail');
        });
    });
});
