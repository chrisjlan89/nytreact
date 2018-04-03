import axios from "axios";

let BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "789d080cc9eb4433b86f7d304a264bb3"



export default {
  search: function(query) {
    
    
    return axios.get(`${BASEURL}?q=${query}&api-key=${APIKEY} `);
  },

    // Gets all Articles
    getArticles: function() {
      return axios.get("/api/Articles");
    },
 
    // Deletes the Article with the given id
    deleteArticle: function(id) {
      return axios.delete("/api/Articles/" + id);
    },
    // Saves a Article to the database
    saveArticle: function(ArticleData) {
      return axios.post("/api/Articles", ArticleData);
    }
 

};
