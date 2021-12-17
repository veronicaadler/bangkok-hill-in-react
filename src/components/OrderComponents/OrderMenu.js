import {
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    Card,
    CardSubtitle,
    CardText,
    Button,
  } from "reactstrap";
import OrderMenuHeader from "./OrderMenuHeader";
import renderSpice from './RenderSpiceFunction';

const OrderMenu = ({ menu, cart, handleCart }) => {

    const buttonMargin = "m-1";

    return(
        <Container fluid>
          <OrderMenuHeader cartitems={cart}/>
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
                        {item.title}
                        {renderSpice(item.spice)}
                      </CardTitle>
                      <CardSubtitle className="mb-1">
                        Lunch: ${item.lunchprice}
                      </CardSubtitle>
                      <CardSubtitle>Dinner: ${item.dinnerprice}</CardSubtitle>
                      <CardText>{item.description}</CardText>
                      <Button onClick={() => handleCart(item)}>
                        Add To Order
                      </Button>
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
                    {item.title}
                    {renderSpice(item.spice)}
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
                    {item.title}
                    {renderSpice(item.spice)}
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
                        {item.title}
                        {renderSpice(item.spice)}
                      </CardTitle>
                      <CardText>{item.description}</CardText>
                      <CardSubtitle>Order with: </CardSubtitle>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Chicken")}
                      >
                        Chicken
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Beef")}
                      >
                        Beef
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Pork")}
                      >
                        Pork
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Tofu")}
                      >
                        Tofu
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Shrimp")}
                      >
                        Shrimp
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Scallop")}
                      >
                        Scallop
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Squid")}
                      >
                        Squid
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Seafood")}
                      >
                        Seafood
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Duck")}
                      >
                        Duck
                      </Button>
                      <Button
                        className={buttonMargin}
                        onClick={() => handleCart(item, "Flounder Fillet")}
                      >
                        Flounder Fillet
                      </Button>
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
                        {item.title}
                        {renderSpice(item.spice)}
                      </CardTitle>
                      <CardSubtitle>${item.price}</CardSubtitle>
                      <CardText>{item.description}</CardText>
                      <Button onClick={() => handleCart(item)}>
                        Add To Order
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            );
          }
        })}
      </Container>
    );
  }
        
    
 
export default OrderMenu;