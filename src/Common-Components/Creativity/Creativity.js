import React, { Component } from "react";
import { ImageEdge } from "./Style";
import { ImageEdgeContent } from "./Style";
import { ImageEdgebg, SubmitButton } from "./Style";
import EdgeImage from "../../Assets/Images/image-edge.jpg";
import { ThemeContext } from "../context/Theme";

class creativity extends Component {
  static contextType = ThemeContext;

  render() {
    const { darkColor } = this.context;
    return (
      <ImageEdge>
        <ImageEdgeContent>
          <h2>The Heart of Creativity</h2>
          <p>
            Efficiently enable enabled sources and cost effective products.
            Completely synthesize principle-centered information after ethical
            communities.
          </p>
          <SubmitButton color={darkColor}> PURCHASE NOW</SubmitButton>
        </ImageEdgeContent>
        <ImageEdgeContent>
          <img src={EdgeImage} alt="EdgeImage" />
        </ImageEdgeContent>
      </ImageEdge>
    );
  }
}
export default creativity;
