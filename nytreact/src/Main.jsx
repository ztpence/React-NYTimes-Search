import React, { Component } from "react";

import SearchForm from './Main/SearchForm';
import Results from './Main/Results';
import SavedArticles from './Main/SavedArticles';


class Main extends Component {

    render() {
        return (
            <main>
                <SearchForm />
                <Results />
                <SavedArticles />
            </main>
        );
    }
}

export default Main;
