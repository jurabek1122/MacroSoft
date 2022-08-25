import { Row, Col } from 'reactstrap';
import { BsPhone } from 'react-icons/bs';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { MdOutlineLaptopChromebook } from 'react-icons/md';

const ProductsMenu = ({ active, setActive }) => {

    return (
        <div className='products-menu container'>
            <Row style={{width: '100%'}}>
                <Col md="3" xs='3' onClick={() => setActive('phone')} className={active === 'phone' ? 'active' : 'pointer' } >
                    <BsPhone />
                    <h6>Telefonlar</h6>
                </Col>
                <Col md="3" xs='3' onClick={() => setActive('maishiy')} className={active === 'maishiy' ? 'active' : 'pointer'} >
                    <CgSmartHomeRefrigerator />
                    <h6>Maishiy Texnikalar</h6>
                </Col>
                <Col md="3" xs='3' onClick={() => setActive('laptop')} className={active === 'laptop' ? 'active' : 'pointer'} >
                    <MdOutlineLaptopChromebook />
                    <h6>Kompyuterlar</h6>
                </Col>
                <Col md="3" xs='3' onClick={() => setActive('aksessuar')} className={active === 'aksessuar' ? 'active' : 'pointer'} >
                    <FaHeadphonesAlt />
                    <h6>Aksessuarlar</h6>
                </Col>
            </Row>
        </div>
    )
}

export default ProductsMenu;