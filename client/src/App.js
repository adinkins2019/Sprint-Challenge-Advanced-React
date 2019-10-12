import React from 'react';
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      players: []
    }
  }
  getPlayers = () => {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => this.setState({
      players: response.data}))
    .catch(err => console.log("Error: ", err))
  
  }
  componentDidMount(){
    this.getPlayers()
  }  
  render() {
    return (
      <div className="App">
        <h1>Players</h1>
        <section>{this.state.players.map(player =>
          <PlayerCard key={player.id} name = {player.name} country={player.country} searches={player.searches} />
            
          
        )}</section>
      </div>
    );
  }
 
}

export default App;
