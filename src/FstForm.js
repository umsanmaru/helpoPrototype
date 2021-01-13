import EkoPlayer from './gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from './gitsrc/lib/utils';
import './App.scss';

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
  constructor(props) {
    super(props);
    this.ekoPlayer = new EkoPlayer('#ekoContainer');
    this.checkResult = '';
    this.state = {
      count: 1,
    }
  }
  
  load(player){
      return function(){ 
        var checkboxvalue = getCheckboxValue();
        console.log("check");
        console.log(checkboxvalue);
        player.load('VyYlR0', {
        params: {
          autoplay: false,
          clearcheckpoints: true,
          debug: false,
          result : checkboxvalue
        },
        events: ['nodestart', 'nodeend', 'playing', 'pause'],
        iframeAttributes: { title: 'My Eko Player' }
      });
    
    }
     
  }


  
  componentDidMount(){
    utils.getContainer('#ekoContainer').appendChild(this.ekoPlayer.iframe);
    
  }
  

  render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">원하는 수업을 모두 선택해주세요</h3>
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
            <input type= 'checkbox' name='Section'  value='3' /> Section4
          </div>
          <div className="form-group d-flex justify-content-end mt-4">
            <p className="text-center">제출하기 버튼을 누르고<br/>아래 영상을 시청해주세요</p>
          </div>
      </div>
      </div>
    );
  }
  
}

export default FstForm;


