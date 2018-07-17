import React, { Component } from "react";

import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            
            <Main />

            <Footer />

        </div>
    );
  }
}

export default App;
