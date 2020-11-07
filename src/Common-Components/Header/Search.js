import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import classes from "./style.css";
import {
  SwitcherA,
  SwitcherOptions,
  Switcherdiv,
  StyleSwitcher,
} from "./Styles.js";
export default function FontAwesomeIcons(props) {
  const [marginLeft, setmarginLeft] = useState(true);

  const styles = {
    transition: "0.4s ease-in-out",
    position: "fixed",
    marginLeft: marginLeft ? "13px" : "205px",
    cursor: "pointer",
  };

  const blueTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#0767c9",
      textColor: "#013220",
    });
  };

  const greenTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#024b30",
      textColor: "#013220",
    });
  };

  const orangeTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#fa5b0f",
      textColor: "#013220",
    });
  };

  const navyTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#495d7f",
      textColor: "#013220",
    });
  };

  const yellowTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#ffb400",
      textColor: "#013220",
    });
  };
  
  const peachTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#807c78",
      textColor: "#013220",
    });
  };

  const beigeTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#bfa980",
      textColor: "#013220",
    });
  };

  const purpleTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#917ae9",
      textColor: "#013220",
    });
  };

  const celadonTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#74aea1",
      textColor: "#013220",
    });
  };

  const pinkTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#d64391",
      textColor: "#013220",
    });
  };

  const redTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#dd3737",
      textColor: "#013220",
    });
  };

  const brownTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#784e3d",
      textColor: "#013220",
    });
  };

  const cherryTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#911938",
      textColor: "#013220",
    });
  };

  const cyanTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#37b6bd",
      textColor: "#013220",
    });
  };

  const grayTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#555",
      textColor: "#013220",
    });
  };

  const oliveTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      darkColor: "#b3c211",
      textColor: "#013220",
    });
  };
  
  return (
    <StyleSwitcher style={styles}>
      <h2>
        COLOR SWITCHER
        <SwitcherA>
          <i>
            {" "}
            <FiSettings onClick={() => setmarginLeft(!marginLeft)} />{" "}
          </i>
        </SwitcherA>
      </h2>
      <Switcherdiv>
        <SwitcherOptions>
          <li>
            <a className="blue" title="Blue" onClick={blueTheme}></a>
          </li>
          <li>
            <a className="green" title="Green" onClick={greenTheme}></a>
          </li>
          <li>
            <a className="orange" title="Orange" onClick={orangeTheme}></a>
          </li>
          <li>
            <a className="navy" title="Navy" onClick={navyTheme}></a>
          </li>
          <li>
            <a className="yellow" title="Yellow" onClick={yellowTheme}></a>
          </li>
          <li>
            <a className="peach" title="Peach" onClick={peachTheme}></a>
          </li>
          <li>
            <a className="beige" title="Beige" onClick={beigeTheme}></a>
          </li>
          <li>
            <a className="purple" title="Purple" onClick={purpleTheme}></a>
          </li>
          <li>
            <a className="celadon" title="celadon" onClick={celadonTheme}></a>
          </li>
          <li>
            <a className="pink" title="Pink" onClick={pinkTheme}></a>
          </li>
          <li>
            <a className="red" title="Red" onClick={redTheme}></a>
          </li>
          <li>
            <a className="brown" title="Brown" onClick={brownTheme}></a>
          </li>
          <li>
            <a className="cherry" title="Cherry" onClick={cherryTheme}></a>
          </li>
          <li>
            <a className="cyan" title="Cyan" onClick={cyanTheme}></a>
          </li>
          <li>
            <a className="gray" title="Gray" onClick={grayTheme}></a>
          </li>
          <li>
            <a className="olive" title="Olive" onClick={oliveTheme}></a>
          </li>
        </SwitcherOptions>
      </Switcherdiv>
    </StyleSwitcher>
  );
}
