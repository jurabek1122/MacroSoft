import { useState } from 'react';
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



const AdminLogin = () => {

    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const navigate = useNavigate()

    const kirish = () => {
        if(loginValue === 'karimjonov' && passwordValue === 'jurabek') {
            navigate('/dsjpiwnwecbrnwr')
        } else {
            console.log('xato')
        }
    }

    return (
        <div className='admin-login'>
            <Form>
                <Form.Group className="mb-3" controlId="formClientMijoz">
                    <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Login"
                        value={loginValue}
                        onChange={(e) => setLoginValue(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formClientManzil">
                    <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    </InputGroup>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button className="btn mb-3" variant="primary" type="button" onClick={kirish}>
                        Kirish
                    </Button>
                
                </div>
            </Form>
        </div>
    )
}

export default AdminLogin;