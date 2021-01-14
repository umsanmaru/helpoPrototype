import React, { Component } from 'react'; 
import './App.scss';


class ThdForm extends Component{
  

  render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">Third Form</h3>
        <div className="signup-form">
          <div className="form-group">
            <input type='checkbox'  name='Section'  value='1' /> Section1
          </div>
          <div className="form-group">
            <input type= 'checkbox' name='Section'  value='2' /> Section2
          </div>
          <div className="form-group">
            <input type= 'checkbox' name='Section'  value='3' /> Section3
          </div>
          <div className="form-group">
            <input type= 'checkbox' name='Section'  value='4' /> Section4
          </div>
          <div className="form-group d-flex justify-content-end mt-4">
            <p className="text-center">제출하기 버튼을 누르고<br/>아래 영상을 시청해주세요</p>
          </div>
      </div>
      </div>
    );
  }
  
}

export default ThdForm;


