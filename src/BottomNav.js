

class BottomNav extends React.Component {

    constructor(){
        super();
        this.homeRef=React.createRef();
        this.reelsRef=React.createRef();
        this.activityRef=React.createRef();
        this.profileRef=React.createRef();
    }
    render() {
        return (
            <div className="Nav">

                <div className="icon">Instagram</div>
                <div className="search"> <input type="text" placeholder="Search" id="s"></input></div>
                <div className="icons">
                    <button className="btns" onClick={()=> this.props.switchTab("Home",this.homeRef.current)} value="home" ref={this.homeRef} id="0"> <img src="./icons/instagram-home-icon-by-Vexels.png"></img> </button>
                    <button className="btns" onClick={()=> this.props.switchTab("Reels",this.reelsRef.current)} value="Reels" ref={this.reelsRef} id="1"> <img src="./icons/instagram-reels.png"></img> </button>
                    <button className="btns" onClick={() => this.props.switchTab("Activity",this.activityRef.current)} value="Activity" ref={this.activityRef} id="2"> <img src="./icons/heart-thin.png"></img> </button>
                    <button className="btns" onClick={()=> this.props.switchTab("Profile",this.profileRef.current)} value="Profile" ref={this.profileRef} id="3"> <img src="./icons/account.png"></img> </button>
                </div>
                
            </div>
        );
    }
}

