import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

class Class extends React.Component {
  constructor(){
    super();
    this.state={
      functionClick:false,
      classClick:false
    }
  }
  render()
  {
    return(
    
      <div className='App'>
        <h1 className='topheading'>Styling Using Functional and Class Component</h1>
        <div>
        <button onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To see Styling in functional component</button>
        <button onClick={()=>this.setState({classClick:!this.state.classClick})}>To see Styling in class component</button>
        </div>
        <div className='Box' >
  
            {this.state.classClick && <ClassComp/>}
            {this.state.functionClick && <FuncComp/>} 
       </div>
      </div>
    )
  }
}
export default Class

