import React from "react"
import { Jumbotron } from 'reactstrap'

function Header() {
    return (
        <div>
        <Jumbotron fluid className="m-0 p-1">
            <div className="container">
                <div className="row">
                    <div className="col d-none d-sm-block">
                    <img src="assets/blacklogo.png" alt="Bangkok Hill Logo" className="img-fluid logo" />
                    </div>
                </div>
            </div>
        </Jumbotron>
        </div>  
        
    )
}

export default Header