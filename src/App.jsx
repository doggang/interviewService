import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import SubArticle from "./components/SubArticle";
import "./App.css";
function App(){

  //-----------------------애니메이션 라이브러리-----------------------//
  useEffect(() => {
    setTimeout(() => {
      if ($('#fullpage').length) {
        new window.fullpage('#fullpage', {
          autoScrolling: true,
          anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
          menu: '#pageMenu',
          afterLoad: function () {
            console.log("afterLoad!");
          }
        });

        $(".ani-03").each(function(){
          let text = this;
          text.innerHTML = text.textContent.replace(/\S/g, "<i>$&</i>");
          $(this).find("i").each(function(index){
            $(this).addClass("num" + index);
            let i = index / 14;
            $(this).css("animation-delay", (i + 0.8) + "s");
          });
        });
      }
    }, 0); // 또는 100~200ms delay를 줘도 됨
  }, []);
    //-----------------------애니메이션 라이브러리-----------------------//
  return (
  <div className="App">

<ul id="pageMenu">
      <li data-menuanchor="page1" className="active"><a href="#page1"><span>페이지1</span><i></i></a></li>
      <li data-menuanchor="page2"><a href="#page2"><span>페이지2</span><i></i></a></li>
      <li data-menuanchor="page3"><a href="#page3"><span>페이지3</span><i></i></a></li>
    </ul>

    <header className="header">
      <Header className="logo"/>
    </header>

    <div id="fullpage">
      <div className="section" id="section1">
        <div className="section-inner">
            <MainArticle />
        </div>
      </div>
      <div className="section" id="section2">
        <div className="section-inner">
          <div>
            <SubArticle />
          </div>
        </div>
      </div>
      
      <div className="section fp-auto-height" id="section6">
        <div className="section-inner">
          푸터
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;