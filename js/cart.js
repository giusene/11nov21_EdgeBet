export const cart = []

export function addToCart(bet) {
    const checkSameBet = cart.find((item) => {
        if (item.id === bet.id && item.market_key === bet.market_key) {
            return item
        }
    });


    if (cart.indexOf(checkSameBet) < 0) {
        cart.push(bet);
        console.log(cart)
    } else {
        cart.splice(cart.indexOf(checkSameBet),1,bet);
        console.log(cart)
    }
}