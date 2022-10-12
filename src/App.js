import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 0,
    };
  }

  changeState = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  changeProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            waitingTime={500}
          />
          <Navbar mode={this.state.mode} changeTheme={this.changeState} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="general"
                  mode={this.state.mode}
                  country="in"
                  catagory="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="business"
                  mode={this.state.mode}
                  country="in"
                  catagory="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="entertainment"
                  mode={this.state.mode}
                  country="in"
                  catagory="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="health"
                  mode={this.state.mode}
                  country="in"
                  catagory="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="science"
                  mode={this.state.mode}
                  country="in"
                  catagory="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="sports"
                  mode={this.state.mode}
                  country="in"
                  catagory="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  changeProgress={this.changeProgress}
                  key="technology"
                  mode={this.state.mode}
                  country="in"
                  catagory="technology"
                />
              }
            />
            '
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
