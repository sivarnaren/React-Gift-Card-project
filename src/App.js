import React, { Component } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Router from './Router';

class App extends Component {
    render() {
        return (
          <div>
            {/* <Header /> */}

            <Router />

            <Footer />
          </div>
        );
    }
}

export default App;

