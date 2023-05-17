import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

class App extends Component {

  // constructor(){
  //   super();
  // };

  render(){
    return(
      <div className="App">
        <Navbar/>
        <TaskList/>
      </div>
    );
  };

}

export default App;
