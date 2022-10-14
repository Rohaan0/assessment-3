function buttonClick1(evt){
    evt.preventDefault()
    alert(`My Favorite Color is Red`)
}

function buttonClick2(evt){
    evt.preventDefault()
    alert(`My Favorite place is Red`)
}

function buttonClick3(evt){
    evt.preventDefault()
    alert(`My Favorite ritual is red`)
}



const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')

color.addEventListener('click', buttonClick1)
place.addEventListener('click', buttonClick2)
ritual.addEventListener('click', buttonClick3)