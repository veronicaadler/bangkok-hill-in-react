import React from "react";
import { Button } from "reactstrap";

function EmailForm() {
    return(
        <div className="col bg-dark mt-0">
                <section className="text-center p-5">
                    <div className="container p-3">
                        <h3 className="text-white">Subscribe to Our Newsletter</h3>
                        <form action="#" method="Post">
                            <label className="text-white" for="email">Email:</label>
                            <input type="text" name="text" id="email" placeholder="username@gmail.com" />
                            <Button type="button" className="btn btn-default">Subscribe<i
                                    className="fa fa-envelope"></i></Button>
                        </form>
                    </div>
                </section>
        </div>
    )
}

export default EmailForm