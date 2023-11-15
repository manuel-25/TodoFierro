document.getElementById("searchForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('searchInput').value || '';
    const url = new URL('http://localhost:3000/catalogo');
    url.searchParams.append('name', name);

    // Utiliza href para asignar la URL completa
    window.location.href = url.href;
})