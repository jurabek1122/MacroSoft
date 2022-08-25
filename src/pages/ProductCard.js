import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ phones, addCart }) => {

    const [productInfo, setProductInfo] = useState([])
    const params = useParams()

    let phone = phones.filter(item => item.id === params.id)
    console.log(phone)
    
    const notify = () => {
        toast.success(`${phone[0].name} savatchaga qoshildi`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <div>
            {
                phones.map((item) => {
                    return (
                        <div>
                            { item.id === params.id && (
                                <div className='product-card container'>
                                <h2>{item.name}</h2>
                                <Row  style={{width: '100%'}}>
                                    <Col md="6" xs="12" className='product-card-img' >
                                        <img src={item.img} />
                                    </Col>
                                    <Col md="6" xs="12">
                                        <h4>Mahsulot haqida</h4> <br />
                                        <h5>Ishlab chiqaruvchi: {item.company}</h5> <br />
                                        <h5>Narxi: {item.skidka_narxi} so`m</h5> <br />
                                        <h5>Mahsulot miqdori: {item.soni}</h5> <br />
                                        <div className='notify' onClick={notify}>
                                            <button className='card-btn'  onClick={() => addCart(item)}><HiOutlineShoppingCart /> Savatchaga</button>
                                        </div>
                                    </Col>
                                </Row>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={1500}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                                </div>
                            )}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductCard;