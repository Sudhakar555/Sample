import React,{Component} from 'react';
import './App.css';
import Home from './Components/Home'
export default class App extends Component{

  constructor(){
    super();
    this.state = {
      data: [
        {
          id: 1,
          firstName: "Sudhakar",
          age: 23,
          qualification: "B.Tech",
          
          address:[
            {
              City:"Chennai",
              State:"Tamil Nadu"
            }
          ]
          
        },
        {
          id: 2,
          firstName: "Abirami",
          age: 23,
          qualification: "B.E",
          rating: 5,
          address:[
            {
              City:"Chennai",
              State:"Tamil Nadu"
            }
          ]
        },
        
      ],
      
    };

  }

  onSubmit = (model) => {
      alert("hi")
  }
  render(){

  
    return (
      <div className="App">
       
      <Home
       jsonData={this.state.data}
      
      />
  
      </div>
    );
  }
  
}


