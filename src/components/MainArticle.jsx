import "./MainArticle.css";import SubArticle from "./SubArticle";

const mainArticle=()=>{
  return(
    <div className="MainArticle">
      <div className="mainArticleWrap">
        <div className="mainTitle">
          <div className="mainTitle ani-01" >Prepare for your<br/> front-end job<br/> interview</div>
          <div className="subTitle ani-02">Practice answering personalized questions<br /> to boost your interview skills</div>
          <button className="startBtn ani-02">Start Practice</button>
        </div>
        <div className="mainImg ani-01"></div>
      </div>
      <SubArticle />
    </div>
    
  );
}

export default mainArticle;