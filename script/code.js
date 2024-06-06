// Create products and store it on the local storage
let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify([
    {
        "productName": "Air Fryer",
            "category": "Appliance",
            "description": "Appliance with 16GB RAM and 512GB SSD",
            "price": 2000,
            "img_url": "https://shakill23.github.io/allImages/images/airFryer.webp"

        },
        {
        "productName": "Blender",
            "category": "Appliance",
            "description": "Appliance with 16GB RAM and 512GB SSD",
            "price": 2000,
            "img_url": "https://shakill23.github.io/allImages/images/blender.jpg"

        },
        {
        "productName": "Kettle",
            "category": "Appliance",
            "description": "Appliance with 16GB RAM and 512GB SSD",
            "price": 2000,
            "img_url": "https://shakill23.github.io/allImages/images/kettle.webp"

        },
        {
        "productName": "Microwave",
            "category": "Appliance",
            "description": "Appliance with 16GB RAM and 512GB SSD",
            "price": 2000,
            "img_url": "https://shakill23.github.io/allImages/images/microwave.jpg"

        },
        {
        "productName": "Expresso Machine",
            "category": "Appliance",
            "description": "Appliance with 16GB RAM and 512GB SSD",
            "price": 2000,
            "img_url": "https://shakill23.github.io/allImages/images/expressoMachine.jpg"

        }
]));