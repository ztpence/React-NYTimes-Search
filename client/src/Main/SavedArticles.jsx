import React, { Component } from "react";

const SavedArticles = props => {

    return (
        <div>
        <div className="card">
            <h3 className="card-header text-center mr-5">Saved Articles</h3>
           {
               props.savedArticles.map(article => {
                   console.log('article', article)
                   return (
                       <div key={article.data.headline.main}>
                            <h4><a href={article.data.web_url} target="_blank">{article.data.headline.main}</a></h4>
                            <button type="button" className="btn btn-danger" onClick={() => props.handleSave(article)}>Delete</button>
                       </div>
                   )

               })
           }
        </div>
        </div>
    );
}

export default SavedArticles;
