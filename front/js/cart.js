const cart = []

retrieveItemsFromCache()
cart.forEach((item) => displayItem(item))

function retrieveItemsFromCache() {
    const numberOfItems = localStorage.length
    for (let i = 0; i < numberOfItems; i++) {
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
    }
}

function displayItem(item) {
    const article = makeArticle(item)
    displayArticle(article)
    const div = makeImageDiv(item)
    article.appendChild(div)

    const cardItemContent = makeCardItemContent(item)
    article.appendChild(cardItemContent)
}

function makeCardItemContent(item){
    const div = document.createElement("div")
    div.classList.add("card__item__content")

    const description = document.createElement("div")
    description.classList.add("cart__item__content__description")

    const h2 = document.createElement("h2")
    h2.textContent = item.name
    const p = document.createElement("p")
    p.textContent = item.color
    const p2 = document.createElement("p")
    p2.textContent = item.price = " €"

    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p2)
    div.appendChild(description)
    return div
}

function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article)
}

function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("card__item")
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