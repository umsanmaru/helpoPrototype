import EkoPlayer from '../gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from '../gitsrc/lib/utils';
import '../App.scss'

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
    
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_HTML";
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
      }
  render(){
    return (
      <div className="fstForm">
      <h3 className="mb-4">아래의 영상을 봐주세요</h3>
      </div>
    );
  }
  
}

export default FstForm;


