import React, {Component} from "react";
import { Button } from "reactstrap";

class EmailForm extends Component  {
    constructor() {
        super()
        this.state = {
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {

    return(
        <div className="col bg-dark mt-0">
                <section className="text-center p-5">
                    <div className="container p-3">
                        <h3>{this.state.email}</h3>
                        <h3 className="text-white">Subscribe to Our Newsletter</h3>
                        <form action="#" method="Post">
                            <label className="text-white" for="email">Email:</label>
                            <input type="text" name="email" value={this.state.email} id="email" placeholder="username@gmail.com" onChange={this.handleChange} />
                            <Button type="button" className="btn btn-default">Subscribe<i
                                    className="fa fa-envelope"></i></Button>
                        </form>
                    </div>
                </section>
        </div>
    )
  }
}

export default EmailForm