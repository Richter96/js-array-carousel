
const immagini = [
    './asset/img/01.webp',
    './asset/img/02.webp',
    './asset/img/03.webp',
    './asset/img/04.webp',
    './asset/img/05.webp'
]


const imgCard = document.querySelector('.card-img')
let activeimage = 0

for (i = 0; i < immagini.length; i++) {
    console.log(i)
    // collego il link immagini con una costante
    const imgSrc = immagini[i]
    // add imgSrc in a string HTml
    const elementImg = `<img id="immagine${i}" class="img-fluid ${ i == activeimage ? "active" : ""}" src="${imgSrc}" alt="">`
    console.log(elementImg);
    imgCard.insertAdjacentHTML('beforeend', elementImg)

    // il for active
    // if (i === activeimage) {
    //     console.log('active')
    // } else {
    //     console.log('non active')
    // }
}


document.querySelector('.next').addEventListener('click', function(){
    console.log('cliccato')
})

