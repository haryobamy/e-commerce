import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

 class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const  { modalOpen, closeModal } = value;
                    const  { image, title, price } = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return(
                      <ModalContainer>
                          <div className ='container'>
                              <div className='row'>
                                  <div className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'
                                  id='modal'>
                                      <h5>item added to the cart</h5>
                                      <img src={image} className='img-fluid'
                                      alt={title} />
                                      <h5 className='text-muted'>{title}</h5>
                        <h5>price : ${price}</h5>
                        <Link to='/'>
                            <ButtonContainer 
                            onClick={()=>closeModal()}>
                               store
                            </ButtonContainer>
                            </Link>
                            <Link to='/cart'>
                            <ButtonContainer 
                            cart
                            onClick={()=>closeModal()}>
                                go to cart
                            </ButtonContainer>
                            </Link>
                                  </div>
                              </div>
                          </div>

                      </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:  flex;
align-item:  center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}
`; 

export default Modal;