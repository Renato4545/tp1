const cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderCart(){
const container = document.getElementById("cart-items");
container.innerHTML = "";
let total = 0;


cart.forEach((item, index)=>{
total += item.preco;
const div = document.createElement("div");
div.innerHTML = `<p><strong>${item.nome}</strong> - ${item.preco.toFixed(2)}€ <button onclick="removeItem(${index})">Remover</button></p>`;
container.appendChild(div);
});
document.getElementById("cart-total").textContent = total.toFixed(2) + "€";
}


function removeItem(i){ cart.splice(i,1); localStorage.setItem("cart", JSON.stringify(cart)); renderCart(); }


document.getElementById("checkout-btn")?.addEventListener("click", ()=>{
alert("Compra finalizada! Obrigado pela preferência.");
localStorage.removeItem("cart");
location.reload();
});