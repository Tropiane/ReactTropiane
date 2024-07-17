import { faker } from "@faker-js/faker";
import { app } from "./firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(app);
const productsCollection = collection(db, "productos");

export function createProducts (cant){


        for (let i = 0; i < cant; i++) {
            const product = {
                id : faker.string.uuid(),
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                image : faker.image.urlPicsumPhotos(),
                price : faker.commerce.price(),
                category : faker.commerce.department()
            }
            addDoc(productsCollection, product)
            .then((res) => {
                console.log(res)
                console.log("producto creado");
            })
            .catch((err) => {
                console.log(err);
                console.log("no se pudo crear el producto");
            })
        }

}

export async function getProducts (){
    const res = await getDocs(productsCollection)
    
    const products = res.docs.map((doc)=>{
        const product = doc.data()
        product.id = doc.id
        return product
    })
    return products
}
