import React, { Component } from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import SavedCards from "./savedCards"
import API from "../utils/API"


class NYTSaved extends Component {
  state = {
    articles : [],
  
  }


    // set up handle input function of what user types in and set it to STATE 
 handleInputChange = event => {
   
  // deconstruction way
  //  aka
  // const name = event.target.name
  // const value = event.target.value
  const {name , value} = event.target;
  console.log('name', name, value)
  this.setState({
    [name] : value
  })
}

componentDidMount = () => {
  this.loadArticles()
}

loadArticles = () => {
  API.getArticles()
  .then(res => this.setState({articles : res.data}))
  .then(console.log(this.state))
  .catch(err => console.log(err))
}

handleDeleteArticle = event => {
  API.deleteArticle(event.target.value)
  .then(res => console.log('article deleted'))
  .catch(err => console.log(err))
}


    



render() {
  console.log(this.state.articles)
   return (
     <div>
     <Navbar/>
      <Header/>
     
      <div className = "row">
      <div className ="col-md-1">
       
      </div>
      </div>
      <div className = "row">
      <div className ="col-md-12 col-lg-12">
        {
          (this.state.articles.length > 0 ) 
          ? <SavedCards delFunc={this.handleDeleteArticle} articles={this.state.articles} />
          : <h1> Please Hold While We load your articles, if nothing loads no Articles have neen Saved. </h1>
        }
      </div>
      </div>
     </div>
     
    );
  }
  }
export default NYTSaved;



