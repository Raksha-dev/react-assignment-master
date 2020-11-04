// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }
import React from 'react';
import {useWindowScroll} from 'react-use';
import CaretIcon from '../../Assets/Icons/caret-r.png'
const ScrollToTop = () => {
  const {y: pageYOffset} = useWindowScroll();
  return (
    <div className="scroll-to-top cursor-pointer text-right">
      {/* <i><CaretIcon /> </i> */}
    </div>
      
  );
}
export default ScrollToTop;