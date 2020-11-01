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
            <a className="blue" title="blue"></a>
          </li>
          <li>
            <a className="green" title="Green"></a>
          </li>
          <li>
            <a className="orange" title="Orange"></a>
          </li>
          <li>
            <a className="navy" title="Navy"></a>
          </li>
          <li>
            <a className="yellow" title="Yellow"></a>
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
