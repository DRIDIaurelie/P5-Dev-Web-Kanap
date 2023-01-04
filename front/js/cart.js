const cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.forEach(item => fetchItem(item))

function fetchItem(item) {
    fetch(`http://localhost:3000/api/products/${item.id}`)
   .then((response) => response.json())
   .then((res) => displayItem(item, res))
}

function displayItem(cartItem, product) {
    const article = makeArticle(cartItem)
    const imageDiv = makeImageDiv(product)
    article.appendChild(imageDiv)

    const cardItemContent = makeCartContent(cartItem, product)
    article.appendChild(cardItemContent)

    displayArticle(article)
    displayTotalPrice()
}
function displayTotalPrice() {
    let total = 0
    const totalPrice = document.querySelector("#totalPrice")
    cart.forEach((item) => {
        const totalUnitPrice = item.Price * item.quantity
        total += totalUnitPrice
    })
    totalPrice.textContent = total
    
}

function makeCartContent(cartItem, product) {
    const cardItemContent = document.createElement("div")
    cardItemContent.classList.add("cart__item__content")

    const description = makeDescription(cartItem, product)
    const settings = makeSettings(item)

    cardItemContent.appendChild(description)
    cardItemContent.appendChild(settings)
    return cardItemContent

}
function makeSettings(item){
    const settings = document.createElement("div")
    settings.classList.add("cart__item__content__settings")

    addQuantityToSettings(settings, item)
    addDeleteToSettings(settings)
    return settings
}
function addDeleteToSettings(settings){
    const div = document.createElement("div")
    div.classList.add("cart__item__content__settings__delete")
    const p = document.createElement("p")
    p.textContent = "supprimer"
    div.appendChild(p)
    settings.appendChild(div)

}

function addQuantityToSettings(settings, item){
    const quantity = document.createElement("div")
    quantity.classList.add("cart__item__content__settings__quantity")
    const p = document.createElement("p")
    p.textContent = "Qté : "
    quantity.appendChild(p)
    const input = document.createElement("input")
    input.type = "number"
    input.classList.add("itemQuantity")
    input.name = "itemQuantity"
    input.min = "1"
    input.max = "100"
    input.value = item.quantity
    
    quantity.appendChild(input)
    settings.appendChild(quantity)


}

function makeDescription(cartItem, product){
    const description = document.createElement("div")
    description.classList.add("cart__item__content__description")
    
    const h2 = document.createElement("h2")
    h2.textContent = product.name
    const p = document.createElement("p")
    p.textContent = cartItem.color
    const p2 = document.createElement("p")
    p2.textContent = product.price = " €"
    
    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p2)
    return description
}

function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article)
}

function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = item.id
    article.dataset.color = item.color
    return article
}

function makeImageDiv(item) {
    const div = document.createElement("div")
    div.classList.add("cart__item__img")

    const image = document.createElement("img")
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)  
    return div
}