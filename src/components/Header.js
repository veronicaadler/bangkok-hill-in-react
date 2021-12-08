import { Jumbotron } from "reactstrap";
import NavbarComponent from "./HomepageComponents/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Jumbotron fluid className="m-0 p-1">
      <div className="container">
        <div className="row">
          <div className="col d-none d-sm-block">
            <Link to="/">
              <img
                src="assets/blacklogo.png"
                alt="Bangkok Hill Logo"
                className="img-fluid logo"
              />
            </Link>
          </div>
          <div className="col-sm-auto">
            <NavbarComponent />
          </div>
          <div className="col align-self-center col-lg-2 text-center">
            <a
              href="tel:+19783430555"
              type="button"
              className="text-nowrap btn-link"
              role="button"
            >
              <Link to='/order' className="btn btn-lg">Order Now</Link>
            </a>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Header;
