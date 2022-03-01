

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="stories">
                    <button value="<" className="arrowbtns" id="btn1"> &lt; </button>
                    <div>
                        <div><img src="./src/prof1.jpg"></img> </div>
                        <p>_George</p>
                    </div>
                    <div>
                        <div><img src="./src/prof2.jpg"></img> </div>
                        <p>Mathew_Paul</p>
                    </div>
                    <div>
                        <div><img src="./src/prof3.jpg"></img> </div>
                        <p>Jerin_1083</p>
                    </div>
                    <div>
                        <div><img src="./src/prof4.jpg"></img> </div>
                        <p>mishelle_mariya</p>
                    </div>
                    <div>
                        <div><img src="./src/prof5.jpg"></img> </div>
                        <p>berlin.p.kurian</p>
                    </div>
                    <div>
                        <div><img src="./src/prof6.jpg"></img> </div>
                        <p>my_name_is_athul</p>
                    </div>
                    <div>
                        <div><img src="./src/prof7.jpg"></img> </div>
                        <p>kerivamakale</p>
                    </div>
                    <div>
                        <div><img src="./src/prog8.jpg"></img> </div>
                        <p>_simon_777</p>
                    </div>
                    <div>
                        <div><img src="./src/prof9.jpg"></img> </div>
                        <p>David_Beckham</p>
                    </div>

                    <button value=">" className="arrowbtns" id="btn2"> &gt;</button>
                    
                   

                </div>

                <div className="feed">

                    <div>
                        <section className="title">
                            <div className="left_title">
                                 <div className="round"><img src="./src/prof6.jpg"></img></div>
                                 <p>FC. Barcelona</p>
                            </div>
                            <div className="right_title"><img src="./src/more.png"></img></div>
                        </section>
                        <section className="imgctn"> <img src="./src/image1.jpg"></img> </section>
                        <section className="description">
                            <div className="icons">
                                <button className="btns_2"><img src="./src/heart-filled.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-comment.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-share.png"></img></button>
                            </div>

                            <button className="btns_2 margin-right increase_wh"><img src="./src/bookmark.png"></img></button>
                        </section>
                    </div>
                    <div>
                        <section className="title">
                            <div className="left_title">
                                 <div className="round"><img src="./src/prof6.jpg"></img></div>
                                 <p>Ryoji Iawata</p>
                            </div>
                            <div className="right_title"><img src="./src/more.png"></img></div>
                        </section>
                        <section className="imgctn"> <img src="./src/image2.jpg"></img> </section>
                        <section className="description">
                            <div className="icons">
                                <button className="btns_2"><img src="./src/heart-filled.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-comment.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-share.png"></img></button>
                            </div>

                            <button className="btns_2 margin-right increase_wh"><img src="./src/bookmark.png"></img></button>
                        </section>
                    </div>
                    <div>
                        <section className="title">
                            <div className="left_title">
                                 <div className="round"><img src="./src/prof6.jpg"></img></div>
                                 <p>OPPO</p>
                            </div>
                            <div className="right_title"><img src="./src/more.png"></img></div>
                        </section>
                        <section className="imgctn"> <img src="./src/image3.jpg"></img> </section>
                        <section className="description">
                            <div className="icons">
                                <button className="btns_2"><img src="./src/heart-filled.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-comment.png"></img></button>
                                <button className="btns_2"><img src="./src/instagram-share.png"></img></button>
                            </div>

                            <button className="btns_2 margin-right increase_wh"><img src="./src/bookmark.png"></img></button>
                        </section>
                    </div>
                   

                </div>
                
                
            </div>
        );
    }
}

