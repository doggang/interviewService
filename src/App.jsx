import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FullPage from "./components/FullPage";
import Aside from "./components/Aside";

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
    
    <Aside />

    <Header />

    <FullPage />
    
  </div>
  );
}

export default App;