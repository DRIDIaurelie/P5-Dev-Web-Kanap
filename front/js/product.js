const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")



fetch(`http://localhost:3000/api/products/${id}`)
   .then((response) => response.json())
   .then((res) => handleData(res))

function handleData(canape) {
    const { altTxt, colors, description, imageUrl, name, price,} = canape
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.setAttribute('src', imageUrl)
    image.setAttribute( 'alt', altTxt)
    const parent = document.querySelector(".item__img")
    if (parent !=null) parent.appendChild(image)

}
function makeTitle(name) {
    const h1 = document.querySelector("#title")
    if (h1 !=null) 
    h1.innerText = name
}

function makePrice(price) {
    const span = document.querySelector("#price")
    if (span !=null) 
    span.innerText = price
}

function makeDescription(description){
    const p = document.querySelector("#description")
    if (p !=null) 
    p.innerText = description
}

function makeColors(colors) {
    const select = document.querySelector("#colors")
    if (select !=null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.innerText = color
            select.appendChild(option)

        })
    }
}
   