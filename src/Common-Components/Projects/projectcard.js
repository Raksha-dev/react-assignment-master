import React, { Component } from "react";
import Img from "../../Assets/Images/project-01.jpg";
import "./style.css";
import { Image, Card, InactiveCard } from "./Style";
export default class card extends Component {
  state = {
    data: Img,
    active: 1,
  };
  render() {
    this.state.data = this.props.data;
    this.state.active = this.props.active;
    if (this.state.active)
      return (
        <Card>
          <Image
            src={this.state.data}
            className="image"
            style={{ width: "100%" }}
          ></Image>
          <div className="middle">
            <div className="text">
              <h1>{this.props.title}</h1>
              <p>{this.props.subtitle}</p>
            </div>
          </div>
        </Card>
      );
    else
      return (
        <InactiveCard>
          <Image
            src={this.state.data}
            className="image"
            style={{ width: "100%" }}
          ></Image>
          <div className="middle">
            <div className="text">
              <h1>this.props.title</h1>
              <p></p>
            </div>
          </div>
        </InactiveCard>
      );
  }
}
