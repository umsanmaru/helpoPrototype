import EkoPlayer from '../gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from '../gitsrc/lib/utils';
import '../App.scss'
import { MathComponent } from 'mathjax-react'

class FstForm extends Component{

  render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">문제 1</h3>
      <h4><MathComponent tex={String.raw`y= x^2+x-2`} display ={false}/> 함수의 x=1 부터 x=7까지 평균변화율은 11이다</h4>
        <div className="signup-form">
        <div className="form-group">
            <input type='radio' name='Section' value='t'/>T
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


