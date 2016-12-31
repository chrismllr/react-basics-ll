import React from 'react';
import Button from './Button/Button';

class HelloMessage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  onChangeName = () => {
    this.setState({
      name: 'Wilt Chamberlain'
    });
  }

  render () {
    return (
      <div>
        <h2>Hello, {this.state.name}!</h2>

        <Button text="Change name!" onClick={this.onChangeName} />
      </div>
    )
  }
}

export default HelloMessage;