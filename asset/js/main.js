
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
    const img = immagini[i]
    const elementImg = `<img class="img-fluid active" src="${img}" alt="">`
    console.log(elementImg);
    imgCard.insertAdjacentHTML('beforeend', elementImg)
}