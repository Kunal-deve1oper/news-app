import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types';


export class News extends Component {
  
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    catagory: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catagory: PropTypes.string
  }
  
  
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1
    };
  }

  previousBtn = async ()=>{
    this.props.changeProgress(10);
    let getUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c3fbbcac7dad4b859db5ea9eca2edbf2&pageSize=${this.props.pageSize}&page=${ this.state.page - 1}`;
    let value = await fetch(getUrl);
    let data = await value.json();
    this.props.changeProgress(40);
    this.setState({
      articles: data.articles,
      page: this.state.page-1
    });
    this.props.changeProgress(100);
  }

  nextBtn = async ()=>{
    this.props.changeProgress(10);
    let getUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c3fbbcac7dad4b859db5ea9eca2edbf2&pageSize=${this.props.pageSize}&page=${ this.state.page + 1}`;
    let value = await fetch(getUrl);
    let data = await value.json();
    this.props.changeProgress(40);
    this.setState({ 
      articles: data.articles,
      page: this.state.page+1
    });
    this.props.changeProgress(100);
  }

  async componentDidMount(){
    this.props.changeProgress(10);
    let getUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=c3fbbcac7dad4b859db5ea9eca2edbf2&pageSize=${this.props.pageSize}&page=1`;
    let value = await fetch(getUrl);
    let data = await value.json();
    this.props.changeProgress(40);
    this.setState({ articles: data.articles });
    this.props.changeProgress(100);
  }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Latest {this.props.catagory} News</h1>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4 my-4" key={e.url}>
                <Newsitem
                  title={e.title}
                  description={e.description}
                  imageUrl={e.urlToImage}
                  url={e.url}
                  mode={this.props.mode}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousBtn}>
            Previous Page
          </button>
          <button type="button" className="btn btn-dark" onClick={this.nextBtn}>
            Next Page
          </button>
        </div>
      </div>
    );
  }
}

export default News;
