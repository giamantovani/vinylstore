
    
    
    fetch('http://localhost:3000/api/albumes')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tableBody');
        data.forEach(album => {
            const row = `<tr>
                            <td>${album.nombre}</td>
                            <td>${album.artista}</td>
                            <td>${album.anno}</td>
                            <td><img src="${album.portada}" alt="${album.nombre}" width="100"></td>
                            <td>${album.canciones.join(', ')}</td>
                         </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error al consumir la API:', error));