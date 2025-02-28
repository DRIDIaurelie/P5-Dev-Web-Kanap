fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))
 

function addProducts(sofa) {
    sofa.forEach((canape) => {      
        const { _id, imageUrl, altTxt, name, description } = canape
        const anchor = makeAnchor(_id)
        const article = document.createElement("article")
        const image = makeImage(imageUrl, altTxt)
        const h3 = makeH3(name)
        const p = makeParagraph(description)
        
        appendElementsToArticle(article, [image, h3, p])
        appendArticleToAnchor(anchor, article)   
    })
}
function appendElementsToArticle(article, array) {
    array.forEach((item) => {
        article.appendChild(item)
    })


}

function makeAnchor(id) {
    const anchor = document.createElement("a")
    anchor.setAttribute('href',"./product.html?id=" + id)
    return anchor    
}

function appendArticleToAnchor(anchor, article) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
        anchor.appendChild(article)        
    }   
}
function makeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.setAttribute('src', imageUrl)
    image.setAttribute('alt',altTxt)
    return image
}


function makeH3(name) {
    const h3 = document.createElement("h3")
    h3.innerText = name
    h3.classList.add("productName")
    return h3
} 
function makeParagraph(description) {
    const p = document.createElement("p")
    p.innerText = description
    p.classList.add("productDescription")
    return p      
}
 