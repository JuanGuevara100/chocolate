function searchData() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');

    // Reemplaza esta URL con la URL de tu API real
    const apiUrl = `https://jsonplaceholder.typicode.com/posts${searchInput}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            resultsDiv.innerHTML = '';

            if (data.length > 0 ) {
                data.forEach((item) => {
                    const resultItem = document.createElement('div');
                    resultItem.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}