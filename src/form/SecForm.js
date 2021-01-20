import EkoPlayer from '../gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from '../gitsrc/lib/utils';
import '../App.scss'
import { MathComponent } from 'mathjax-react'

function getCheckboxValue()  {
  // 선택된 목록 가져오기
  const query = 'input[name="Section"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  });
  
  // 출력
  /* document.getElementById('result').innerText
    = result; */
  console.log(result);
  return result;
}


class FstForm extends Component{
    render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">문제 2</h3>
      <h4> <MathComponent tex={String.raw`y=x^2+x-2`} display={false}/>의 <MathComponent tex={String.raw`x=5`} display={false}/>에서의 접선의 기울기는 11이다.</h4>
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


