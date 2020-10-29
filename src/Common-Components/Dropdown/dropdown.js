import React, { Component } from "react";
import {Navmenulist, Subdropdown} from '../Header/Styles'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
    };
  }

  toggle1() {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }

  toggle2() {
    this.setState(prevState => ({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }

  toggle3() {
    this.setState(prevState => ({
      dropdownOpen3: !prevState.dropdownOpen3
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen1: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen1: false });
  }

  render() {
    return (
      <div>
        <Dropdown
          className="d-inline-block"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen1}
          toggle={this.toggle1}
        >
          <DropdownToggle caret>Home</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header> <li className="dropdown">
                  <Navmenulist href="#" className="current">
                    PORTFOLIO
                  </Navmenulist>
                  {this.state.portfoliohover && (
                    <Subdropdown style={{ listStyleType: "none" }}>
                      <li>
                        <a href="#">Main Demo</a>
                      </li>
                      <li>
                        <a href="#">Agency Demo</a>
                      </li>
                      <li>
                        <a href="#">Classic Demo</a>
                      </li>
                      <li>
                        <a href="#">Corporate Demo</a>
                      </li>
                      <li>
                        <a href="#">Resume / CV Demo</a>
                      </li>
                      <li>
                        <a href="#">Shop Demo</a>
                      </li>
                      <li>
                        <a href="#">Photography Demo</a>
                      </li>
                      <li>
                        <a href="#">Magazine / Blog Demo</a>
                      </li>
                    </Subdropdown>
                  )}
                </li></DropdownItem>
            <DropdownItem>Submenu 1.1</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          className="d-inline-block"
          isOpen={this.state.dropdownOpen2}
          toggle={this.toggle2}
        >
          
          <DropdownToggle caret>Dropdown2</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Submenu 2</DropdownItem>
            <DropdownItem>Submenu 2.1</DropdownItem>
            <DropdownItem>Submenu 2.2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default Example;