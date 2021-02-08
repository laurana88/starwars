import React, { Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

class App extends Component {

  state = {
    planets:[],
  }
  
  // constructor() {
  //   super()
  //   this.state = {
  //     planets: []
  //   }
  // }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/planets/')
      .then(response => response.json())
      .then(response => this.setState({ planets:response.results }));
  } 


  render() {

    const { planets } = this.state;

    if (planets.length === 0) {
      return <h1>Loading</h1>
    } else {

      return (
        <div>
          <header className="p-10">
            <h1 className="text-5xl text-white text-center p-8">
              Welcome to my Star Wars Infotastic Site!
            </h1>
          </header>
          <div className="">
            <CardList planets={planets}/>
            <Footer />
          </div>
        </div>
      );
    }
  }
} 

export default App;
