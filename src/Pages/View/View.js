import React, { Component } from "react";
import Header from "../../Common-Components/Header/Header";
import Footer from "../../Common-Components/Footer/Footer";
import { RiShip2Line, RiUserSearchLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { withRouter } from "react-router";

import {
  Image,
  Imagebg,
  Portfoilocontent,
  Projectname,
  RowOne,
  Columnone,
  Columntwo,
  ImageEdge,
  ImageEdgeContent,
  EdgeBg,
  ImageEdgeBottom,
  Grid,
  IconBoxOne,
  EdgeBgBottom,
} from "./Style";
class View extends Component {
  render() {
    return (
      <>
        <Header />
        <Image style={StyleSheet.absoluteFillObject} resizeMode="cover">
          <div className="bg-color"></div>
          <Imagebg>
            <h2>Single Project Full-Screen</h2>
          </Imagebg>
        </Image>
        <Portfoilocontent>
          <Projectname>
            <h4>Project Name</h4>
            <RowOne>
              <Columnone>
                <p>
                  Maecenas molestie fermentum luctus. Cras lacinia molestie
                  nibh. Pellentesque non magna ac dui varius auctor at sed nunc.
                  Fusce bibendum eros sed mattis accumsan. Nam mattis convallis
                  elit, ut condimentum nulla commodo nec. Aenean eget metus sed
                  turpis molestie porta vitae non libero.
                </p>
                <p>
                  Maecenas vehicula ultrices magna, vitae placerat nibh rhoncus
                  sit amet. Vestibulum congue suscipit sagittis. Phasellus at
                  dui eget metus consectetur laoreet id ac mi. Proin nisl mi,
                  gravida sed maximus ut, sodales dictum velit. Nunc ultricies
                  porttitor est, ut rutrum ante. Vivamus interdum sodales sem.
                  In ultrices augue eget nibh convallis, quis laoreet tortor
                  lacinia.
                </p>
              </Columnone>
              <Columntwo>
                <li>
                  <span>Date:</span>
                  11 January 2016
                </li>
                <li>
                  <span>Location:</span>
                  London
                </li>
                <li>
                  <span>Category:</span>
                  Kitchens, Carpentry
                </li>
              </Columntwo>
            </RowOne>
          </Projectname>
        </Portfoilocontent>

        <ImageEdge>
          <ImageEdgeContent>
            <h2>
              Don't Hestitate,
              <br />
              Let Out Your Creative Beast
            </h2>
            <p>
              Avenger is a powerful multipurpose template, excellent compromise
              among the conflicting requirements of novelty, simplicity,
              elegance and function.
            </p>
          </ImageEdgeContent>
          <EdgeBg />
        </ImageEdge>
        <ImageEdgeBottom>
          <Grid>
            <IconBoxOne>
              <i>
                <RiShip2Line />{" "}
              </i>
              <h4>Visual Identity</h4>
              <p>
                Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum
                sodales sem. In ultrices augue eget.
              </p>
            </IconBoxOne>

            <IconBoxOne>
              <i>
                <FaBoxOpen />{" "}
              </i>
              <h4>Package Design</h4>
              <p>
                Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum
                sodales sem. In ultrices augue eget.
              </p>
            </IconBoxOne>

            <IconBoxOne>
              <i>
                <GiPalmTree />{" "}
              </i>
              <h4>Ecologic Paper</h4>
              <p>
                Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum
                sodales sem. In ultrices augue eget.
              </p>
            </IconBoxOne>

            <IconBoxOne>
              <i>
                <RiUserSearchLine />{" "}
              </i>
              <h4>Audit and Assurance</h4>
              <p>
                Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum
                sodales sem. In ultrices augue eget.
              </p>
            </IconBoxOne>
          </Grid>
          <EdgeBgBottom />
        </ImageEdgeBottom>
        <Footer />
      </>
    );
  }
}

export default withRouter(View);
