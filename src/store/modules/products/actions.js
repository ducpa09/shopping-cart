export default {
    fetchProduct: ({ commit }, { limit = 5 }) => {
        fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
            method: "get",
        }).then((res) => res.json()).then((json) => {
            commit('setProduct', json)
        }).catch(err => {
            console.log(err);
        })
    },
    fetchProductById: ({ commit }, payload) => {
        commit('getProductById', payload)
    }
}