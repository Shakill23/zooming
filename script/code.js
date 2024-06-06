// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
// let products = JSON.parse(localStorage.getItem('products'))? JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
    let products = JSON.parse(localStorage.getItem('products'))
    ? JSON.parse(localStorage.getItem('products'))
    : localStorage.setItem('products', JSON.stringify([
        {
            id: 1,
            productName: "Air Fryer",
            category: "Appliance",
            description: "Appliance with 16GB RAM and 512GB SSD",
            price: 2000,
            img_url: "https://shakill23.github.io/allImages/images/airFryer.webp"

        },
        {
            id: 2,
            productName: "Blender",
            category: "Appliance",
            description: "Appliance with 16GB RAM and 512GB SSD",
            price: 2000,
            img_url: "https://shakill23.github.io/allImages/images/blender.jpg"

        },
        {
            id: 3,
            productName: "Kettle",
            category: "Appliance",
            description: "Appliance with 16GB RAM and 512GB SSD",
            price: 2000,
            img_url: "https://shakill23.github.io/allImages/images/kettle.webp"

        },
        {
            id: 4,
            productName: "Microwave",
            category: "Appliance",
            description: "Appliance with 16GB RAM and 512GB SSD",
            price: 2000,
            img_url: "https://shakill23.github.io/allImages/images/microwave.jpg"

        },
        {
            id: 5,
            productName: "Expresso Machine",
            category: "Appliance",
            description: "Appliance with 16GB RAM and 512GB SSD",
            price: 2000,
            img_url: "https://shakill23.github.io/allImages/images/expressoMachine.jpg"

        }
    ]));
    function recentProducts() {
        let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        latestProducts.forEach(product => {
            wrapper.innerHTML += `<div class="card"">
      <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading ="lazy">
      <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">${product.description}</p>
      </div>
    </div>`
        });
    }
    recentProducts()

