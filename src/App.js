import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      todolist: [],
    };
  }
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.todolist];
      list.push(newItem);

      this.setState({
        todolist: list,
        newItem: "",
      });
    }
  }
  deleteItem(id) {
    const list = [...this.state.todolist];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ todolist: updatedList });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  handleClick = () => {
    console.log("this is:", this.state.newItem);
  };
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} width="100" height="100" />
        <h1 className="heading"> ToDo - App </h1>
        <div className="container">
          <input
            type="text"
            placeholder="Write ToDo"
            className="inputTodo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          ></input>
          <button
            className="btn-add"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add
          </button>
        </div>
        <div className="todos-list">
          <ul className="list">
            {this.state.todolist.map(item => {
              return (
                <li key={this.id}>
                  <input 
                  className="checkbox"
                  type="checkbox"
                  checked={this.isDone}
                  ></input>
                  {item.value}
                  <button
                    className="btn-del"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <svg
          className="footerWave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a2d9ff"
            d="M0,224L40,213.3C80,203,160,181,240,144C320,107,400,53,480,80C560,107,640,213,720,250.7C800,288,880,256,960,202.7C1040,149,1120,75,1200,48C1280,21,1360,43,1400,53.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default App;
