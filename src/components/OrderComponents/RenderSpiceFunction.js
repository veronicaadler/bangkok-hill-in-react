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

  export default renderSpice;