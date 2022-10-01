import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  constructor()
  {
    super();
    this.state = {
      mode: "light"
    }
  }

  changeState = ()=>{
    if(this.state.mode === "light")
    {
      this.setState({mode: "dark"});
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else
    {
      this.setState({mode: "light"});
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar mode={this.state.mode} changeTheme={this.changeState}/>
          <Routes>
            <Route exact path="/" element={<News key='general' mode={this.state.mode} country="in" catagory="general"/>}/>
            <Route exact path="/business" element={<News key="business" mode={this.state.mode} country="in" catagory="business"/>}/>
            <Route exact path="/entertainment" element={<News key='entertainment' mode={this.state.mode} country="in" catagory="entertainment"/>}/>
            <Route exact path="/health" element={<News key='health' mode={this.state.mode} country="in" catagory="health"/>}/>
            <Route exact path="/science" element={<News key='science' mode={this.state.mode} country="in" catagory="science"/>}/>
            <Route exact path="/sports" element={<News key='sports' mode={this.state.mode} country="in" catagory="sports"/>}/>
            <Route exact path="/technology" element={<News key='technology' mode={this.state.mode} country="in" catagory="technology"/>}/>'
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

