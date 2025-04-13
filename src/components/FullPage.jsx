import MainArticle from "./MainArticle";
import "./FullPage.css";
const FullPage=()=>{
  return(
    <div id="fullpage">
      <div className="section" id="section1">
        <div className="section-inner">
            <MainArticle />
        </div>
      </div>
      <div className="section" id="section2">
      <div className="profileSetupImg ani-02"></div>
        <div className="section-inner ani-02" id="sectionProfile">
          <div className="profileSetup ">
              <div className="profiletSetupWrap">
              <div className="profileSetupTitle">Profile Setup</div>
                <label for="inputName">이름</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 김도현"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">나이</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 25"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">지원 직무</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 프론트엔드 개발자"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">관심 산업 분야</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) IT"/>
              </div>
                <div className="profiletSetupWrap">
                <label for="inputName">보유 자격증 또는 기술</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 정보처리기사, REACT"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">경력</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 신입"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">지원 예정 또는 희망 기업</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) 삼성"/>
              </div>
              <div className="profiletSetupWrap">
                <label for="inputName">현재 학습 분야</label><br />
                <input id="inputName" className="profileSetupInput" type="text" placeholder="ex) typescript"/>
              </div>
          </div>
          <button className="saveBtn ani-02">저장하기</button>

        </div>
      </div>
      
      <div className="section fp-auto-height" id="section6">
        <div className="section-inner">
          푸터
        </div>
      </div>
    </div>
  )
}
export default FullPage;