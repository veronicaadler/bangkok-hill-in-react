import React from "react";
import { Link } from "react-router-dom"

function Footer() {
    return(
        <footer className="site-footer mt-5 pt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 text-center text-sm-left pb-3">
                    <h5>Navigation</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/menu">MENU</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>
                <div className="col text-center pb-5">
                    <h5>Social</h5>
                    <a role="button" className="btn btn-link socialbtn"
                        href="https://www.facebook.com/pages/category/Thai-Restaurant/Bangkok-Hill-Restaurant-100878276623709/"><i
                            className="fa fa-facebook-square fa-lg"></i></a>
                    <a role="button" className="btn btn-link socialbtn" href="https://www.instagram.com/"><i
                            className="fa fa-instagram fa-lg"></i></a>
                    <a role="button" className="btn btn-link socialbtn" href="https://twitter.com/?lang=en"><i
                            className="fa fa-twitter-square fa-lg"></i></a>
                    <a role="button" className="btn btn-link socialbtn" href="https://www.youtube.com/"><i
                            className="fa fa-youtube-square fa-lg"></i></a>
                </div>
                <div className="col-sm-4 text-center text-sm-right">
                    <h5>Address</h5>
                    <address>177 Massachusetts Avenue <br />
                        Lunenburg, MA 01462
                    </address>
                    <h5>Call Us</h5>
                    <a href="tel:+19783430555">978-343-0555</a><br />
                    <a href="tel:+19783430523">978-343-0523</a>
                    <h5>We Accept</h5>
                    <i className="fa fa-cc-visa fa-2x"></i>
                    <i className="fa fa-cc-mastercard fa-2x"></i>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p className="text-center">This is a fictional website created for Bangkok Hill, a Thai restaurant in Lunenburg, MA, USA for educational purposes only.  Please visit <a href="http://www.bangkokhill.com/" id="bangkoklink">http://www.bangkokhill.com/</a> to place a real order.</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer