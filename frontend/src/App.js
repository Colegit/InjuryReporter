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
  submitData = () => {
    fetch('/insert', {
      method: 'POST',
      body: JSON.stringify({
        content: this.state
      })

    })
  }
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

  doctordesc = (e) => {
    this.setState({docdesc: e.target.value})
  }

  thenotes = (e) => {
    this.setState({notes: e.target.value})
  }

  render(){
    return (

      <div className="App">
      <TheDrawer/>
      <br></br>
      <br></br>
      <br></br>
      <h2>Fill out your answers and press the 'Submit' button </h2>
      <br></br>
      <h3>1) How would you rate your injury pain right now?</h3>
    <Grid container justify ="center">
      <Box width="25%">
      <Slider
        onChange={this.PainRating}
        defaultValue={0}
        aria-labelledby="discrete-slider"
        step={10}
        //need to extract value somehow
        valueLabelDisplay="auto"
        //value={something}
        min={0}
        max={100}
      />
      </Box>
    </Grid>

    <br></br>
    <h3>2) Did you do your daily perscribed excersises?</h3>
    <Grid container justify ="center">
  <RadioGroup aria-label="anonymous" name="anonymous" onChange={this.WorkoutChange} row>
    <FormControlLabel value="YES" control={<Radio />} label="Yes" />
    <FormControlLabel value="NO" control={<Radio />} label="No" />
  </RadioGroup>
   </Grid>
   <br></br>
   <h3>3) Did you have a setback today?</h3>
   <Grid container justify ="center">
  <RadioGroup aria-label="anonymous" name="anonymous" onChange={this.SetbackChange} row>
    <FormControlLabel value="YES" control={<Radio />} label="Yes" />
    <FormControlLabel value="NO" control={<Radio />} label="No" />
  </RadioGroup>
  </Grid>

   
  <div>{this.state.showSetback
  ?  <div>
    <h3>What Happened?</h3>
  
    <Grid container justify ="center">
    <br></br>
    <TextField
        onChange={this.whathappened}
        id="outlined-multiline-static"
        label="Setback Description"
        multiline
        rows={5}
        variant="outlined"
      />
    </Grid>
    </div>
  : <p></p>
  
  }
  </div>


  <br></br>
  <h3>3) Did you see a medical practitioner or health expert today?</h3>
   <Grid container justify ="center">
  <RadioGroup aria-label="anonymous" name="anonymous" onChange={this.DoctorVisit} row>
    <FormControlLabel value="YES" control={<Radio />} label="Yes" />
    <FormControlLabel value="NO" control={<Radio />} label="No" />
  </RadioGroup>
  </Grid>

  <br></br>

<div>{this.state.showdocdesc
? <div>
  <h3>What type?</h3>
  <Grid container justify ="center">
  <Autocomplete
      id="combo-box-demo"
      options={medtype}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Type your provider here" variant="outlined" />}
      onChange={this.doctordesc}
    />
  </Grid>
</div>
: <p></p>
  }
</div>

  <h3>Notes</h3>
  <Grid container justify ="center">
    <br></br>
   <TextField
          id="outlined-multiline-static"
          label="Notes from today"
          multiline
          rows={5}
          variant="outlined"
          onChange={this.thenotes}
        />
  </Grid>

    <br></br>
      <Button
      variant="contained"
      color="primary"
      onClick={this.submitData}
      >Submit</Button>
      <br></br>
      {this.state.statevar}
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
