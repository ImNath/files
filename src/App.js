import React from 'react';
import logo from './logo.svg';
import './App.css';
import RadioComp from './components/RadioComp.js';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {

      needAbility : null,
      areChecked : [],
      comment : "",


    }
    this.handleChange = this.handleChange.bind(this);


  }




  render() {
    return (
    <div className="App">


      <div>
        <h3>Need Access?</h3>
        <RadioComp name="needAbility"
          value="yes"
          checked={this.state.needAbility === true}
          onChange={this.handleChange}
          text="Yes"
          /> 
        <RadioComp name="needAbility"
          value="no"
          checked={this.state.needAbility === false}
          onChange={this.handleChange}
          text="No"/>
      </div>

    </div>
  );
}
}

export default App;
