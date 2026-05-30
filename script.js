const cardapio = document.querySelector(".cardapio")
const mostrarCardapio = document.querySelector(".mostrar")
const price = document.querySelector(".price")
const total = document.querySelector(".total")

function mostrar(){
    let mostrarProdutos = "";
        menuOptions.forEach(item => {
            mostrarProdutos += `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <h2>${item.name}</h2>
                    <p>R$${item.price.toFixed(2)}</p>
                </div>`;
                
        })

        cardapio.innerHTML = mostrarProdutos;
}

function desconto(){
    const mostrarProdutos = menuOptions.map(item => {
        const produtoComDesconto = item.price - (item.price * 0.10)
        return `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <h2>${item.name}</h2>
                    <p>R$${produtoComDesconto.toFixed(2)}</p>
                </div>`;
    }).join("")

        cardapio.innerHTML = mostrarProdutos;

}

function soma() {
    let totalSomaProdutos = "";
    const totalProdutos = menuOptions.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual.price
    }, 0)

    totalSomaProdutos += `
        <p class="descontoProduto">Total: R$${totalProdutos.toFixed(2)}</p>`

        cardapio.innerHTML = totalSomaProdutos;
}

function filtrar(){
    const lanchesVeganos = menuOptions.filter(lanche => {
        if (lanche.vegan == true) {
            return true
        } else {
            return false
        }
    })

    let mostrarProdutosVeganos = "";
        lanchesVeganos.forEach(item => {
            mostrarProdutosVeganos += `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <h2>${item.name}</h2>
                    <p>R$${item.price.toFixed(2)}</p>
                </div>`;
                
        })

    cardapio.innerHTML = mostrarProdutosVeganos;

}