const cardapio = document.querySelector(".cardapio")
const mostrarCardapio = document.querySelector(".mostrar")
let mostrarProdutos = "";
const price = document.querySelector(".price")

function mostrar(){
        menuOptions.forEach(item => {
            mostrarProdutos += `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <h2>${item.name}</h2>
                    <p>R$${item.price}</p>
                </div>`;
                
        })

        cardapio.innerHTML = mostrarProdutos;

        console.log(menuOptions)
        return menuOptions
}

function desconto(){
    const mostrarProdutos = menuOptions.map(item => {
        const produtoComDesconto = item.price - (item.price * 0.10)
        return `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <h2>${item.name}</h2>
                    <p>R$${produtoComDesconto}</p>
                </div>`;
    }).join("")

        cardapio.innerHTML = mostrarProdutos;

}