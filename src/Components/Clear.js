import React, {Component} from 'react';
import './Clear.css';

class Clear extends Component {
  render() {
    return (
      <div className="Clear" onClick={() => this.props.handleClick()}>
        {this.props.children}
      </div>
    )
  }
}

export default Clear;
