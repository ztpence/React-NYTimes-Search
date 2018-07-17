import React, { Component } from "react";

const Results = props => {

    return (
        <div>
           {
               props.results.map(article => {
                   console.log('article', article)
                   return (
                       <div key={article.headline.main}>
                            <h4><a href={article.web_url} target="_blank">{article.headline.main}</a></h4>
                            <button onClick={() => props.handleSave(article)}>Save</button>
                       </div>
                   )

               })
           }
        </div>
    );
}

export default Results;
