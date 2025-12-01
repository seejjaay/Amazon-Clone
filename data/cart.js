export const cart = []

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })

    let quantity = document.querySelector(`.js-quantity-selector-${productId}`).value
    

    if (matchingItem){
        matchingItem.quantity += Number(quantity);
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    
}
