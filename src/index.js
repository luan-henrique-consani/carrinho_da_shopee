import createItem from "./services/items.js";
import * as cartService from "./services/cart.js"

const myCart = [];

console.log("Bem vindo ao seu carrinho da shopee");

const item1 = await createItem("Poco x6 pro 5g", 2900, 2);
const item2 = await createItem("ReDragon Daksa Blue", 250, 4);

await cartService.addItems(myCart, item1);
await cartService.addItems(myCart, item2);

await cartService.dispalyCart(myCart);

await cartService.removeItem(myCart, item1);

await cartService.dispalyCart(myCart);

await cartService.calculateTotal(myCart);

