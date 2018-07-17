import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./Main/SearchForm";
import Results from "./Main/Results";
import SavedArticles from "./Main/SavedArticles";

class Main extends Component {

    state = {
        savedArticles: [],
        results: [],
        searchQuery: {}
    }

  testAjax = () => {
    axios
      .get("/api/articles")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleSubmitSearch = query => {
    console.log('query', query)
  }

  render() {
    return (
      <main>
        <SearchForm handleSubmitSearch={this.handleSubmitSearch} />
        <Results />
        <SavedArticles />
        <button onClick={this.testAjax}>Test ajax</button>
      </main>
    );
  }
}

export default Main;
