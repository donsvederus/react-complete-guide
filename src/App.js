import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Don', age: 21 },
      { name: 'John', age: 33 },
      { name: 'Mary', age: 25 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked!');
  }

  render() {

    return (
      
      // this code is not html, it's JSX, it will get compiled, so there are some restrictions.
      // we cannot use class for CSS, we use className
      // we should wrap everything in a div or root element, later updates may allow to edit outside the containers.
      <div className="App">  
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // the code above gets compiled into example code below, Even though it looks like HTML it's JSX, React compiles it.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\m a React App?') );
  }
}

export default App;
