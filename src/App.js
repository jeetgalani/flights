import './App.css';
import Body from './component/body';
import React, {Component} from 'react';



class App extends Component {

  state = { flights: [] }



showFlights = () => {
  fetch('https://ally-flights.herokuapp.com/flights/')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    this.setState({flights: data })
  })
  .catch(console.log)
}



  render() {
    return (

      <div className='background font'>
        <Body stuff={this.state.flights} />
       <button className="button" onClick={this.showFlights}>Show Flights</button> 
      </div>
      
    );
  }
}

export default App;
