import React from "react";
import Li from "./Li";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.loadInitialArray();
  }
  loadInitialArray = () => ({
    array: [{ value: 1, id: Math.ceil(Math.random() * 10000) }]
  });

  addItem = (listId, event) => {
    const array = [...this.state.array];
    const x = array.map(x => x.value);
    const id = Math.ceil(Math.random() * 10000);
    const value = x.length === 0 ? 1 : Math.max(...x) + 1;
    array.push({ value, id });
    this.setState({ array });
  };

  removeItem = id => {
    const array = [...this.state.array];
    const x = array.filter(ele => ele.id !== id);
    this.setState({ array: x });
  };

  render() {
    return (
      <div>
        {this.state.array.map((arrayItem, index) => {
          return (
            <Li
              key={arrayItem.id}
              id={arrayItem.id}
              ele={arrayItem.value}
              remove={this.removeItem}
            />
          );
        })}
        <Button clickMe={() => this.addItem()}>
          <span>Click Me</span>{" "}
        </Button>
      </div>
    );
  }
}

class Button extends React.PureComponent {
  render() {
    return <button onClick={this.props.clickMe}>{this.props.children}</button>;
  }
}
