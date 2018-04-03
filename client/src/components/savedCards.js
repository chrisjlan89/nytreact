import React from "react";
import API from "../utils/API"





const SavedCards = props => {
  




  return (
    <div>
     
      {props.articles.map((article, index) => (
        <div className="card">
          <h5 className="card-header">
            {article.title} 
            <button onClick={props.delFunc} type="button"  value={article._id} className="btn btn-outline-danger pull-right">Delete Article</button>
          </h5>
        <div className="card-body">
         {article.snippet}
          <a href={article.link} className="btn btn-primary">Read the full article</a>
        </div>
        </div>
      ))}
    </div>
  )

 }

 export default SavedCards