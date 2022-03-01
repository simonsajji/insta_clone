


class App extends React.Component {

    constructor(){
        super();
        this.state={
            currentTab: "Home",
            
        }

    }

    changeTab=(newTabName,elem)=>{

        let btns=document.getElementsByClassName(elem.className);

        console.log(elem.id)
        for(let i=0;i<elem.className.length;i++){
            if(i==elem.id){
                elem.style.borderBottom="0.15rem solid rgba(31, 30, 30, 0.5)";
            }
            else{
                btns[i].style.border="0";
            }

        }
        

        this.setState({

            currentTab : newTabName,

        })



    }

    renderComponent=()=>{

        switch(this.state.currentTab){
            case 'Home':

                return <Home />

            case 'Reels':
                return <Reels />

            case 'Profile':
                return <Profile/>

            case 'Activity':
                return <Activity />
            

        }

        

    }
    render() {
        return (
            <>

                <BottomNav switchTab = {this.changeTab} />
                {this.renderComponent()}

                
            </>
        );
    }
}

