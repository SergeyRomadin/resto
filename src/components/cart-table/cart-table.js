import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deletFromCart} from '../../actions';


const CartTable = ({items, deletFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map((item, i) => {
                        const {title, price, url, id } = item;
                        return (
                            <div key={i} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deletFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deletFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);