import React, { Component } from 'react';
import styled from 'styled-components';
import {Link, link} from "react-router-dom";
import { ProductConsumer } from '../context';










class Product extends Component {
    render() {
        const { id, title, image, price, inCart} = this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
               <div className='card'>
                <div className='img-container p-5' onClick={() => console.log('you click me')}>
                    <Link to='/details'>
                        <img src={image} alt='product' className='card-img-top' />
                    </Link>
                </div>
               </div>
            </ProductWrapper>
            
        )
    }
}

const ProductWrapper = styled.div`

`

export default Product;
