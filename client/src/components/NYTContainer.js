import React, { Component } from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import Cards from "./Cards"
import API from "../utils/API"
import { Input, FormBtn } from "./Form/";


class NYTContainer extends Component {
    state = {
      articles : [],
      search : '',
      string : ''
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



handleSaveHeadline = event => {
  console.log(JSON.parse(event.target.value))
  let article = JSON.parse(event.target.value)

  API.saveArticle({
   title: article.headline.main,
   link: article.web_url,
   snippet : article.snippet
   
 })
 

}


handleSubmitForm = event => {

  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  event.preventDefault();
  API.search(this.state.search)
    .then(res => {
      //let results = res.data.response.docs;
      //console.log(results);
      //console.log(typeof results);
      this.setState({  articles: res.data.response.docs });
      
      
    })
    
    .catch(err => console.log(err));
};


render() {
    console.log(this.state.articles)
     return (
      <div>
        <Navbar onStateChange={this.handleInputChange}/>
        <Header/>
            <div className = "row">
              <div className = "col-md-6">
              <h1> Article Search </h1>
              <Input name="search" onChange={this.handleInputChange} placeholder="Search an Article (required)" />
              </div>
            </div>
           <div className = "row">
             <div className ="col-md-1">
             <FormBtn onClick={this.handleSubmitForm}/>
             </div>
           </div>
           <div className = "row">
             <div className ="col-md-12 col-lg-12">
          {
            (this.state.articles.length > 0 ) 
            ? <Cards saveArticle={this.handleSaveArticle} articles={this.state.articles} />
            : <p>There are no results :( </p>
          }
             </div>
          </div>
       </div>
       
      );
    }
  }
export default NYTContainer;

