import EkoPlayer from '../gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from '../gitsrc/lib/utils';
import '../App.scss'
import graph from '../img/graph.jpg'
import { MathComponent } from 'mathjax-react'



class FstForm extends Component{
  render(){
        return (
          <div className="fstForm">
          <h3 className="mb-4">문제 4</h3>
          <img src={graph} alt='graph' width="300" height="200"/>
          <h4>f(x)는 x=1에서 미분가능하다</h4>
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

export default FstForm;


