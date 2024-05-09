const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.mapAll')
const sumAll = document.querySelector('.sumAll')
const filterAll = document.querySelector('.filterAll')

let myLi = ''

function showAll(productsArray){
let = myLi =''
    productsArray.forEach(product => {
   myLi += `
        <li >
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price" > ${formatCurrency(product.price)}</p>
        </li>
`
function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style : 'currency',
        currency :'BRL'
        
    })
    return newValue
}

})
list.innerHTML = myLi
}
function mapAllitems() {
   const newPrices = menuOptions.map ((product ) => ({
    ...product,
    price:product.price * 0.9,
   
    

   
}))
showAll(newPrices)
console.log(newPrices)
}

function sumAllItems(){
    const totalValue = menuOptions.reduce((acc , curr) => acc + curr.price ,0)
    list.innerHTML = `<li >
            <p > O Valor total dos itens é: ${totalValue}</p>
        </li>
`   
}

function filterAllitems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click' ,()=> showAll(menuOptions))
buttonMapAll.addEventListener('click' , mapAllitems)
sumAll.addEventListener('click' , sumAllItems)
filterAll.addEventListener('click' , filterAllitems)