import React, { createContext, Component } from "react";
export const ThemeContext = createContext();

class ThemeProvider extends Component {
  state = {
    darkColor: "#3448c5",
    inactiveColor: "#9fbfdf",
    text_color: "#0f0552",
  };
  toggleTheme = (newstate) => {
    this.setState({
      ...newstate,
    });
  };
  
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
