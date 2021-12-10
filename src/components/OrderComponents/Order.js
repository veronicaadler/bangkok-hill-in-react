import {Container, Row, Col, CardBody, CardTitle, Card, CardSubtitle, CardText, Button,
        Modal, ModalFooter, ModalHeader, ModalBody,
        } from 'reactstrap';
import { useEffect, useState } from 'react';
import SpiceLevel from "../MenuPageComponents/SpiceLevel";


const OrderNow = () => {

  const [menu, setMenuItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const buttonMargin = 'm-1'

  const handleCart = (item, protein) => {
    //this function automatically determines the price based on lunch or dinner hours
    //it also takes an optional second parameter, protein, for Create Your Own items where the user must select a protein
    let lunchTime = false;
    const today = new Date();
    const currentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (currentTime >= "11:30:00" && currentTime < "15:00:00") {
      lunchTime = true;
    }
    if (protein) {
      console.log(protein);
      //sets the cart and cart prices based on whether its lunch and the type of protein requested in a Create Your Own dish
      if (
        (protein === "Chicken" ||
          protein === "Beef" ||
          protein === "Pork" ||
          protein === "Tofu") &&
        lunchTime === true
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "8.00",
          },
        ]);
      } else if (
        (protein === "Chicken" ||
          protein === "Beef" ||
          protein === "Pork" ||
          protein === "Tofu") &&
        lunchTime === false
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "12.00",
          },
        ]);
      } else if (
        (protein === "Shrimp" ||
          protein === "Scallop" ||
          protein === "Squid") &&
        lunchTime === true
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "9.00",
          },
        ]);
      } else if (
        (protein === "Shrimp" ||
          protein === "Scallop" ||
          protein === "Squid") &&
        lunchTime === false
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "16.00",
          },
        ]);
      } else if (
        (protein === "Seafood" || protein === "Duck") &&
        lunchTime === true
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} + (${protein})`,
            price: "10.00",
          },
        ]);
      } else if (
        (protein === "Seafood" || protein === "Duck") &&
        lunchTime === false
      ) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "16.00",
          },
        ]);
      } else if (protein === "Flounder Fillet" && lunchTime === false) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} + (${protein})`,
            price: "10.00",
          },
        ]);
      } else if (protein === "Flounder Fillet" && lunchTime === true) {
        setCart([
          ...cart,
          {
            id: item.id,
            item: `${item.title} (${protein})`,
            price: "20.00",
          },
        ]);
      }
    } else {
      if (item.lunchprice && lunchTime === true) {
        //for items with lunch prices, this condition determines whether its lunch time and if so,
        //sets the appropriate lunch time price
        setCart([
          ...cart,
          {
            id: item.id,
            item: item.title,
            price: item.lunchprice,
          },
        ]);
      } else if (item.dinnerprice && lunchTime === false) {
        //sets the dinner price if it is dinner time
        setCart([
          ...cart,
          {
            id: item.id,
            item: item.title,
            price: item.dinnerprice,
          },
        ]);
      } else {
        //this final else statement is for items whos prices do not change whether its lunch or dinner
        setCart([
          ...cart,
          {
            id: item.id,
            item: item.title,
            price: item.price,
          },
        ]);
      }
    }
  };
  

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
                            <Row key={product.id}>
                                <Col>
                                    {product.item}
                                </Col>
                                <Col>
                                    ${product.price}

                                </Col>
                            </Row>
                        )
                    })}
                    <ModalFooter>Total: ${totalPrice}</ModalFooter>
                    <Button>Proceed to Checkout</Button>
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
                        <CardSubtitle>Order with: </CardSubtitle>
                        <Button className={buttonMargin} onClick={() => handleCart(item, 'Chicken')}>Chicken</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Beef')}>Beef</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Pork')}>Pork</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Tofu')}>Tofu</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Shrimp')}>Shrimp</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Scallop')}>Scallop</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Squid')}>Squid</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Seafood')}>Seafood</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Duck')}>Duck</Button>
                                  <Button className={buttonMargin} onClick={() => handleCart(item, 'Flounder Fillet')}>Flounder Fillet</Button>
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