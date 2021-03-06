import React, { Component } from 'react'
import {ProductComsumer, ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import{ ButtonContainer} from './Button';


 class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, category, image, description,price,title,inCart } = value.detailProduct;
                    return (
                        <div className='container py-5'>
                            {/*title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h1>{title}</h1> 
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info*/}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <img src={image} className='img-fluid'
                                    alt={title} />
                                </div>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h2>model : {title}</h2>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    category : <span className='text-uppercase'>{category}</span>
                    </h4>
                    <h4 className='text-blue'>
                        <strong>price : <span>$</span>
                        {price}
                        </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                        some info about product
                    </p>
                    <p className='text-muted lead'>{description}</p>
                    <div>
                        <Link to='/'>
                            <ButtonContainer>back to products</ButtonContainer>
                            </Link>
                    <ButtonContainer 
                    cart
                    disabled= {inCart ? true : false}
                    onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                    }}>
                       
                        {inCart ? 'inCart' : 'add to cart'}
                    </ButtonContainer>
                        
                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );      
    }
}

export default Details;