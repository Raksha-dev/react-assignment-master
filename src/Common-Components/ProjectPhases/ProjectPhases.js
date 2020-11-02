import  React, {Component} from 'react';
import {Projectphases} from './Style';
import {ProjectphasesContent} from './Style';
import {Phases} from './Style';
import {IconOne, PulseIcon,Responsiveicons} from './Style';
import { VscPulse } from "react-icons/vsc";
import { RiShip2Fill } from "react-icons/ri";
import Ideaimage from '../../Assets/Icons/idea.JPG'
import Ideaimagetwo from '../../Assets/Icons/I.JPG'
import Pulseimage from '../../Assets/Icons/pulse.JPG'
import Shipimage from '../../Assets/Icons/ship.JPG'
import {ThemeContext} from '../context/Theme'

class projectphase extends Component {
    static contextType=ThemeContext;

    render() {
        console.log(this.context);
        const { darkColor } = this.context;
        return (
            <Projectphases>
                <ProjectphasesContent>
                <h4>Phases Of Project Management</h4>
                </ProjectphasesContent>
                <Phases>
                    <IconOne>
                        <i><img src={Ideaimage} alt="Idea"/></i>
                        <h2>Customer Idea</h2>
                        <p>Dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra.</p>
                    </IconOne>
                    <IconOne>
                        <i><img src={Ideaimagetwo} alt="Ideatwo"/></i>
                        <h2>Free Quotation</h2>
                        <p>Curabitur dapibus nunc efficitur elementum magna quis ante suscipit, quis fermentum augue viverra.</p>
                    </IconOne>
                    <PulseIcon>
                        <i><img src={Pulseimage} alt="Pulse"/></i>
                        <h2>Project Initiation</h2>
                        <p> Quisque elementum magna quis ante suscipit, quis fermentum augue dapibus nunc efficitur viverra.</p>
                    </PulseIcon>
                    <PulseIcon>
                        <i><img src={Shipimage} alt="ship"/></i>
                        <h2>Project Closure</h2>
                        <p>Massa velit, id dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis.</p>
                    </PulseIcon>
                    
                </Phases>
                
            </Projectphases>
        );
    }
}

export default projectphase;