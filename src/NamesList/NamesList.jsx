import React from "react";

class NamesList extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
export default NamesList;
