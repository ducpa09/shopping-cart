export default {
    countItemInCart: (state) => {
        return state.cart.length;
    },
    calculateTotal: (state) => {
        const cart = state.cart;
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }
}