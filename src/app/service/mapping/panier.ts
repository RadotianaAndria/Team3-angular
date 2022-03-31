import { Product } from "../api.service";
 
export class Panier {
    idClient: number = 0;
    products: Product[] = [];
    quantite: number = 1;
    constructor(idClient:number){
        this.idClient = idClient;
    }

    // addToCart(id:string, quantity:number): void {
    //     this.products.set(id, quantity);    
    // };
}




// export class Panier {
//     idClient: number = 0;
//     products = new Map<string, number>();
//     constructor(idClient:number){
//         this.idClient = idClient;
//     }

//     addToCart(id:string, quantity:number): void {
//         this.products.set(id, quantity);    
//     };
// }


