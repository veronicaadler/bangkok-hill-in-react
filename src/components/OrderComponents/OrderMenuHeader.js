import {
    Row, 
    Col,     
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,} from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderMenuHeader = ({ cartitems }) => {

    const [modal, setModal] = useState(false);
    const [checkout, setCheckout] = useState(false);

    const totalPrice = cartitems.reduce((a, c) => a + parseInt(c.price), 0).toFixed(2);

    const toggle = () => setModal(!modal);

    return (
        <Row className="cartrow text-right sticky-top p-2">
          <Col className="text-left d-flex align-items-center">
            <Link className="orderlink" to="/">Home</Link>
          </Col>
          <Col className="p-0 m-0">
            <Button onClick={toggle} className="btn-large p-3 cartbutton">
              <i className="fa fa-lg fa-shopping-cart"></i> Cart ({cartitems.length})
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Your Order</ModalHeader>
              <ModalBody>
                {cartitems.map((product) => {
                  return (
                    <Row key={product.id}>
                      <Col><Button className="m-1 removebutton">Remove Item</Button></Col>
                      <Col>{product.item}</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  );
                })}
                <ModalFooter>Total: ${totalPrice}</ModalFooter>
                <div  className="text-right">
                  <Button onClick={() => setCheckout(true)}>Proceed to Checkout</Button>
                  {checkout
                    ? <p>Order Processed!</p>
                    : null
                  }
                </div>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      );
}
 
export default OrderMenuHeader;