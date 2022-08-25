import { useState } from 'react';
import { Card, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartItem = ({ phone, addCart }) => {

    let kredit = (phone.narxi*1 / 10) + phone.narxi*1

    const notify = () => {
        toast.success(`${phone.name} savatchaga qoshildi`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    console.log(phone)

    return (
        <Col md="4">
                <div className="phone-card">
                    <Card className="card">
                        <Link to={'/product/' + phone.id} className='product-link'>
                        <div className='card-img'>
                            <img src={phone.img} />
                        </div>
                        </Link>
                        <span className='card-name'>{phone.name}</span>
                        <span className='card-narxi'>{phone.skidka_narxi} so`m</span>
                        <span className='card-kredit-narxi'>{parseInt(kredit / 24)} so`mdan / 24 oy</span>
                        <div className='notify' onClick={notify}>
                            <button className='card-btn'  onClick={() => addCart(phone)}><HiOutlineShoppingCart /> Savatchaga</button>
                        </div>
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
                    </Card>
                </div>
        </Col>
    );
}

export default CartItem;