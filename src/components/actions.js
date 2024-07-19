import { faker } from "@faker-js/faker";
import { app } from "./firebaseConfig";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc } from "firebase/firestore";

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
                category : faker.commerce.department(),
                stock : faker.number.int({ min: 0, max: 100 }),
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

  export async function filterCategories() {
    const res = await getDocs(productsCollection);
    
    
    const categories = res.docs
      .map((doc) => doc.data().category)
      .filter((value, index, arr) => arr.indexOf(value) === index);

    return categories;
  }


  export  function getUniqueCategories (cat){
      const filtro = query(productsCollection, where("category", "==", cat))
      return getDocs(filtro)

      .then((res) => {
          const products = res.docs.map((doc) => {
              const product = doc.data();
              product.id = doc.id;
              return product;
          })
          return products
      })
  }
  export async function getProductsId (prod){

    try {
        const filtro = doc(productsCollection, prod)
        const res = await getDoc(filtro)
        return res.data()
    } catch (error) {
        console.log(error)
    }
}
