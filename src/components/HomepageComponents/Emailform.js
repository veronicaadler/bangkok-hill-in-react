import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

class EmailForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleBlur() {
    if (!this.state.email.includes("@")) {
      this.setState({
        error: "Please enter a valid email address",
      });
    } else {
      this.setState({
        error: "",
      });
    }
  }

  render() {
    return (
      <div className="col bg-dark mt-0">
        <section className="text-center p-5">
          <div className="container p-3">
            <h3 className="text-white">Subscribe to Our Newsletter</h3>
            <Form inline action="#" method="Post">
              <FormGroup className="position-relative">
                <Label className="text-white" for="email">
                  Email:
                </Label>
                <Input
                  invalid={this.state.error}
                  type="text"
                  name="email"
                  value={this.state.email}
                  id="email"
                  placeholder="username@gmail.com"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <Button type="button" className="btn btn-default">
                  Subscribe<i className="fa fa-envelope"></i>
                </Button>
                <FormFeedback>{this.state.error}</FormFeedback>
              </FormGroup>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

export default EmailForm;
