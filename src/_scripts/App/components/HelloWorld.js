import React, { Component } from 'react'

export default class HelloWorld extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>Hello Blah!</h1>
        <p><strong>{title}</strong></p>
      </div>
    )
  }
}
