import React from "react";
import API from "../utils/API"
import CardCss from "../css/Cards.css"





const Cards = props => {
  
 return (
    <div>
    {
      console.log(props.search)
    }
      {props.articles.map((article, index) => (
        <div className="card">
          <h5 className="card-header">
            {article.headline.main} 
            <button onClick={props.saveArticle} type="button"  value={JSON.stringify(article._id)} className="btn btn-outline-success pull-right">Save Article</button>
          </h5>
        <div className="card-body">
        
          <h5 className="card-title"> {article.snippet}</h5>
          <a href={article.web_url} className="btn btn-primary">Read the full article</a>
        </div>
        </div>
      ))}
    </div>
  )

 }

 export default Cards 

