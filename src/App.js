import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
      });
  }

  nameChangedHandler = (event) => {this.setState({
    persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <div>
          {this.state.persons.map((person, index) => {
            return (
                <Person 
                    click={this.deletePersonHandler.bind(this, index)}
                    name={person.name} 
                    age={person.age}
                    />
              );
          })}
        </div> 
        ;
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button 
            style={style}
            onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
