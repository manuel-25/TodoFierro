const mainThumbnail = document.getElementById('main-thumbnail')
const thumbnailImages = document.querySelectorAll('.thumbnails img')

thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainThumbnail.src = thumbnail.src
        thumbnailImages.forEach(image => {
            image.classList.remove('selectedThumbnail')
        })
        thumbnail.classList.add('selectedThumbnail')
    })
})