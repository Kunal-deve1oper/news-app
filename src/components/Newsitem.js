import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={this.props.mode === "dark"?{ color: "white", backgroundColor: "#282626"}:{ }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title?title:""}</h5>
            <p className="card-text">
              {description?description:""}
            </p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
