import logo from './logo.svg';
import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './App.css';
import TheDrawer from './Drawer.jsx'
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Analytics from './analytics'
import Home from './home'
import Edit from './edit'
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'

// Dark mode one day https://www.npmjs.com/package/react-dark-mode-toggle

//hiding components https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components

class App extends Component {
  constructor(){
    super();
    this.state = {
      pain: "",
      excersise: "",
      setback: "",
      setbackdesc: "",
      doc: "",
      docdesc: "",
      notes: "",
      
      //Hide and show elements
      showSetback: false,
      showdocdesc: false

    }
  }
 // submitData = () => {
 //   fetch('/insert', {
 //     method: 'POST',
 //     body: JSON.stringify({
 //       content: this.state
 //     })

 //   })
 // }
//  hello = () => {
//    fetch('/test').then(response => {
//      if(response.ok){
//        console.log("connected")
//      }
//    }).then(data => this.setState({statevar: "connected to flask"}))

//  }

  value = 10
  //https://www.youtube.com/watch?v=PLPVJa9jzS0
  PainRating = (e, val) => {
    this.setState({pain: val})
    console.log(this.state.pain)
  }


  WorkoutChange = (e) => {
    this.setState({excersise: e.target.value})
    //console.log(e.target.value)
    console.log(this.state.excersise)
  };

//toggle setback textbox on/off https://www.youtube.com/watch?v=Mo2_UPkZjJU
  SetbackChange = (e) => {
    this.setState({setback: e.target.value})
    //console.log(e.target.value)
    console.log(this.state.setback)

    //If Yes is selected, the description box should be displayed. 
    if(e.target.value === "YES"){
      this.setState({showSetback: true})
      console.log("entering if statement")
    }
    else{
      this.setState({showSetback: false});
      this.setState({setbackdesc: ""})
      console.log(this.state.setbackdesc)
    }
    console.log(this.state.showSetback)
  };

  whathappened = (e) => {
    this.setState({setbackdesc: e.target.value})
    console.log(this.state.setbackdesc)
  }

  DoctorVisit = (e) => {
    this.setState({doc: e.target.value})

    if(e.target.value == "YES"){
      this.setState({showdocdesc: true})
      console.log(this.state.showdocdesc)
    }
    else{
      this.setState({showdocdesc: false})
      this.setState({docdesc: ""})
    };
  }

  doctordesc = (e, v) => {
    this.setState({docdesc: v})
    console.log(v)
  }

  thenotes = (e) => {
    this.setState({notes: e.target.value})
  }

  render(){
    return (




      <div className="App">
      {/*In order for router to work between the drawer and the app page, we can only have one router, 
      or you will click the button, the url will change, but nothing will load. This is due to
      the problem if two routers are in both files, it wont render the second one Explanation: https://stackoverflow.com/questions/48640280/you-should-not-use-link-outside-a-router */}
      <Router>
      <TheDrawer/>
      <main>
        <Switch>
          <Route exact path="/analytics" render={props => <Analytics {...props}  />} />
          <Route exact path="/" render={props => <Home {...props}  />} />
          <Route exact path="/edit" render={props => <Edit {...props}  />} />
        </Switch>
      </main>
      </Router>


      </div>

    )
  }
}

const medtype = [
  { title: 'Accupuncture' },
  { title: 'Audiologist' },
  { title: 'Chiropractor' },
  { title: 'Counselling/Therapy' },
  { title: 'Dentist' },
  { title: 'Dental Therapist' },
  { title: 'Dietician' },
  { title: 'Homeopath' },
  { title: 'Kinesiologist' },
  { title: 'General Physician' },
  { title: 'Massage Therapist' },
  { title: 'Naturopath' },
  { title: 'Neuro-optometrist' },
  { title: 'Neurologist' },
  { title: 'Occupational Therapist' },
  { title: 'Optometrist' },
  { title: 'Osteopath' },
  { title: 'Physiotherapist/Physical Therapist' },
  { title: 'Psychologist' },
  { title: 'Personal Trainer' },
  { title: 'Nutritionist' },
  { title: 'Surgeon' },

];


export default App;
