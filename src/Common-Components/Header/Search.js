import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { ThemeContext } from "../../Common-Components/context/Theme";
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
  const greenTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      lightestColor: "#c4fde8",
      lightColor: "#049761",
      darkColor: "#024b30",
      inactiveColor: "#8AC094",
      text_color: "#013220",
    });
  };
  const yellowTheme = () => {
    const { toggleTheme } = props.context;

    toggleTheme({
      lightestColor: "#c4fde8",
      lightColor: "#049761",
      darkColor: "#ffb400",
      inactiveColor: "#8AC094",
      text_color: "#013220",
    });
  };
  // const handleColorClick = (theme) => {
  //   console.log("hey");
  // }

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
            <a className="blue" title="Blue"></a>
          </li>
          <li>
            <a className="green" title="Green" onClick={greenTheme}></a>
          </li>
          <li>
            <a className="orange" title="Orange"></a>
          </li>
          <li>
            <a className="navy" title="Navy"></a>
          </li>
          <li>
            <a className="yellow" title="Yellow" onClick={yellowTheme}></a>
          </li>
          <li>
            <a className="peach" title="Peach"></a>
          </li>
          <li>
            <a className="beige" title="Beige"></a>
          </li>
          <li>
            <a className="purple" title="Purple"></a>
          </li>
          <li>
            <a className="celadon" title="celadon"></a>
          </li>
          <li>
            <a className="pink" title="Pink"></a>
          </li>
          <li>
            <a className="red" title="Red"></a>
          </li>
          <li>
            <a className="brown" title="Brown"></a>
          </li>
          <li>
            <a className="cherry" title="Cherry"></a>
          </li>
          <li>
            <a className="cyan" title="Cyan"></a>
          </li>
          <li>
            <a className="gray" title="Gray"></a>
          </li>
          <li>
            <a className="olive" title="Olive"></a>
          </li>
        </SwitcherOptions>
      </Switcherdiv>
    </StyleSwitcher>
  );
}
