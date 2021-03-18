import React, { Component } from "react";


var modalStyle = {
    position:"absolute",
    top:"0",
    left:"0%",
    backgroundColor: "rgba(0,0,0,0.9)",
    width:"100vw",
    height:"100vh",
    color:"snow",
}


class Modal extends Component {
  render() {
    if (this.props.showmodal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
    }
    return (
      <div className="my-modal" style={modalStyle}>
        <h2>Modal Window</h2>
        <button onClick={this.props.onClose}>Close</button>
        <div>{this.props.children}</div>
     
      </div>
    );
  }
}

export default Modal;