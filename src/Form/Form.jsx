import React, { createRef } from "react";
import "../App.css";
import NamesList from "../NamesList/NamesList";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showNm: false,
      isDisabled: false,
    };
    this.inputRef = createRef();
    this.inputName = this.inputName.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.focusHandler = this.focusHandler.bind(this);

    console.log("Constructor called");
  }
  inputName(e) {
    let result = {
      value: e.target.value,
      showNm: false,
      isDisabled: false,
    };
    if (result.value === "react" || result.value === "React") {
      result.isDisabled = true;
    }
    this.setState(result);
  }

  submitButton(event) {
    console.log("Your Name is: " + this.state.value);
    this.setState({ ...this.state, showNm: true });
    event.preventDefault();
  }
  focusHandler(e) {
    this.inputRef.current.focus();
    e.preventDefault();
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDisabled === true) {
      alert("type in a new one");
    }
  }

  render() {
    let list;
    if (this.state.showNm) {
      list = <NamesList name={this.state.value} />;
    } else list = null;
    return (
      <>
        <form onSubmit={this.submitButton}>
          <label>
            Type in Your Name
            <input
              ref={this.inputRef}
              type="text"
              value={this.state.value}
              onChange={this.inputName}
            />
          </label>
          <button
            type="submit"
            value="show Name"
            disabled={this.state.isDisabled}
          >
            Show Name
          </button>
          <button onClick={this.focusHandler}>FocusOnInput</button>
        </form>

        {list}
      </>
    );
  }
}

export default Form;