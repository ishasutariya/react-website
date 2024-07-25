
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
}

export const totalprice = (cart) => {
    console.log(cart,"cart");
    return cart.reduce((total, product) => {
        console.log(product.price * product.quantity,"hello");
        return total + product.price * product.quantity;
        }, 0);
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            const existingItem = state.find(item => item.id === action.product.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.product, quantity: 1 }];
        case "Remove":
            return state.filter(item => item.id !== action.product.id);
        case "Increase":
            return state.map(item =>
                item.id === action.product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case "Decrease":
            return state.map(item =>
                item.id === action.product.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        default:
            return state;
    }
};

export default CartReducer;

