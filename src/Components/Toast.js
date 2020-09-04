import React from "react";
import { Toast } from "react-bootstrap";

export default class Toasts extends React.Component {
  constructor() {
    super();
    this.state = { display: true };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState((state) => ({ display: !state.display }));
  }

  render() {
    return (
      <Toast show={this.state.display} onClose={() => this.props.updateDisplayAlert(false)}>
        <Toast.Header>
          <strong className="mr-auto">Nomination Limit Reached!</strong>
        </Toast.Header>
        <Toast.Body>You Can Only Nominate Up To 5 Movies</Toast.Body>
      </Toast>
    );
  }
}
