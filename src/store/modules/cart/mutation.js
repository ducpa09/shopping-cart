export default {
    SET_CART(state, payload) {
        state.cart = payload;
    },
    ADD_PRODUCT_TO_CART(state, payload) {
        payload.quantity = 1;
        state.cart.push(payload);
    },
    INCREASE_ITEM_QUATITY(state, payload) {
        payload.quantity++;
    },
    CLEAR_CART(state) {
        state.cart = []
    },
    SET_CHECKOUT_STATUS(state, payload) {
        state.checkoutStatus = payload;
    }
}