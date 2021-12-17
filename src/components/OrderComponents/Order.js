import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import OrderMenu from './OrderMenu';
import SpiceLevel from "../MenuPageComponents/SpiceLevel";


const OrderNow = () => {
  const [menu, setMenuItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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

  useEffect(() => { //fetches the menu from the server
    fetch("http://localhost:8000/menu")
      .then((res) => {
        if (!res.ok) {
          //checks for unsuccessful responses from the server
          throw Error("could not fetch menu items");
        }
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        //catches network errors
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  if (isPending) {
    return (
    <div className="text-center">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <Container fluid>
        <OrderMenu 
          menu={menu}
          cart={cart}
          handleCart={handleCart}
        />
        <SpiceLevel />
      </Container>
    );
  }
};

export default OrderNow;
