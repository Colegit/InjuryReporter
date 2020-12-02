import logo from './logo.svg';
import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './App.css';
import TheDrawer from './Drawer.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      statevar: ""
    }
  }

  hello = () => {
    fetch('/test').then(response => {
      if(response.ok){
        console.log("connected")
      }
    }).then(data => this.setState({statevar: "connected to flask"}))

  }

  render(){
    return (



      <div className="App">
      <TheDrawer/>
      <br></br>
      <br></br>
      <br></br>
      <h2>Showing successful call to flask backend</h2>
      <p>If 'connected to flask' doesnt show up on click, its not connected</p>
      <Button
      variant="contained"
      color="primary"
      onClick={this.hello}
      >Flask</Button>
      <br></br>
      {this.state.statevar}
      </div>




      


    )
  }
}

export default App;
