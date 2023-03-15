
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
    const elementImg = `<img id="immagine${i}" class="img-fluid ${i == activeimage ? "active" : ""}" src="${imgSrc}" alt="">`
    console.log(elementImg);
    imgCard.insertAdjacentHTML('beforeend', elementImg)

   
    // il for active
    // if (i === activeimage) {
    //     console.log('active')
    // } else {
    //     console.log('non active')
    // }
}

//definire tutte le slide
const cardElement = document.querySelectorAll('.card-img > img')
console.log(cardElement)

// add funtion at clic next
document.querySelector('.next').addEventListener('click', function () {
        console.log('cliccato')
        // selezionare la slaide attiva 
        let currentSlide = cardElement[activeimage]
        currentSlide.classList.remove('active')

        // dobbiamo controllare se il valore dell'immagine attiva è uguale al valore dell'array
        if (activeimage === immagini.length - 1) {
            // se si allora riportiamo il valore di activeimmage a zero.
            activeimage = 0
        } else {
            // altrimenti incrementiamo
            activeimage++
        }
        currentSlide = cardElement[activeimage]
        currentSlide.classList.add('active')
})

document.querySelector('.prev').addEventListener('click', function () {
    console.log('cliccato')
    // selezionare la slaide attiva 
    let currentSlide = cardElement[activeimage]
    currentSlide.classList.remove('active')

    // DEVO VERIFICARE SE IL VALORE di activeimage è ugualea zero
    if (activeimage === 0) {
        activeimage = cardElement.length - 1
    } else {
        // se è vero active image deve essere array meno 1
        activeimage--
    } 
    currentSlide = cardElement[activeimage]
    currentSlide.classList.add('active')

})
