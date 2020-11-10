import React, { Component } from "react";
import Cards from "../../Common-Components/Projects";
import {withRouter} from 'react-router';
import Card from "./projectcard";
import { Data } from "./Data";
import {CategoryButtons,Allbuttons,CategoryButtonsall} from './Styles/Cards';
import {ThemeContext} from '../context/Theme';

export const historyComponent = withRouter(({ history, location }) => {})
class Projects extends Component {
  static contextType=ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      type: "PEOPLE",
      all: true,
      activeButton: false,
      activestatus: "all"
    };
    this.handleClickPEOPLE = this.handleClickPEOPLE.bind(this);
    this.handleClickANIMALS = this.handleClickANIMALS.bind(this);
    this.handleClickOTHERS = this.handleClickOTHERS.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      all: true,
      activestatus: "all"
    }));
  }
  handleClickPEOPLE() {
    this.setState((state) => ({
      type: "PEOPLE",
      all: false,
      activestatus: "people"
    }));
  }
  handleClickANIMALS() {
    this.setState((state) => ({
      type: "ANIMALS",
      all: false,
      activestatus: "animals"
    }));
  }
  handleClickOTHERS() {
    this.setState((state) => ({
      type: "OTHERS",
      activestatus: "others"
    }));
  }

  render() {
    const { location, history } = this.props
    const { darkColor } = this.context;
    return (
      <Cards>
        <Cards.Title style={{ paddingTop: "60px" }}>
          Our Latest Projects
        </Cards.Title>
        <Allbuttons style={{ align: "center" }}>
          <div
          >
            <CategoryButtons color={darkColor} active={this.state.activestatus == "all"}
            onClick={this.handleClick}
            >
              ALL
            </CategoryButtons>
          </div>
          <div
          >
            <CategoryButtons color={darkColor} active={this.state.activestatus == "people"}
              onClick={this.handleClickPEOPLE}
            >
              PEOPLE
            </CategoryButtons>
          </div>
          <div
          >
            <CategoryButtons color={darkColor} active={this.state.activestatus == "animals"}
              onClick={this.handleClickANIMALS}
            >
              ANIMALS
            </CategoryButtons>
          </div>
          <div
          >
            <CategoryButtons color={darkColor} active={this.state.activestatus == "others"}
              onClick={this.handleClickOTHERS}
            >
              OTHERS
            </CategoryButtons>
          </div>
        </Allbuttons>
        <Cards.Row>
          {Data.map((item, index) => {
            const images = require.context("../../Assets/Images/", true);
            let img = images("./" + item.imageName);
            if (this.state.all || this.state.type === item.type)
              return (
                <Cards.Column key={index} onClick={() => history.push("/View")}>
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
export default withRouter(Projects);