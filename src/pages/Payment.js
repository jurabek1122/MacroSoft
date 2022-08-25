import { useState, useEffect } from 'react';
import { Form, InputGroup, Button } from "react-bootstrap";
import ClientDataServices from '../sevices/client-service';
import { Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


const Payment = ({ clientId, setClientId, card, setCard, onlypromo, afterPromoSum, clients, setClients, getClients }) => {

    
    
    const [narxi, setNarxi] = useState(afterPromoSum)
    const [mijoz, setMijoz] = useState("")
    const [buyurtma, setBuyurtma] = useState([...card])
    const [manzil, setManzil] = useState("")
    const [tel, setTel] = useState("")
    const [message, setMessage] = useState({ error: false, msg: "" });
    const navigate = useNavigate()

    


    const handlerSubmit = async(e) => {
        e.preventDefault();
        setMessage("")
        if (manzil === "" || tel === "") {
            setMessage({ error: true, msg: "All fields are mandatory!"})
            return;
        }
        const newClient = {
            manzil,
            narxi, 
            buyurtma,
            mijoz,
            tel
        }

        try {
            if (clientId !== undefined && clientId !== "") {
                await ClientDataServices.updateClient(clientId, newClient)
                setMessage({error: false, msg: "Updated Succesfully"})
                setClientId("")
            } else {
                await ClientDataServices.addClients(newClient)
                setMessage({error: false, msg: "New Phone Added Succesfully"})
            }
           
        } catch (err) {
            setMessage({ error: true, msg: err.message })
        }

        setMijoz("")
        setNarxi("")
        setTel("")
        setManzil("")
        setBuyurtma("")
    }

    const editHandler = async () => {
        setMessage("")
        try {
            const docSnap = await ClientDataServices.getClients(clientId)
            setMijoz(docSnap.data().mijoz)
            setNarxi(docSnap.data().narxi)
            setTel(docSnap.data().tel)
            setManzil(docSnap.data().manzil)
            setBuyurtma(docSnap.data().buyurtma)
        } catch (err) {
            setMessage({ error: true, msg: err.message})
        }
    }

    useEffect(() => {
        if(clientId !== undefined && clientId !== "") {
            editHandler();
        }
    }, [clientId])

    const getClientIdHandler = (id) => {
        setClientId(id)
    }

    const go = async () => {
        await getClients()
        navigate('/')
        setCard([])
    }
    
    return (
        <div className='container'>
        <h3>To`lov oynasi</h3>
            <Row style={{width: '100%'}} >
                <Col md="6" xs="12">
                    {
                        card?.map((item) => {
                            return (
                                <div className='shop-card'>
                                    <div className='payment-img'>
                                        <img src={item.img} alt='product img' />
                                    </div>
                                    <div className='payment-infos'>
                                        <span className='shop-nomi'>{item.name}</span>
                                        <span className='shop-narxi'>{item.skidka_narxi * item.quantity}</span>
                                    </div>
                                </div>
                            ) 
                        })
                    }
                    <p>Kod bo'yicha chegirma {onlypromo} so’m</p>
                    <p className='bold'>Umumiy narx {afterPromoSum} so’m</p>
                </Col>
                <Col md="6" xs="12">
                    <Form onSubmit={handlerSubmit}>
                        <Form.Group className="mb-3" controlId="formClientMijoz">
                            <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Ismingizni kiriting"
                                value={mijoz}
                                onChange={(e) => setMijoz(e.target.value)}
                            />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formClientManzil">
                            <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Manzilingizni kiriting"
                                value={manzil}
                                onChange={(e) => setManzil(e.target.value)}
                            />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formClientTel">
                            <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Telefon raqamingiz"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 d-n" controlId="formClientTel">
                            <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Telefon raqamingiz"
                                value={narxi}
                                onChange={(e) => setNarxi(e.target.value)}
                            />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 d-n" controlId="formClientTel">
                            <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Telefon raqamingiz"
                                value={buyurtma}
                                onChange={(e) => setBuyurtma(e.target.value)}
                            />
                            </InputGroup>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className="btn buy-btn mb-3" variant="primary" type='submit' onClick={go}>
                             Buyurtma Berish
                            </Button>
                        
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Payment;