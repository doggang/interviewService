import "./Header.css";

const Header = ()=>{
    return(
        <div className="header">
            <div className="Header logo">
                <div className="HeaderImg"/>
                <div className="HeaderContentWrap">
                    <a href="#page1">Home</a>
                    <a href="#page">Profile</a>
                    <a href="#page">Interview</a>
                    <a href="#page">Questions</a>
                    <a href="#page">History</a>
                </div>
            </div>
        </div>
    )
}

export default Header;