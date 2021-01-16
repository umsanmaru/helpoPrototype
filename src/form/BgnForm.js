import React, { Component } from 'react'; 
import utils from '../gitsrc/lib/utils';
import '../App.scss'

class BgnForm extends Component{

  render(){
    return (
      <div className="bgnForm">
      <h3 className="mb-4">자신의 수학실력을<br/>상/중/하 로 선택해주세요</h3>
      <h4>
          맞춤형 수업을 제공하기 위한 설문이니<br/>개개인의 기준으로 판단하면 됩니다.
      </h4>
        <div className="signup-form">
        <div className="form-group">
            <input type='radio' name='Section' value='top' />상
          </div>
          <div className="form-group">
            <input type='radio' name='Section' value='middle' />중
          </div>
          <div className="form-group">
            <input type='radio' name='Section' value='bottom' />하
          </div>
          <div className="form-group d-flex justify-content-end mt-4">
          </div>
      </div>
      </div>
    );
  }
  
}

export default BgnForm;


