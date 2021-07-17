import React from "react"
import { Jumbotron, Button } from 'reactstrap'
import NavbarComponent from "./Navbar"

function Header() {
    return (
        <Jumbotron fluid className="m-0 p-1">
            <div className="container">
                <div className="row">
                    <div className="col d-none d-sm-block">
                        <img src="assets/blacklogo.png" alt="Bangkok Hill Logo" className="img-fluid logo" />
                    </div>
                    <div className="col-sm-auto">
                        <NavbarComponent />
                    </div>
                    <div className="col align-self-center col-lg-2 text-center">
                        <a href="tel:+19783430555" 
                        type="button" className="btn btn-lg text-nowrap btn-link" 
                        role="button"><Button>Order Now</Button>
                        </a>
                    </div>
                </div>
            </div>
        </Jumbotron>
        
    )
}

export default Header