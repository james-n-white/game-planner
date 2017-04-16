import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Games to be Played</h2>
        <table>
          <th>Name</th>
          <th>Type</th>
          <th>Date started</th>
          <tr>
            <td>The Longest Journey</td>
            <td>Game</td>
            <td>09/04/17</td>
          </tr>
          <tr>
            <td>Dreamfall</td>
            <td>Game</td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
