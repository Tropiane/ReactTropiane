import { faker } from "@faker-js/faker";

function createProducts (cant){
    const products = []
    for (let i = 0; i < cant; i++) {
        const element = array[i];
        if(typeof cant !== "number") return;

        for (let i = 0; i < cant; i++) {
            const product = {
                id : faker.string.uuid(),
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                image : faker.image.urlPicsumPhotos(),
                price : faker.commerce.price()
            }
            products.push(product)
        }
    }
}