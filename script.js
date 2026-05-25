const cardapio = document.querySelector(".cardapio")
const mostrarCardapio = document.querySelector(".mostrar")

function mostrar(){
    let mostrarProdutos = "";
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
}