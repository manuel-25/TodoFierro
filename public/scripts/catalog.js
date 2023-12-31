const APP_URL = window.location.origin;

document.getElementById("searchForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('searchInput').value || '';
    const url = new URL(`${APP_URL}/catalogo`);
    url.searchParams.append('name', name);
    url.searchParams.append('category', name);

    // Utiliza href para asignar la URL completa
    window.location.href = url.href;
})