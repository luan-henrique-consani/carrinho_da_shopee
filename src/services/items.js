// -> criar item com o subtotal certo
async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subTotal: () => price * quantity,
    };
}
export default createItem;