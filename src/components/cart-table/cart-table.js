import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deletFromCart, changedCount} from '../../actions';


const CartTable = ({menu, deletFromCart, changedCount}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    menu.map((item, i) => {
                        const {title, price, url, id, count } = item;
                        let total = price * count;
                        if (item.count <= 0) {
                            return null;
                        } else{
                        return (
                            <div key={i} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-price"><input className="cart__item-count" 
                                type="number"
                                onChange={(e) => { 
                                    let value = e.target.value;
                                    changedCount(id, value)
                                }}
                                value={count}></input> pc.</div>
                                <div className="cart__item-price">Total {total}$</div>
                                <div onClick={() => deletFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )}
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({menu, total, newValue}) => {
    return {
        menu,
        total,
        newValue
    }
};

const mapDispatchToProps = {
    deletFromCart,
    changedCount
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);