import React, { Component } from "react";



class Modal extends Component {
  render() {
    if (this.props.showmodal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
    }
    return (
      <div className="my-modal" >
     <p>{this.props.comment}</p>
        <button onClick={this.props.action}> {this.props.message || "set text via props"}</button>
       
        <div>{this.props.children}</div>
     
      </div>
    );
  }
}

export default Modal;