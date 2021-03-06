const initialState = {
    menu: [],
    loading: true,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            }
            const items = state.items;
            let initialValue = 0;
            let total = items.reduce((total, itm) => total + itm.price, initialValue) + newItem.price;
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total

            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            let removeItem = state.menu.find(item => item.id === idx);
            let incTotal = state.total - removeItem.price;
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: incTotal
            };
        default: 
            return state;
    }
}

export default reducer;