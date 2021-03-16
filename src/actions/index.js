const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}   

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}  

const deletFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
} 

const changedCount = (id, value) => {
    return {
        type: 'ITEM_CHANGED_COUNT',
        payload: {
            id, 
            value
        }
    }
}

export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deletFromCart,
    changedCount
};