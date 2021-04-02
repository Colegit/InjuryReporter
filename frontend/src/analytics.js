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

import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

//hiding components https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components

class Analytics extends Component {
  constructor(){
    super();
    this.state = {
      graph: ""
      
      //Hide and show elements

    }
  }


  render(){
    return (

        <div>

            <br></br>
            <br></br>
            <br>
            </br>
            <h1> This will be for the graphs and analytics</h1>

    <React.Fragment>
      <h1>Recent Deposits</h1>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" >
        on 15 March, 2019
      </Typography>
      <div>
        <h1 >
          View balance
        </h1>
      </div>
    </React.Fragment>
        </div>
    )
  }
}


export default Analytics;
