import MainArticle from "./MainArticle";

const FullPage=()=>{
  return(
    <div id="fullpage">
      <div className="section" id="section1">
        <div className="section-inner">
            <MainArticle />
            
        </div>
      </div>
      <div className="section" id="section2">
        <div className="section-inner">
          <div>
          </div>
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