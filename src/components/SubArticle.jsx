import "./SubArticle.css";
const SubArticle=()=>{
    return(
        <div className="ani-02">
            <div className="subArticleWrap">
                <div className="subArticleContainer">
                    <div className="subArticleImg" id="profile"/>
                    <div className="subArticleMainWrap">
                        <div className="subArticleMain">Enter Your Profile</div>
                        <div className="subArticleSub">Provide basic information<br />to generate tallored questions</div>
                    </div>
                </div>

                <div className="subArticleContainer">
                    <div className="subArticleImg" id="simulate" />
                    <div className="subArticleMainWrap">
                        <div className="subArticleMain">Simulate Interview</div>
                        <div className="subArticleSub">Answer AI-generated<br />questions with timer</div>
                    </div>
                </div>
            </div>
            
            <div className="subArticleWrap">
                <div className="subArticleContainer">
                    <div className="subArticleImg" id="manage"/>
                    <div className="subArticleMainWrap">
                        <div className="subArticleMain">Manage Questions</div>
                        <div className="subArticleSub">Add, edit, bookmart,<br />or search qeustions</div>
                    </div>
                </div>

                <div className="subArticleContainer">
                    <div className="subArticleImg" id="review"/>
                    <div className="subArticleMainWrap">
                        <div className="subArticleMain">Review History</div>
                        <div className="subArticleSub">Track your past interview<br />sessions and progress</div>
                    </div>
                </div>
            </div>
        </div>

            
    )
}

export default SubArticle;