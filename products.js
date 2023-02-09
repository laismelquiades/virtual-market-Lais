const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
]

let listFruits = []
let listDrinks = []
let listHygiene = []

let container = document.querySelector('.container')
let mainFruits = document.querySelector ('.fruits')
let mainDrinks = document.querySelector ('.drinks')
let mainHygiene = document.querySelector ('.hygiene')



let ulFruits = document.createElement('ul')
let ulDrinks = document.createElement('ul')
let ulHygiene = document.createElement('ul')
mainFruits.appendChild(ulFruits)
mainDrinks.appendChild(ulDrinks)
mainHygiene.appendChild(ulHygiene)


function separateItens(products) {
  for(let i = 0; i < products.length; i++) {
      if (products[i].category === "Frutas") {
      listFruits.push(products[i]) 
      } else if (products[i].category === "Bebidas"){
        listDrinks.push(products[i])
      } else {
        listHygiene.push(products[i])
      }
  }
}  
separateItens(products)
console.log(listDrinks)
console.log(listFruits)
console.log(listHygiene)


function createCard(itens) {
  let tagLi = document.createElement("li")
  tagLi.classList.add("product")
  let tagImage = document.createElement("img")
  tagImage.classList.add("product-img")
  let tagMain = document.createElement("main")
  tagMain.classList.add('product-main')
  let tagH1 = document.createElement("h1")
  tagH1.classList.add('product-title')
  let tagH5 = document.createElement("h5")
  tagH5.classList.add("product-category")
  let tagPreco = document.createElement("strong")
  tagPreco.classList.add("product-price")

  tagImage.src = itens.image
  if(itens.image == undefined) {
    tagImage.src ="img/products/no-img.svg"
  }

  tagImage.alt = itens.imageDescription
  tagH1.innerText = itens.title
  tagH5.innerText= itens.category
  tagPreco.innerText = itens.price

    
  tagMain.append(tagH1,tagH5, tagPreco)
  tagLi.append(tagImage,tagMain)
  
  return tagLi
} 

function listaProdutos (produtos, lista) {
    
  for(i = 0; i < produtos.length; i++) {
      
      let liCard = createCard(produtos[i])

      lista.appendChild(liCard)
     
  }
}

listaProdutos(listFruits, ulFruits)
listaProdutos(listDrinks, ulDrinks)
listaProdutos(listHygiene, ulHygiene)
