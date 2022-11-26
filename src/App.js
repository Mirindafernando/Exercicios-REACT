import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
