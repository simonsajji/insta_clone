
class Profile extends React.Component {
    render() {
        return (
            <>
                <div className="Profile">

                    <section className="section1">
                        <div className="imgctn"> <img src="./src/leo3.jpg"></img> </div>
                    </section>
                    <section className="section2">

                        <div className="div1">
                            <h2>_simon_777</h2>
                            <button>Edit Profile</button>
                            
                        </div>
                        <div className="div2">
                            <p>12 <span>posts</span></p>
                            <p>789 <span>following</span></p>
                            <p>602 <span>followers</span></p>

                        </div>
                        <div className="div3">

                            <p>Artist</p>

                        </div>
                    </section>
                    
                    
                </div>

                <hr/>

                <div className="posts">

                    <img src="./src/image1.jpg"></img>
                    <img src="./src/image2.jpg"></img>
                    <img src="./src/image3.jpg"></img>
                    <img src="./src/image4.jpg"></img>
                    <img src="./src/image5.jpg"></img>
                    <img src="./src/image6.jpg"></img>
                    <img src="./src/image7.jpg"></img>
                    <img src="./src/image8.jpg"></img>
                    <img src="./src/image9.jpg"></img>

                </div>



            </>
        );
    }
}

