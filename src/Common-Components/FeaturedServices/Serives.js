import React, { Component } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiFingerprintFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { GrTrophy } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { ThemeContext } from "../context/Theme";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../Sagas/Actions/actions";
import {
  FeaturedServicesWrapper,
  FeaturedServices,
  FeaturedServicesContent,
  FeaturedServicesAlignment,
} from "./styles";
class services extends Component {
  static contextType = ThemeContext;
  componentDidMount() {
    this.props.requestApiData();
    console.log(this.props.data);
  }
  render() {
    const { darkColor } = this.context;
    console.log(this.context);
    console.log(this.props.data);
    const { Data = [] } = this.props.data;
    console.log(Data);
    return this.props.data ? (
      <FeaturedServicesWrapper color={darkColor}>
        {Data.map((data) => {
          const Mdicon = data.iconName;
          console.log(data);
          return (
            <FeaturedServices key={data.title}>
              <FeaturedServicesContent>
                <FeaturedServicesAlignment>
                  <i>
                    <AiOutlineUserAdd />
                  </i>
                  <h4>{data.title}</h4>
                  <p>{data.descrition}</p>
                </FeaturedServicesAlignment>
              </FeaturedServicesContent>
            </FeaturedServices>
          );
        })}
      </FeaturedServicesWrapper>
    ) : (
      <h1>loading...</h1>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(services);

//bindActionCreators turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly//
