import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "2vh",
    backgroundColor: "grey",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
    transition: "0.3s",
    color: "#397BA6",
    backgroundColor: "#DCDCDC",
    },
    right: "5%",
  },
}));
const BacktoTop = styled.div `

`

const Scroll = (showBelow) => {
  const classes = useStyles();
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (!show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleScrollClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  return (
    <BacktoTop>
      {show && (
        <IconButton onClick={handleScrollClick} className={classes.toTop}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </BacktoTop>
  );
};

export default Scroll;
