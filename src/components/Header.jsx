import "./Header.css";

const Header = ()=>{
    return(
        <div>
            <div className="HeaderUp"></div>
            <div className="Header">
                <div className="HeaderImg"/>
                <div className="HeaderContentWrap">
                    <div>Home</div>
                    <div>Profile</div>
                    <div>Interview</div>
                    <div>Questions</div>
                    <div>History</div>
                </div>
            </div>
        </div>
    )
}

export default Header;