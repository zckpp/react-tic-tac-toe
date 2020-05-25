import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {game: [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']], player: 'X', winner: ''};
  }

  handleClick  = (e) => {
    let rowId = e.target.parentNode.getAttribute('data');
    let colId = e.target.getAttribute('data');
    let temp = this.state.game;
    temp[rowId][colId] = this.state.player;
    // if winning row
    if (temp[rowId][0] === temp[rowId][1] && temp[rowId][1] === temp[rowId][2] && temp[rowId][2] !== ' ') {
      this.setState({winner: temp[rowId][2]});
    }
    // check winning column
    if (temp[0][colId] === temp[1][colId] && temp[1][colId] === temp[2][colId] && temp[2][colId] !== ' ') {
      this.setState({winner: temp[2][colId]});
    }
    if (temp[0][0] === temp[1][1] && temp[1][1] === temp[2][2] && temp[2][2] !== ' ') {
      this.setState({winner: temp[2][colId]});
    }
    if (temp[0][2] === temp[1][1] && temp[1][1] === temp[2][0] && temp[2][0] !== ' ') {
      this.setState({winner: temp[2][colId]});
    }
    this.setState({game: temp});
    // set next player
    this.state.player === 'X' ? this.setState({player: 'O'}) : this.setState({player: 'X'});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          My tic-tac-toe
        </header>
        {this.state.winner !== '' && <h1>Winner is {this.state.winner}!!</h1>}
        <h2>Current Player: {this.state.player}</h2>
        <table className="map">
          <tbody>
            {this.state.game.map((row, index) => 
              <tr className="row" data={index} key={index}>
                {row.map((col, index) => 
                  <td className="col" data={index} key={index} onClick={this.handleClick}>{col}</td>
                )}
                </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
}

export default App;
