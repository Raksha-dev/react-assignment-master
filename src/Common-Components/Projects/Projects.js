import React, { Component } from "react";
import history from "../../History/history";
import Cards from "../../Common-Components/Projects";
import Card from "./projectcard";
import { Data } from "./Data";
import {CategoryButtons} from './Styles/Cards'
import {ThemeContext} from '../context/Theme'

export default class Projects extends Component {
  static contextType=ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      type: "PEOPLE",
      all: true,
    };
    this.handleClickPEOPLE = this.handleClickPEOPLE.bind(this);
    this.handleClickANIMALS = this.handleClickANIMALS.bind(this);
    this.handleClickOTHERS = this.handleClickOTHERS.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      all: true,
    }));
  }
  handleClickPEOPLE() {
    this.setState((state) => ({
      type: "PEOPLE",
      all: false,
    }));
  }
  handleClickANIMALS() {
    this.setState((state) => ({
      type: "ANIMALS",
      all: false,
    }));
  }
  handleClickOTHERS() {
    this.setState((state) => ({
      type: "OTHERS",
    }));
  }

  render() {
    console.log(this.context);
    const { darkColor } = this.context;
    return (
      <Cards>
        <Cards.Title style={{ paddingTop: "60px" }}>
          Our Latest Projects
        </Cards.Title>
        <Cards.Row style={{ align: "center" }}>
          <Cards.Column
            style={
              ({ marginBottom: "70px" }, { margin: "0px -633px 52px 387px" })
            }
          >
            <CategoryButtons color={darkColor}
              style={{
                color: "white",
                borderRadius: "30px",
                border: "none",
                padding: "10px 20px",
              }}
              onClick={this.handleClick}
            >
              ALL
            </CategoryButtons>
          </Cards.Column>
          <Cards.Column
            style={
              ({ marginBottom: "70px" }, { margin: "0px -610px 52px 381px" })
            }
          >
            <CategoryButtons color={darkColor}
              style={{
                color: "white",
                borderRadius: "30px",
                border: "none",
                padding: "10px 20px",
              }}
              onClick={this.handleClickPEOPLE}
            >
              PEOPLE
            </CategoryButtons>
          </Cards.Column>
          <Cards.Column
            style={
              ({ marginBottom: "70px" }, { margin: "0px -608px 52px 381px" })
            }
          >
            <CategoryButtons color={darkColor}
              style={{
                color: "white",
                borderRadius: "30px",
                border: "none",
                padding: "10px 20px",
              }}
              onClick={this.handleClickANIMALS}
            >
              ANIMALS
            </CategoryButtons>
          </Cards.Column>
          <Cards.Column
            style={
              ({ marginBottom: "70px" }, { margin: "0px -256px 52px 381px" })
            }
          >
            <CategoryButtons color={darkColor}
              style={{
                color: "white",
                borderRadius: "30px",
                border: "none",
                padding: "10px 20px",
              }}
              onClick={this.handleClickOTHERS}
            >
              OTHERS
            </CategoryButtons>
          </Cards.Column>
        </Cards.Row>
        <Cards.Row>
          {Data.map((item, index) => {
            const images = require.context("../../Assets/Images/", true);
            let img = images("./" + item.imageName);
            console.log(this.state.type);
            console.log(item.type);

            if (this.state.all || this.state.type === item.type)
              return (
                <Cards.Column key={index} onClick={() => history.push("View")}>
                  <Card
                    data={img}
                    title={item.title}
                    subtitle={item.subtitle}
                    active={1}
                  />
                </Cards.Column>
              );
            else
              return (
                <Cards.Column key={index}>
                  <Card
                    data={img}
                    title={item.title}
                    subtitle={item.subtitle}
                    active={0}
                  />
                </Cards.Column>
              );
          })}
        </Cards.Row>
      </Cards>
    );
  }
}
