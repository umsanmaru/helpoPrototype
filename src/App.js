import EkoPlayer from './gitsrc/EkoPlayer.js';
import React, { Component } from 'react'; 
import utils from './gitsrc/lib/utils';
import './App.scss';
import FstForm from './form/FstForm.js';
import SecForm from './form/SecForm.js';
import ThdForm from './form/ThdForm.js';
import FthForm from './form/FthForm.js';
import LastForm2 from './form/LastForm2.js';
import BgnForm from './form/BgnForm.js';

const databaseURL = "https://eko-test-5fa72-default-rtdb.firebaseio.com";
const ans = ['f', 't', 'f', 'f'];
const data = ['B'];

class App extends Component{
  constructor(props) {
    super(props);
    this.ekoPlayer = new EkoPlayer('#ekoContainer');
    this.checkResult = '';
    this.selectedGrade = '';
    this.quizscore = 0;
    this.state = {
      count: 0,
      post: ""
    }
    this.increment = ()=>{
      var checked = this.getCheckboxValue()
      if(checked){
        var temp = this.state.count;
        this.setState({count:temp+1})
      }
      else{ //nothing checked => alert!
        alert("답변을 체크해주세요");
      }      
    }

    this.post = (word) => {
      return fetch(`${databaseURL}/questions.json`, {
          method: 'POST',
          body: JSON.stringify(word)
  
      }).then(res => {
          if(res.status != 200){
              throw new Error(res.statusText);
          }
          return res.json();
      }).then(data => {
          this.setState({post: "done"});
          return(data.name);
      });
      
    }

    this.getCheckboxValue = ()=>{

      // 선택된 목록 가져오기
      console.log(this.state.count);
      const query = 'input[name="Section"]';
      const query2 = 'input[name="Section"]:checked'
      const inputEls = 
          document.querySelectorAll(query);
      var checkedInputEls = 
          document.querySelectorAll(query2);
      checkedInputEls = Array.from(checkedInputEls);
      if(checkedInputEls.length==0){
        console.log("nothing checked");
        return 0;
      }
      else{
        // 선택된 목록에서 value 찾기
        //
        let result = '';
        inputEls.forEach((el, i) => {
          if(checkedInputEls.includes(el)){
            if(el.value == 'top'){
              this.selectedGrade = 'A';
            }
            else if(el.value == 'middle'){
              this.selectedGrade = 'B';
            }
            else if(el.value == 'bottom'){
              this.selectedGrade = 'C';
            }
            else if(el.value == 'n'){
              result += this.state.count + ':' + 'N' + ' ';
            }
            else if(ans[this.state.count-1] == el.value){
              result += this.state.count + ':' + 'O' + ' ';
              this.quizscore += 6;
            }
            else{
              result += this.state.count + ':' + 'X' + ' ';
              this.quizscore -= 8;
            }
          }
            
          
          // var j = i + 1;
          // if(checkedInputEls.includes(el))
          //   result += this.state.count + '-' + j + ':' + el.value + ' ';
          // else
          //   result += this.state.count + '-' + j + ':' + "x" + ' ';
          
          
          });
        
        // 출력
        /* document.getElementById('result').innerText
          = result; */
        this.checkResult = this.checkResult + result;
        return 1;
      }
    }

    this.getGrade = () =>{
      var score = 0;
      var grade = '';
      if(this.selectedGrade == 'A'){
        score = 60;
      }
      else if(this.selectedGrade == 'B'){
        score = 50;
      }
      else if(this.selectedGrade == 'C'){
        score = 40;
      }
      score += this.quizscore;

      if(score >= 60)
        grade = 'A';
      else if(score >= 50)
        grade = 'B';
      else 
        grade = 'C';
      
      return grade;
    }

    this.load = (player, getCheckboxValue)=>{
      
      var data0 = {
      };
      var theobj = this;
      return function(){ 
          var checked = getCheckboxValue();
          data0["quiz"] = theobj.checkResult;
          data0["selectedGrade"] = theobj.selectedGrade;
          var _grade = theobj.getGrade();
          data0['grade'] = _grade;
          theobj.post(data0).then((id) => {
            if(checked){
              var temp = theobj.state.count;
              theobj.setState({count:temp+1})
              player.load('VXdBxb', {
              params: {
                autoplay: false,
                clearcheckpoints: true,
                debug: false,
                result : theobj.checkResult,
                grade: _grade,
                autoplay : true,
                id: id
              },
              events: ['nodestart', 'nodeend', 'playing', 'pause'],
              iframeAttributes: { title: 'My Eko Player' }
              });
              window.scrollTo({
                top: 1000,
                left: 0,
                behavior: 'smooth'
              });
            }
            else{ //nothing checked => alert!
              alert("Section을 하나 이상 체크해주세요");
            }     
          })
      }
    }
  }
  componentDidMount(){
    utils.getContainer('#ekoContainer').appendChild(this.ekoPlayer.iframe);
  }
  

  render(){
    var filter = "win16|win32|win64|mac|macintel";
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      console.log("mobile");
      
      //MOBILE        
    }else {
      document.getElementById("styleTag").href="MoileApp.scss";
      console.log("pc");
    //PC                                                                 
    }
    var guidemsg= <div></div>;
    if(this.state.count==0){
      var element = <BgnForm/>;
      var button = <button onClick = {this.increment} className="btn btn-primary submit">다음</button>;
    }
    if(this.state.count == 1){
      var element = <FstForm/>;
      var button = <button onClick = {this.increment} className="btn btn-primary submit">다음</button>;
    }
    if(this.state.count == 2){
      var element = <SecForm></SecForm>;
      var button  = <button onClick = {this.increment} className="btn btn-primary submit">다음</button>;
    }
    if(this.state.count==3){
      var element = <ThdForm></ThdForm>;
      var button  = <button onClick = {this.increment} className="btn btn-primary submit">다음</button>;
    }
    if(this.state.count==4){
      var element = <FthForm></FthForm>;
      var button  = <button onClick = {this.load(this.ekoPlayer, this.getCheckboxValue)} className="btn btn-primary submit">제출하기</button>;
    }
    // if(this.state.count == 5){
    //   var element = <LastForm></LastForm>
    //   var button  = <button onClick = {this.load(this.ekoPlayer, this.getCheckboxValue)} className="btn btn-primary submit">제출하기</button>;
    //   guidemsg = <div className = "text-center">제출하기 버튼을 누르면<br/>👇아래👇 맞춤형 영상이 생성됩니다!</div>
    // }
    if(this.state.count == 5){
      var element = <LastForm2></LastForm2>;
      var button = <div></div>;
    }
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
            <div className="container2">
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5 order-md-last">
                  <div className="login-wrap p-4 p-md-5">
                    {element}{guidemsg}{button}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="myContainer" className="eko-player"></div>
          <div id='result'></div>
          <div>
            <div id="ekoContainer" className="eko-player"></div>
            <div id="ekoLoadingCover" className="eko-cover eko-player"></div>
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
