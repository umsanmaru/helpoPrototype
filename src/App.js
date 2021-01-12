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

class App extends Component{
  constructor(props) {
    super(props);
    this.ekoPlayer = new EkoPlayer('#ekoContainer');
    this.checkResult = '';
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
        <body>
          <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
              <a class="navbar-brand" href="index.html"><span>HELPO</span></a>
            </div>
          </nav>
          <section class="hero-wrap js-fullheight">
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
                <div class="col-md-7 ftco-animate">
                  <span class="subheading">Welcome to HELPO</span>
                  <h1 class="mb-4">인터랙티브 강의<br/>사용후기를 들려주세요!</h1>
                  <p class="caps">HELPO는 정적인 인터넷강의의 형태에서 벗어나 학생의 학습과정 데이터를 실시간으로 반영하여 맞춤형 수업을 제공합니다</p>
                  <p class="mb-0"><button href="#" class="btn btn-primary">강의 후기</button></p>
                </div>
              </div>
            </div>
            </section>
          <section className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
              <div className="row">
                  <div className="col-md-7"></div>
                  <div className="col-md-5 order-md-last">
                  <div className="login-wrap p-4 p-md-5">
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
                            <button onClick = {this.load(this.ekoPlayer)} 
                            className="btn btn-primary submit">제출하기</button>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        </div>
        </section>
          <div id="myContainer" className="eko-player"></div>
          <div id='result'></div>
          <div>
            <div id="ekoContainer" className="eko-player">
            </div>
            <div id="ekoLoadingCover" className="eko-cover eko-player">
            </div>
          </div>
        </body>
        <footer>
          <h3>Contact</h3>
          <h4>treviewofficial@gmail.com</h4>
        </footer>
        
      </div>
    );
  }
  
}

export default App;
