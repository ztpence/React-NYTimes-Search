import React, { Component } from "react";

const SavedArticles = props => {

    return (
        <div>
            <h4>Saved Articles</h4>
           {
               props.savedArticles.map(article => {
                   console.log('article', article)
                   return (
                       <div key={article.data.headline.main}>
                            <h4><a href={article.data.web_url} target="_blank">{article.data.headline.main}</a></h4>
                            <button onClick={() => props.handleDelete(article)}>Delete</button>
                       </div>
                   )

               })
           }
        </div>
    );
}

export default SavedArticles;
