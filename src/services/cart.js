// -> adicionar items ao carrinho
async function addItems(userCart, item) {
    userCart.push(item);
}
// -> calcular total do carrinho
async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subTotal(), 0));
}
// -> deletar items do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if(index !== -1){
        userCart.splice(index, 1);
    }
    
}
// -> remover items do carrinho
async function removeItem(userCart, item) {
    const foundIndex = userCart.findIndex((p) => p.name === item.name);

    if(foundIndex == -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[foundIndex].quantity > 1){
        userCart[foundIndex].quantity -= 1;

        return;
    }else if(userCart[foundIndex].quantity == 0){
        userCart.splice(foundIndex, 1);
        return;
    }
    
}
async function dispalyCart(userCart) {
    console.log("Lista do carrinho:");
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} | R$ ${item.price} | x${item.quantity} | Subtotal: R$ ${item.subTotal()}`);
    });
}

export {
    addItems,
    calculateTotal,
    deleteItem,
    removeItem,
    dispalyCart
}
