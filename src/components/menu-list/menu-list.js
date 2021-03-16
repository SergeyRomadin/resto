import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCart} from '../../actions';
import Spinner from '../spinner';


import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => { 
            let modRes = res.map(item => {
                item.count = 0;
                item.totalPrice = item.count * item.price;
                
                return item;
            })
            
            return this.props.menuLoaded(modRes);
        });
    }

    render() {
        const {menuItems, loading, addedToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <ul className="menu__list">
                {
                menuItems.map((menuItem, i) => {

                    return <MenuListItem onAddToCart={() => addedToCart(menuItem.id)} key={i} menuItem={menuItem}/>
                })
            }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCart
};



export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));