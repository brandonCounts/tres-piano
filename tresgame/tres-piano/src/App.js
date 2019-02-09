import React, { Component } from 'react';
import logo from './tres.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Card, Paper, Icon, Grid, Select, MenuItem} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {Switch, Grow, Zoom} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
const styles = theme => ({
  root: {
    height: 5,
    width: 5,
  },
  root2: {
    height: 5,
    width: 5,
  },
  span: {
fontSize: '20px',
margin: '8px',
  },

  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  button:{
    height: '40px',
    backgroundColor: 'white',
    margin: 10,
  },
  whiteNote: {
    color: 'black',
    fontWeight: 900,
    textAlign: 'right',
    fontSize: '10px',
    height: '40px',
    width: '200px',

    backgroundColor: 'white',
    zIndex: 400,
    

  },
  dropdown:{  
    margin: 20,
    fontSize: '24px',
    width: '380px',
    color: 'black',
    backgroundColor: '#eee'
  },
  blackNote: {
    marginBottom: '3rem',
    color: 'white',
    marginTop: '-.5rem',
    fontWeight: 900,
    textAlign: 'right',
    height: '20px',
    fontSize: '10px',
    width: '160px',
    position: 'absolute',
    backgroundColor: 'black',
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  title: {
    marginLeft: 300,
    fontSize: '100px',
    color: '#fafafa',
  position: 'absolute',

  },
  img: {
    marginLeft: 200,

    fontSize: '100px',
    color: '#fafafa',
  position: 'absolute',
  height: '1100px'

  },
  TeTRES:{
    fontSize: '200px',
    color: '#9e9e9e',
  },
  selectedNoteW: {
    color: 'black',
    fontWeight: 900,
    textAlign: 'right',
    fontSize: '10px',
    height: '40px',
    width: '200px',
    backgroundColor: 'blue',
    zIndex: 400,
  },
  selectedNoteB: {
    marginBottom: '3rem',
    color: 'white',
    marginTop: '-.5rem',
    fontWeight: 900,
    textAlign: 'right',
    height: '20px',
    fontSize: '10px',
    width: '160px',
    position: 'absolute',
    backgroundColor: 'green',
  },
  majorScaleButtons: {
    height: 60,
    fontSize: '16px',
    margin: 8,
    padding: 6,
    backgroundColor: '#9e9e9e',
    color: 'black',
  }
});

class App extends Component {
  state = {
    checked: true,
    selection: '',
    keys: [],
    selectedNote: '',
  };
  defaults = [
    {id: 1, name: 'white',selected: false, note: 'E'},
     {id: 2, name: 'black',selected: false, note: 'D# / E flat'},
     {id: 3, name: 'white',selected: false, note: 'D'},
     {id: 4, name: 'black',selected: false, note: 'C# / D flat'},
     {id: 5, name: 'white',selected: false, note: 'C'},
     {id: 6, name: 'white',selected: false, note: 'B'},
     {id: 7, name: 'black',selected: false, note: 'A# / B flat'},
     {id: 8, name: 'white',selected: false, note: 'A'},
     {id: 9, name: 'black',selected: false, note: 'G# / A flat'},
     {id: 10, name: 'white',selected: false, note: 'G'},
     {id: 11, name: 'black', selected: false, note: 'F# / G flat'},
     {id: 12, name: 'white',selected: false, note: 'F'},
     {id: 13, name: 'white',selected: false, note: 'E'},
     {id: 14, name: 'black',selected: false, note: 'D# / E flat'},
     {id: 15, name: 'white', selected: false, note: 'D'},
     {id: 16, name: 'black',selected: false, note: 'C# / D flat'},
     {id: 17, name: 'white',selected: false, note: 'C'},
     {id: 18, name: 'white',selected: false, note: 'B'},
     {id: 19, name: 'black',selected: false, note: 'A# / B flat'},
     {id: 20, name: 'white',selected: false, note: 'A'},
     {id: 21, name: 'black',selected: false, note: 'G# / A flat'},
     {id: 22, name: 'white',selected: false,  note: 'G'},
     {id: 23, name: 'black',selected: false, note: 'F# / G flat'},
     {id: 24, name: 'white',selected: false, note: 'F'},
     {id: 25, name: 'white',selected: false, note: 'E'},
     {id: 26, name: 'black',selected: false, note: 'D# / E flat'},
     {id:27, name: 'white',selected: false, note: 'D'},
    {id: 28, name: 'black', selected: false,note: 'C# / D flat'},
    {id: 29, name: 'white',selected: false, note: 'C'},
    {id: 30, name: 'white',selected: false, note: 'B'},
    {id:31, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 32, name: 'white',selected: false, note: 'A'},
    {id: 33, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 34, name: 'white',selected: false, note: 'G'},
    {id: 35, name: 'black',selected: false, note: 'F# / G flat'},
    {id: 36, name: 'white',selected: false, note: 'F'},
    {id: 37, name: 'white',selected: false, note: 'E'},
    {id: 38, name: 'black',selected: false, note: 'D# / E flat'},
    {id: 39, name: 'white',selected: false, note: 'D'},
    {id: 40, name: 'black',selected: false, note: 'C# / D flat'},
    {id: 41, name: 'white',selected: false, note: 'C'},
    {id: 42, name: 'white',selected: false, note: 'B'},
    {id: 43, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 44, name: 'white',selected: false, note: 'A'},
    {id: 45, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 46, name: 'white',selected: false,  note: 'G'},
    {id: 47, name: 'black',selected: false, note: 'F# / G flat'},
    {id: 48, name: 'white',selected: false, note: 'F'},
    {id: 49, name: 'white',selected: false, note: 'E'},
    {id: 50, name: 'black',selected: false, note: 'D# / E flat'},
      {id:51, name: 'white',selected: false, note: 'D'},];
  componentDidMount = () => {
    this.startPage();
  }
  startPage = () => {
const keys = [
   {id: 1, name: 'white',selected: false, note: 'E'},
    {id: 2, name: 'black',selected: false, note: 'D# / E flat'},
    {id: 3, name: 'white',selected: false, note: 'D'},
    {id: 4, name: 'black',selected: false, note: 'C# / D flat'},
    {id: 5, name: 'white',selected: false, note: 'C'},
    {id: 6, name: 'white',selected: false, note: 'B'},
    {id: 7, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 8, name: 'white',selected: false, note: 'A'},
    {id: 9, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 10, name: 'white',selected: false, note: 'G'},
    {id: 11, name: 'black', selected: false, note: 'F# / G flat'},
    {id: 12, name: 'white',selected: false, note: 'F'},
    {id: 13, name: 'white',selected: false, note: 'E'},
    {id: 14, name: 'black',selected: false, note: 'D# / E flat'},
    {id: 15, name: 'white', selected: false, note: 'D'},
    {id: 16, name: 'black',selected: false, note: 'C# / D flat'},
    {id: 17, name: 'white',selected: false, note: 'C'},
    {id: 18, name: 'white',selected: false, note: 'B'},
    {id: 19, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 20, name: 'white',selected: false, note: 'A'},
    {id: 21, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 22, name: 'white',selected: false,  note: 'G'},
    {id: 23, name: 'black',selected: false, note: 'F# / G flat'},
    {id: 24, name: 'white',selected: false, note: 'F'},
    {id: 25, name: 'white',selected: false, note: 'E'},
    {id: 26, name: 'black',selected: false, note: 'D# / E flat'},
    {id:27, name: 'white',selected: false, note: 'D'},
    {id: 28, name: 'black', selected: false,note: 'C# / D flat'},
    {id: 29, name: 'white',selected: false, note: 'C'},
    {id: 30, name: 'white',selected: false, note: 'B'},
    {id:31, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 32, name: 'white',selected: false, note: 'A'},
    {id: 33, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 34, name: 'white',selected: false, note: 'G'},
    {id: 35, name: 'black',selected: false, note: 'F# / G flat'},
    {id: 36, name: 'white',selected: false, note: 'F'},
    {id: 37, name: 'white',selected: false, note: 'E'},
    {id: 38, name: 'black',selected: false, note: 'D# / E flat'},
    {id: 39, name: 'white',selected: false, note: 'D'},
    {id: 40, name: 'black',selected: false, note: 'C# / D flat'},
    {id: 41, name: 'white',selected: false, note: 'C'},
    {id: 42, name: 'white',selected: false, note: 'B'},
    {id: 43, name: 'black',selected: false, note: 'A# / B flat'},
    {id: 44, name: 'white',selected: false, note: 'A'},
    {id: 45, name: 'black',selected: false, note: 'G# / A flat'},
    {id: 46, name: 'white',selected: false,  note: 'G'},
    {id: 47, name: 'black',selected: false, note: 'F# / G flat'},
    {id: 48, name: 'white',selected: false, note: 'F'},
    {id: 49, name: 'white',selected: false, note: 'E'},
    {id: 50, name: 'black',selected: false, note: 'D# / E flat'},
    {id:51, name: 'white',selected: false, note: 'D'},];
    const newKeys = keys.sort((a, b) => a.id - b.id);
    this.setState({keys: newKeys}, () => {
      this.generateKeys();
    })
  }
  handleSelect = (event) => {
    console.log('here handle scale')
    const {selectedNote} = this.state;
    this.setState({
      selection: event.target.value,
      forgettingYourScale: false,
    })
    console.log(event.target.value)
    if(selectedNote){
      this.generateScaleFrom(selectedNote);
    }
    this.generateScaleFrom(selectedNote);
   
  }
  getClassNameForKeys = (key) => {
    const {classes} = this.props
if(key.name === 'black' && key.selected) {
  return classes.selectedNoteB;
}
if(key.name === 'white' && key.selected) {
  return classes.selectedNoteW;
}
if(key.name === 'black' && !key.selected) {
  return classes.blackNote;
}
if(key.name === 'white' && !key.selected) {
  return classes.whiteNote;
}
  }
   keyAmount = 88;
 generateKeys = () => {
  console.log('here generate keys')
  const { classes } = this.props;
const {keys} = this.state;
return keys.map(key => (<button onClick={(e) => this.generateScale(key)}
 className={ this.getClassNameForKeys(key) } >{key.note}</ button>))
 } 

 highlightNote = (numbersList) => {
  console.log('here highlight note')
  const {selectedNote} = this.state;
  const newArray = [];
  numbersList.forEach(function(element) {
    const thatThing = selectedNote - element;
    newArray.push(thatThing);
    return newArray;
  });
newArray.push(selectedNote);
  this.compareArrays(newArray)
 }


 generateScaleFrom = (sP) => {
  console.log('here generate scale from')
  this.setState({
    selectedNote: sP,
    keys: this.defaults,
  }, () => {
   const { selection } = this.state;
   let numbersList = [];
     switch(selection) {
    case 'Major Scale':
      // code block
   numbersList = [2,4,5,7,9,11,12]
    this.highlightNote(numbersList);
      break;
    case 'Minor Scale':
   numbersList = [2,3,5,7,8,12,13]
    this.highlightNote(numbersList);
      // code block
      break;
      case 'Major Chord':
      numbersList = [4,7]
       this.highlightNote(numbersList);
         // code block
         break;
         case 'Minor Chord':
      numbersList = [3,7]
       this.highlightNote(numbersList);
         // code block
         break;
    default:
      // code block
  }
  })
  
}

 compareArrays = (newArray) => {
  console.log('here compare arrays')
const {keys} = this.state;
const finalArray = [];
newArray.forEach((element1) =>
  keys.forEach((element2) =>{
    if(element1 === element2.id){
      finalArray.push(element2)
      
    }
    }
  ));
  this.createNewList(finalArray);
return finalArray;
 }
 createNewList = (finalArray) => {
  console.log('here create new list')
   const {keys} = this.state;
  keys.forEach((el) => {
    if (el.selected) {
    el.selected = false;
    }
       })
   finalArray.forEach((element) => {
     element.selected = true;
   })
  var clone = keys.slice(0);

  clone.forEach((element1) =>
  finalArray.forEach((element2) =>{
    var i = clone.indexOf(element1);
    if(element1.id === element2.id){
      console.log(element1, element2)
      clone.splice(i, 1)
    }
    }
  ));
  this.mergeTogetherArrays(clone, finalArray);
 }
 mergeTogetherArrays = (a,b) => {
  console.log('here merge together arrays')
  const andFinally = a.concat(b);
  const newKeys = andFinally.sort((a, b) => a.id - b.id);
  console.log('new keys before set state', newKeys)
 
  // this.setState({keys: newKeys})
  console.log('new keys before set state', newKeys)
   console.log('==========================')
   this.findDuplicates(newKeys);
   // this is where the issue is
 }
 findDuplicates = (data) => {
  const uniqueArray = data.filter(function(item, pos) {
    return data.indexOf(item) == pos;
})
  let result = [];

  data.forEach(function(element, index) {
    
    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
        data.splice(element)
      }
    }
  });
 this.setState({keys: uniqueArray})
  return result;

}

gatherKeys = (selection) => {
  console.log('here gather keys')
  let numbersList = [];
  switch(selection) {
    case 'Major Scale':
      // code block
   numbersList = [2,4,5,7,9,11,12]
    this.highlightNote(numbersList);
      break;
    case 'Minor Scale':
   numbersList = [2,3,5,7,8,12,13]
    this.highlightNote(numbersList);
      // code block
      break;
      case 'Major Chord':
      numbersList = [4,7]
       this.highlightNote(numbersList);
         // code block
         break;
         case 'Minor Chord':
      numbersList = [3,7]
       this.highlightNote(numbersList);
         // code block
         break;
    default:
      // code block
  }
}
 generateScale = (sP) => {
  console.log('here generate scale')
   const { selection } = this.state;
   this.setState({
    selectedNote: sP.id,
    keys: this.defaults,
    actualNote: sP.note,
    majorScaleButtons: null,
  }, () => {
   const { selection } = this.state;
    this.gatherKeys(selection)
  });
   if(!selection) {
     this.setState({forgettingYourScale: true})
   }
   else{
    this.setState({forgettingYourScale: false})
   }
 }
 
//  findChordsInMajorScale = () => {
// const {actualNote, selection} = this.state;
// const typeOfScaleAndNote = actualNote + selection;
// const aMajorScaleNotes =['A major seventh', 'A major', 'B minor', 'B minor seventh','C sharp minor', 'C sharp minor seventh', 'D sharp', 'D sharp seventh', 'E major', 'E major dominant seveneth', 'F sharp minor', 'F sharp minor seventh', 'G sharp diminished', 'G sharp minor seventh flat five' ];
// const bMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// const cMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// const dMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// const eMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// const fMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// const gMajorScaleNotes =['F major', 'F major seventh', 'G minor', 'G minor seventh', 'A minor', 'A minor seventh', 'B flat major', 'B flat major seventh', 'C major','C major dominant seventh','D minor', 'D minor seventh', 'E diminished', 'E minor seventh flat 5' ];
// switch(typeOfScaleAndNote) {
//   case 'AMajor Scale':
// this.setState({
//   majorScaleNotes: aMajorScaleNotes
// })
//     break;
//   case 'BMajor Scale':

//   this.setState({
//     majorScaleNotes: bMajorScaleNotes
//   })
//     break;
//     case 'CMajor Scale':
//     this.setState({
//       majorScaleNotes: cMajorScaleNotes
//     })
//     break;
//   case 'DMajor Scale':

//   this.setState({
//     majorScaleNotes: dMajorScaleNotes
//   })
//     break;
//     case 'EMajor Scale':
//     this.setState({
//       majorScaleNotes: eMajorScaleNotes
//     })
//     break;
//   case 'FMajor Scale':

//   this.setState({
//     majorScaleNotes: fMajorScaleNotes
//   })
//     break;
//     case 'GMajor Scale':
//     this.setState({
//       majorScaleNotes: gMajorScaleNotes
//     })
//     break;
//   default:
//     // code block
// }

//  }
 createMajorScaleNotesButtons = () => {
   const { majorScaleNotes } = this.state;
   const { classes } = this.props;
   return majorScaleNotes.map(key => (<Button onClick={(e) => this.showMeTheKeyOnKeyboard(key)}
   className={classes.majorScaleButtons} >{key}</ Button>))
   } 

   showMeTheKeyOnKeyboard =(key) => {
     console.log('you can do something with this later -----> ',key)
   }


  render() {
    const { checked } = this.state;
    const { classes } = this.props;
    const polygon = (
      <Paper elevation={4} className={classes.paper}>
        <svg className={classes.svg}>
          <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
        </svg>
      </Paper>
    );
    return (
    <div>
      <Select className={classes.dropdown} value={this.state.selection} onChange={this.handleSelect}>
      <MenuItem value='Major Scale'>Major Scale</MenuItem>
      <MenuItem value='Minor Scale'>Minor Scale</MenuItem>
      <MenuItem value='Minor Chord'>Minor Chord</MenuItem>
      <MenuItem value='Major Chord'>Major Chord</MenuItem>
      </Select>
      
      {/* {this.state.selection === 'Minor Scale' && this.state.actualNote ? <Button className={classes.button} onClick={this.findChordsInMinorScale}>Find Chords In This Scale</Button> : ''}
      {this.state.selection === 'Major Scale' && this.state.actualNote ? <Button className={classes.button} onClick={this.findChordsInMajorScale}>Find Chords In This Scale</Button> : ''} */}
      <Grid item xs={4}>
      <Grow in><img className={classes.img} src={logo}/></Grow>
     {this.state.forgettingYourScale ?   <Grow in><div className={classes.title}>Pick something!! </div></Grow> : ''}
    {this.state.actualNote && this.state.selection ? this.state.actualNote + ' ' + this.state.selection : ''}
     </Grid>
     <Grid item xs={12}>
     {this.state.majorScaleNotes ? this.createMajorScaleNotesButtons() : ''}

     </Grid>
      <div className={classes.root}>
     {this.generateKeys()}

     </div>
     
     </div>
    );
  }
}

export default withStyles(styles)(App);



