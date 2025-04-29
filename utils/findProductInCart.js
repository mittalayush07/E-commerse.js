export const findProductInCart = (cart1, id) => {
    const isProductInCart = cart1 && cart1.length > 0 && cart1.some(({_id}) => _id===id);
    return isProductInCart;
}