export default {
    getCartFromStorage({ commit }) {
        let cart = window.localStorage.getItem('cart');
        const cartArr = JSON.parse(cart);
        if (cartArr) {
            commit('SET_CART', cartArr);
        } else {
            commit('SET_CART', []);
        }
    },
    addProductToCart: ({ state, commit }, payload) => {
        const cartItem = state.cart.find(x => x.id === payload.product.id);
        const product = {
            id: payload.product.id, name: payload.product.title,
            price: payload.product.price, size: payload.size, color: payload.color,
            image: payload.product.image
        }
        if (cartItem) {
            commit('INCREASE_ITEM_QUATITY', cartItem)
        } else {
            commit('ADD_PRODUCT_TO_CART', product)
        }
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        window.localStorage.setItem('cartCount', state.cart.length);

    },
    checkout: ({ state, commit }) => {
        let cart = state.cart
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart)
        };
        fetch("someApi", requestOptions)
            .then(response => response.json())
            .then(data => {
                commit('SET_CHECKOUT_STATUS', 'Checkout succesfull')
                commit('CLEAR_CART');
                console.log(data);
            }).catch(err => {
                console.log(err);
                commit('SET_CHECKOUT_STATUS', 'Checkout fail')
            });


    }
}