import {Container, Row, Col, CardBody, CardTitle, Card, CardSubtitle, CardText, Button,
        Modal, ModalFooter, ModalHeader, ModalBody
        } from 'reactstrap';
import { useEffect, useState } from 'react';
import SpiceLevel from "../MenuPageComponents/SpiceLevel";
import { Link } from 'react-router-dom';


const OrderNow = () => {

  const [menu, setMenuItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleCart = (item) => {
      setCart([...cart, item]);
  } 

  const renderSpice = (spice) => {
    if (spice === "Mild") {
      return <i className="fa fa-star"></i>;
    }
    if (spice === "Hot") {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    }
    if (spice === "Hot and Spicy") {
      return (
        <span>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </span>
      );
    }
  };
  

  useEffect(() => {
    fetch('http://localhost:8000/menu')
        .then(res => {
            if (!res.ok) { //checks for unsuccessful responses from the server
                throw Error('could not fetch menu items')
            }
            return res.json();
        })
        .then(data => {
            setMenuItems(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => { //catches network errors
            setIsPending(false);
            setError(err.message);
        })
  }, []);

  const totalPrice = (cart.reduce((a, c) => a + parseInt(c.price), 0)).toFixed(2) 

  if (isPending) {
      return (
          <div>Loading...</div>
      )
  }
  if (error) {
      return (
          <div>{error}</div>
      )
  } else {
  return (
    <Container fluid>
      <Row className="cartrow text-right sticky-top p-2">
        <Col className="p-0 m-0">
          <Button onClick={toggle} className="btn-large p-3 cartbutton">
              <i className="fa fa-lg fa-shopping-cart"></i> Cart ({cart.length})
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}
                >
                    Your Order
                </ModalHeader>
                <ModalBody>
                    {cart.map((product) => {
                        return (
                            <Row>
                                <Col>
                                    {product.title}
                                </Col>
                                <Col>
                                    ${product.price}
                                </Col>
                            </Row>
                        )
                    })}
                    <ModalFooter>Total: ${totalPrice}</ModalFooter>
                    <Button>Pay Now</Button>
                </ModalBody>
            </Modal>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <h1 className="mb-0">BANGKOK HILL MENU</h1>
        </Col>
      </Row>
          {menu.map((item) => {
            if (item.header) {
              return (
                <Row key={item.id}>
                  <Col className="col text-center">
                    <h3 className="menuheadings">{item.header}</h3>
                  </Col>
                </Row>
              );
            }
            if (item.subheader) {
              return (
                <Row key={item.id}>
                  <Col className="text-center">
                    <h5 className="mb-5">
                      Served with your choice of white or brown rice.
                    </h5>
                  </Col>
                </Row>
              );
            }
            if (item.noodleitem) {
              return (
                <Card key={item.id} className="m-1 menucard">
                  <Row>
                    <Col>
                      <img src={item.img} alt={item.alt} />
                    </Col>
                    <Col>
                      <CardBody>
                        <CardTitle className="menucardtitle">
                          {item.title}{renderSpice(item.spice)}
                        </CardTitle>
                        <CardSubtitle className="mb-1">
                          Lunch: ${item.lunchprice}
                        </CardSubtitle>
                        <CardSubtitle>Dinner: ${item.dinnerprice}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button onClick={() => handleCart(item)}>Add To Order</Button>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              );
            }
            if (item.protein) {
              return (
                <Card key={item.id} className="text-center m-1 menucard">
                  <CardBody>
                    <CardTitle className="menucardtitle">
                      {item.title}{renderSpice(item.spice)}
                    </CardTitle>
                    <CardText>Lunch: ${item.lunchprice}</CardText>
                    <CardText>Dinner: ${item.dinnerprice}</CardText>
                  </CardBody>
                </Card>
              );
            }
            if (item.side) {
              return (
                <Card key={item.id} className="text-center m-1 menucard">
                  <CardBody>
                    <CardTitle className="menucardtitle">
                      {item.title}{renderSpice(item.spice)}
                    </CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                    <Button onClick={() => handleCart(item)}>Add To Order</Button>
                  </CardBody>
                </Card>
              );
            }
            if (item.createyourown) {
              return (
                <Card key={item.id} className="m-1 menucard">
                  <Row>
                    <Col>
                      <img src={item.img} alt={item.alt} />
                    </Col>
                    <Col>
                      <CardBody>
                        <CardTitle className="menucardtitle">
                          {item.title}{renderSpice(item.spice)}
                        </CardTitle>
                        <CardText>{item.description}</CardText>
                        <Button onClick={() => handleCart(item)}>Add To Order</Button>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              );
            } else {
              return (
                <Card key={item.id} className="m-1 menucard">
                  <Row>
                    <Col>
                      <img src={item.img} alt={item.alt} />
                    </Col>
                    <Col>
                      <CardBody>
                        <CardTitle className="menucardtitle">
                          {item.title}{renderSpice(item.spice)}
                        </CardTitle>
                        <CardSubtitle>${item.price}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button onClick={() => handleCart(item)}>Add To Order</Button>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              );
            }
          })}
        <SpiceLevel />
    </Container>
  );
}};
 
export default OrderNow;