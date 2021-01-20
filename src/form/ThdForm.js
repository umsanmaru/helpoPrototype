import React, { Component } from 'react'; 
import '../App.scss'
import graph from '../img/graph.jpg'
import { MathComponent } from 'mathjax-react'



class ThdForm extends Component{

  render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">문제 3</h3>
      <img src={graph} alt='graph' width="80%" height="30%"/>
      <h4 className="h4-question">x=1에서 좌극한과 우극한은 모두<br/>3이다.</h4>
        <div className="signup-form">
        <div className="form-group">
            <input type='radio' name='Section' value='t' />T
          </div>
          <div className="form-group">
            <input type='radio' name='Section' value='f' />F
          </div>
          <div className="form-group">
            <input type='radio' name='Section' value='n' />모르겠다
          </div>
          <div className="form-group d-flex justify-content-end mt-4">
          </div>
      </div>
      </div>
    );
  }
  
}

export default ThdForm;


