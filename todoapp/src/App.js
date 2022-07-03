import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    task: "",
    data: [],
    show: "none",
  };

  Add = () => {
    if (this.state.task != "") {
      let today = new Date();
      let date =
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate();

      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      let task = {
        task: this.state.task,
        date: date,
        time: time,
      };

      this.setState({
        data: [...this.state.data, task],
        task: "",
        show: "none",
      });
    } else {
      this.setState({
        show: "",
      });
    }
  };

  delete = (index) => {
    let value = index;
    let arr = this.state.data;

    arr = arr.filter((item, index) => index !== value);

    this.setState({
      data: arr,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>ToDo List</h1>
                <div
                  class="alert alert-danger"
                  role="alert"
                  style={{ display: this.state.show }}
                >
                  Please enter your task !!!!!!
                </div>
                <input
                  placeholder="Enter your task"
                  className="form-control"
                  value={this.state.task}
                  onChange={(e) => {
                    this.setState({
                      task: e.target.value,
                    });
                  }}
                ></input>
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={this.Add}
                >
                  Enter
                </button>
              </div>
              <div className="col">
                <ul className="list-group">
                  {this.state.data.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className="list-group-item list-group-item-primary"
                      >
                        {data.task}
                        <span>
                          {data.date} {data.time}
                        </span>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.delete(index)}
                        >
                          Delete
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
