import React, { Component } from "react";
import { ImageEdge } from "./Style";
import { ImageEdgeContent } from "./Style";
import { ImageEdgebg } from "./Style";
import EdgeImage from '../../Assets/Images/image-edge.jpg'

class creativity extends Component {
  render() {
    return (
      <ImageEdge>
        <ImageEdgeContent>
          <h2>The Heart of Creativity</h2>
          <p>
            Efficiently enable enabled sources and cost effective products.
            Completely synthesize principle-centered information after ethical
            communities.
          </p>
          <button>PURCHASE NOW</button>
        </ImageEdgeContent>
        <ImageEdgeContent>
            <img src={EdgeImage} alt="EdgeImage" />
        </ImageEdgeContent>
      </ImageEdge>
    );
  }
}
export default creativity;
