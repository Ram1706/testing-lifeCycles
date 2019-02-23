import React from "react";

export default class Li extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ele: props.ele };
  }
  componentWillMount() {
    console.groupCollapsed(
      "%cInitial Render for",
      "color:red",
      this.props.ele,
      this.props.id
    );
    console.log("%cIn WillMount of", "color:red", this.props.ele);
    this.setState({ ele: this.props.ele });
  }

  componentWillReceiveProps() {
    console.log(
      "%ccomponentWillReceiveProps of",
      "color:green",
      this.props.ele,
      this.props.id
    );
  }
  componentWillUpdate() {
    console.groupCollapsed(
      "%cUpdate Cycle for",
      "color:green",
      this.props.ele,
      this.props.id
    );
    console.log(
      "%cComponentWillUpdate of",
      "color:green",
      this.props.ele,
      this.props.id
    );
  }
  // shouldComponentUpdate() {
  //   console.log(
  //     "%cShouldUpdate of",
  //     "color:green",
  //     this.props.ele,
  //     this.props.id
  //   );
  //   return true;
  // }
  componentDidMount() {
    console.log("%cDidMount of", "color:grey", this.props.ele, this.props.id);
  }

  componentDidUpdate() {
    console.log("%cDidUpdate of", "color:grey", this.props.ele, this.props.id);
  }
  componentWillUnmount() {
    console.log(
      "%cWill Unmount of",
      "color:pink",
      this.props.ele,
      this.props.id
    );
  }
  render() {
    console.log("%crender of", "color:purple", this.props.ele, this.props.id);
    console.groupEnd(
      "%cInitial Render for",
      "color:red",
      this.props.ele,
      this.props.id
    );
    console.groupEnd(
      "%cUpdate Cycle for",
      "color:green",
      this.props.ele,
      this.props.id
    );

    return (
      <li onClick={() => this.props.remove(this.props.id)}>{this.props.ele}</li>
    );
  }
}
