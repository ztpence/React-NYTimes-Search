import React, { Component } from "react";

const Results = props => {

    return (
        <div>
            
            <div className="card">
            <h3 className="card-header text-center mr-5">Search Results</h3>
            {
                props.results.map(article => {
                    console.log('article', article)
                    return (
                        <div classname="row-justify-content-center">
                        <div key={article.headline.main}>
                             <h4><a href={article.web_url} target="_blank">{article.headline.main}</a></h4>
                             <button type="button" className="btn btn-dark" onClick={() => props.handleSave(article)}>Save</button>
                             
                        </div>
                        </div>
                    )
 
                })
            }
             </div>
           
        </div>
    );
}

export default Results;
