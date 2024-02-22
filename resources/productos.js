let total = []

class Producto {
    constructor(nombre, descripcion, precio, href, alt) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.href = href
        this.alt = alt
    }

}

const Producto1 = new Producto("papa", "papa123", 123, "./public/product1.png", "producto1")
const Producto2 = new Producto("papa", "papa123", 123, "./public/product2.png", "producto2")
const Producto3 = new Producto("papa", "papa123", 123, "./public/product3.png", "producto2")
const Producto4 = new Producto("papa", "papa123", 123, "./public/product4.png", "producto2")
const Producto5 = new Producto("papa", "papa123", 123, "./public/product5.png", "producto2")
console.log(Producto1);
console.log(Producto2);

total.push(Producto1, Producto2, Producto3, Producto4, Producto5)

console.log(total);
total.forEach(producto => {
    document.getElementById("spanoso").innerHTML += `<div class="card" style="width: 18rem;">
<img src="${producto.href}" class="card-img-top" alt="${producto.alt}">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

});




