import  React, {Component} from 'react';
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiFingerprintFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { GrTrophy } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {FeaturedServices} from './Style'
import {FeaturedServicesWrapper} from './Style'
import {FeaturedServicesContent} from './Style'
import {FeaturedServicesAlignment} from './Style'
import {ThemeContext} from '../context/Theme'

class services extends Component {
    static contextType=ThemeContext;

    render () {
    const { darkColor } = this.context;
        return (
            <>
            <FeaturedServicesWrapper color={darkColor}>
                <FeaturedServices>
                    <FeaturedServicesContent >
                        <FeaturedServicesAlignment>
                                <i>
                                <AiOutlineUserAdd />
                                </i>
                           <h4>UX Experience </h4>
                            <p>Mauris tempus a lacus nec sollicitudin duieu nec porttitor.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
               <FeaturedServices>
                    <FeaturedServicesContent>
                        <FeaturedServicesAlignment>
                            <i><BsCodeSlash /></i>
                            <h4>Coding </h4>
                            <p>Dignissim eget duieu nec porttitor sem arcu accumsan efficitur.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
               
               <FeaturedServices>
                    <FeaturedServicesContent>
                        <FeaturedServicesAlignment>
                            <i><RiFingerprintFill /></i>
                            <h4>Security </h4>
                            <p>Sollicitudin nunc portitirot venenatis purus.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
            </FeaturedServicesWrapper>
            {/* ********************************************************************************** */}
            <FeaturedServicesWrapper color={darkColor}>
                <FeaturedServices>
                    <FeaturedServicesContent>
                        <FeaturedServicesAlignment>
                            <i><GrTrophy /></i>
                            <h4>Goal Setting </h4>
                            <p>Aenean tincidunt tortor blandit accumsan lectus.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
               <FeaturedServices>
                    <FeaturedServicesContent>
                        <FeaturedServicesAlignment>
                            <i><AiOutlineLineChart /></i>
                            <h4>Analysis </h4>
                            <p>Quisque at arcuat dolor tortor blandit accumsan.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
               <FeaturedServices>
                    <FeaturedServicesContent>
                        <FeaturedServicesAlignment>
                            <i><HiOutlineSpeakerphone /></i>
                            <h4>Marketing </h4>
                            <p>Blandit accumsan dignissim egetdui eurea porttitor.</p>
                        </FeaturedServicesAlignment>
                    </FeaturedServicesContent>
               </FeaturedServices> 
            </FeaturedServicesWrapper>
            </>
            
        );
    }
}
export default services;