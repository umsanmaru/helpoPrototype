import EkoPlayer from './gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from './gitsrc/lib/utils';

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
  document.getElementById('result').innerText
    = result;
  console.log(result);
}

function getCheckboxResult()  {
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
  return result;
}

class App extends Component{
  constructor(props) {
    super(props);
    this.ekoPlayer = new EkoPlayer('#ekoContainer');
  }
  
  load(player){
      return function(){ 
        console.log(getCheckboxResult());
        player.load('VyYlR0', {
        params: {
          autoplay: false,
          clearcheckpoints: true,
          debug: true
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
    /* this.test = "mytest";
    console.log(this.test);
    this.ekoPlayer = new EkoPlayer('#ekoContainer');
    const load = function(player){
        player.load('VyYlR0', {
          params: {
              autoplay: false,
              clearcheckpoints: true,
              debug: true
          },
          events: ['nodestart', 'nodeend', 'playing', 'pause'],
          cover: '#myCoverId',
          iframeAttributes: { title: 'My Eko Player' }
      });
    } */
    return (
      <div className="App">
        Check every section that you want to participate in!
        <ul>
          <li>
            <input type='checkbox'
                  name='Section' 
                  value='1' /> Section1
          </li>
          <li>
            <input type= 'checkbox' 
                  name='Section' 
                  value='2' /> Section2
          </li>
        </ul>
        <button onClick = {getCheckboxValue}>확인</button>
        <div id="myContainer" className="eko-player"></div>
        <div id='result'></div>
        <div>
          <button onClick={this.load(this.ekoPlayer)}>Load</button><br/><br/>
        </div>
        <div>
          <div id="ekoContainer" className="eko-player">
          </div>
          <div id="ekoLoadingCover" className="eko-cover eko-player">
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
