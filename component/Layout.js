import React, { Component } from "react";
import NavBar from "./NavBar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <NavBar onToggle={() => this.handleToggle()} open={this.state.open}>
        <div>{this.props.children}</div>
      </NavBar>
    );
  }
}
export default Layout;
