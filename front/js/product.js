const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
if (id !=null) {
    let itemPrice = 0
    let imgUrl, altText, articleName
}



fetch(`http://localhost:3000/api/products/${id}`)
   .then((response) => response.json())
   .then((res) => handleData(res))

function handleData(canape) {
    const { altTxt, colors, description, imageUrl, name, price,} = canape
    itemPrice = price
    imgUrl = imageUrl
    altText = altTxt
    articleName = name
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.setAttribute('src', imageUrl)
    image.setAttribute('alt', altTxt)
    const parent = document.querySelector(".item__img")
    if (parent !=null) parent.appendChild(image)

}
function makeTitle(name) {
    const h1 = document.querySelector("#title")
    if (h1 !=null) h1.innerText = name
}

function makePrice(price) {
    const span = document.querySelector("#price")
    if (span !=null) span.innerText = price
}

function makeDescription(description){
    const p = document.querySelector("#description")
    if (p !=null) p.innerText = description
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
button.addEventListener("click", handleClick)

function handleClick() {
    const color = document.querySelector("#colors").value
    const quantity = document.querySelector("#quantity").value
    
    if (isOrderIsInvalid(color, quantity)) return
    saveOrder(color, quantity) 
    //redirectToCart()
}


function saveOrder(color, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingIndex = cart.findIndex(element => element.id === id && element.color === color);
    if(existingIndex === -1) {
        //nouveau produit
        const item = {
            id,
            color,
            quantity
        };
        cart.push(item);
    } else {
        //produit existant
        cart[existingIndex].quantity += quantity
    }

    localStorage.setItem('cart', JSON.stringify(cart))   
}

function isOrderIsInvalid(color, quantity) {
    if (color == null || color === "" || quantity == null || quantity <= 0 || quantity > 100) {
        alert("Please select a color and quantity")
        return true
    }
}
function redirectToCart(){
    window.location.href = "cart.html" 
}
cart.forEach(item => displayItem(item))

fonction fetchItem(item)
    fetch(`http://localhost:3000/api/products/${item.id}`)
   .then((response) => response.json())
   .then((res) => handleData(res))


 function displayItem(item){
    const article = makeArticle(item)
    const imageDiv = makeImageDiv(item)
    article.appendChild(cardItemContent)

    displayArticle(article)
    displayTotalPrice(item)
 }

 function displayTotalPrice(item) {
    let total = 0
    const totalPrice = document.querySelector("#totalPrice")
    cart.forEach((item) => {
        const totalUnitPrice = item.Price * item.quantity
        total += totalUnitPrice
 })
 totalPrice.textContent = total
 