import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search'

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Search for your TV series</h1>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
