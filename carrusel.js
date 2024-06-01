const vinyls = [
    { id: 1, title: 'Dark side of the moon', band: 'Pink Floyd', year: 1973, genre: 'Rock Progresivo', price: 20, condition: 'Nuevo', image: 'img/Dark_Side_of_the_Moon.png' },
    { id: 2, title: 'Elephant', band: 'White Stripes', year: 1991, genre: 'Rock Alternativo', price: 15, condition: 'Usado', image: 'img/Elephant,_The_White_Stripes.png' },
    { id: 3, title: 'Aqualung', band: 'Jethro Tull', year: 1959, genre: 'Rock Progresivo', price: 30, condition: 'Primera Edición', image: 'img/JethroTullAqualungalbumcover.jpg' },
    { id: 4, title: 'Studio Tan', band: 'Frank Zappa', year: 1978, genre: 'Rock Progresivo', price: 10, condition: 'Nuevo', image: 'img/Studio_Tan.jpg' },
    { id: 5, title: 'Live in Cook County Jail', band: 'B.B. King', year: 1971, genre: 'Blues', price: 25, condition: 'Nuevo', image: 'img/BBKing_LiveinCookCountyJail.jpg' },
    { id: 6, title: 'Texas Flood', band: 'Stevie Ray Vaughan', year: 1983, genre: 'Blues', price: 18, condition: 'Usado', image: 'img/Texas_Flood.jpg' },
    { id: 7, title: 'The Blues Is Alive and Well', band: 'Buddy Guy', year: 2018, genre: 'Blues', price: 22, condition: 'Nuevo', image: 'img/The_Blues_Is_Alive_and_Well.jpg' },
    { id: 8, title: 'In the Court of the Crimson King', band: 'King Crimson', year: 1969, genre: 'Rock Progresivo', price: 25, condition: 'Nuevo', image: 'img/In_the_Court_of_the_Crimson_King.jpg' },
    { id: 9, title: 'Fragile', band: 'Yes', year: 1971, genre: 'Rock Progresivo', price: 20, condition: 'Usado', image: 'img/Fragile_(Yes_album).jpg' },
    { id: 10, title: 'Close to the Edge', band: 'Yes', year: 1972, genre: 'Rock Progresivo', price: 30, condition: 'Nuevo', image: 'img/Close_to_the_Edge.jpg' },
    { id: 11, title: 'Kind of Blue', band: 'Miles Davis', year: 1959, genre: 'Jazz', price: 25, condition: 'Nuevo', image: 'img/Kind_of_Blue.jpg' },
    { id: 12, title: 'A Love Supreme', band: 'John Coltrane', year: 1965, genre: 'Jazz', price: 28, condition: 'Nuevo', image: 'img/A_Love_Supreme.jpg' },
    { id: 13, title: 'OK Computer', band: 'Radiohead', year: 1997, genre: 'Rock Alternativo', price: 25, condition: 'Nuevo', image: 'img/Radiohead_OK_Computer.jpg' },
    { id: 14, title: 'Siamese Dream', band: 'The Smashing Pumpkins', year: 1993, genre: 'Rock Alternativo', price: 18, condition: 'Usado', image: 'img/The_Smashing_Pumpkins_Siamese_Dream.jpg' },
    { id: 15, title: 'Nevermind', band: 'Nirvana', year: 1991, genre: 'Rock Alternativo', price: 20, condition: 'Nuevo', image: 'img/Nirvana_Nevermind.jpg' }
];

const cart = [];

function addToCart(vinylId) {
    const vinyl = vinyls.find(v => v.id === vinylId);
    cart.push(vinyl);
    alert(`${vinyl.title} ha sido añadido al carrito.`);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.title} - $${item.price}`;
        cartContainer.appendChild(cartItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const vinylList = document.getElementById('vinyl-list');
    const rockAlternativoList = document.getElementById('rock-alternativo-list');
    const bluesList = document.getElementById('blues-list');
    const carouselInner = document.getElementById('carousel-inner');

    let topVinyls = vinyls.slice(0, 8);

    const createVinylCard = (vinyl) => {
        return `
            <div class="col-4 col-md-3 vinyl-item">
                <div class="card">
                    <img src="${vinyl.image}" class="card-img-top" alt="${vinyl.title}">
                    <div class="card-body">
                        <h5 class="card-title">${vinyl.title}</h5>
                        <p class="card-text">${vinyl.band}</p>
                        <p class="card-text">${vinyl.year}</p>
                        <p class="card-text small-text">${vinyl.genre}</p>
                        <p class="card-text small-text">${vinyl.condition}</p>
                        <p class="card-text small-text">$${vinyl.price}</p>
                        <button class="btn btn-danger" onclick="addToCart(${vinyl.id})">Comprar</button>
                        <a href="vista_disco_${vinyl.id}.html" class="btn btn-dark">Ver Detalles</a>
                    </div>
                </div>
            </div>
        `;
    };

    // Add top vinyls to carousel
    [0, 4].forEach((startIndex, idx) => {
        const activeClass = idx === 0 ? 'active' : '';
        let slideContent = `<div class="carousel-item ${activeClass}"><div class="row">`;
        topVinyls.slice(startIndex, startIndex + 4).forEach(vinyl => {
            slideContent += createVinylCard(vinyl);
        });
        slideContent += '</div></div>';
        carouselInner.innerHTML += slideContent;
    });

    // Add vinyls to other lists
    vinyls.forEach(vinyl => {
        const col = document.createElement('div');
        col.className = 'col-4 col-md-3 vinyl-item';
        col.innerHTML = createVinylCard(vinyl);
        if (vinyl.genre === 'Rock Alternativo') {
            rockAlternativoList.appendChild(col);
        } else if (vinyl.genre === 'Blues') {
            bluesList.appendChild(col);
        } else if (!topVinyls.includes(vinyl)) {
            vinylList.appendChild(col);
        }
    });
});
