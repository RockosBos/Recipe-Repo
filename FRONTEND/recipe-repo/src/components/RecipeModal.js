import React from "react";

export default class Modal extends React.Component {

  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };
  hideModal = e => {
    this.setState({
      show: false
    })
  }

    render() {
      return <div>Hello Modal</div>;
    }
  }