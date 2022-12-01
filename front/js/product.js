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

const button = document.querySelector("#addToCart")
if (button != null) {
    button.addEventListener("click", (e) => {
        const color = document.querySelector("#colors").value
        const quantity = document.querySelector("#quantity").value
        if (color == null || color === "" || quantity == null || quantity == 0) {
            alert("Please select a color and quantity")
        }
        const data = {
            id: id,
            color: color,
            quantity: Number(quantity),
        }
        localStorage.setItem(id, JSON.stringify(data))
    })
}
  



//Ecouter le clic sur le bouton #addToCart
//const ajouterAuPanier = (event) => {
    //const selectedColor = document.getElementById('colors').value
    //const selectedQuantity = document.getElementById('quantity').value

    //const cartItem = {
   //     id: "",
    //    color: selectedColor,
   //     qty: selectedQuantity,
    //}

    //const cartStorage = localStorage.getItem('cart') ?? "[]"
    //const cartItems = JSON.parse(cartStorage)

    //cartItems.push(cartItem);

    //localStorage.setItem('cart', JSON.stringify(cartItems));

//}

//const addToCartButton = document.getElementById('addToCart')

//addToCartButton.addEventListener('click', ajouterAuPanier);