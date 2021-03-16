// import { changedCount } from "../actions";

const initialState = {
    menu: [],
    loading: true,
    newValue: null,
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
            let items = state.menu;
            const item = items.find(item => item.id === id);
            item.count++;
            console.log(state);
            let initialValue = 0;
            let total = items.reduce((total, itm) => total + (itm.price * itm.count), initialValue);
            return {
                ...state,

                total

            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            let removeItem = state.menu.find(item => item.id === idx);
            let totalDec = state.total - (removeItem.price * removeItem.count);
            removeItem.count = 0;
            console.log(state);
            return {
                ...state,
                total: totalDec
            }
        case 'ITEM_CHANGED_COUNT':
            const idC = action.payload.id;
            const value = action.payload.value;
            const changedItem = state.menu.find(item => item.id === idC);
            changedItem.count = value;
            let initialValueCh = 0;
            let itemsCh = state.menu; 
            let totalCh = itemsCh.reduce((total, itm) => total + (itm.price * itm.count), initialValueCh);
            return {
                ...state,
                total: totalCh,
                newValue: value
            }

        default: 
            return state;
    }
}

export default reducer;