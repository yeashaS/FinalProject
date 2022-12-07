
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rules: "/images/pics/headerAndFooter/headerbuttons1.png",
            lore: "/images/pics/headerAndFooter/headerbuttons2.png",
            myPack:"/images/pics/headerAndFooter/headerbuttons3.png",
            shop:"/images/pics/headerAndFooter/headerbuttons4.png",
        }
        this.imgchange = this.imgchange.bind(this);
        this.mouseEvent = this.mouseEvent.bind(this);
    }


    imgchange(headerbutton,src){
        this.setState({[headerbutton]:src});
    }
    mouseEvent(headerbutton,src){
        return(
            <div onMouseDown = {()=>this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + 'dark.png')}
                 onMouseUp = {()=>this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + '.png')}
                 onMouseEnter={() => this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + 'light.png')}
                 onMouseLeave={() => this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + '.png')}>
                <img src={this.state[headerbutton]} className = 'image'/> </div>)
    }

    //key variables need to be variables as it assumes its a string
    render() {
        return(

            <>
                <nav>
                    <div className= 'upperHeader'>
                        <a href = "/"><img className = 'headerImg' src = "/images/pics/headerAndFooter/header.png"/></a>
                        <ul>
                            <div className = 'centerHeader'>
                                <li className= 'header'>
                                    <a href = "/rules.html"> {this.mouseEvent("rules", "headerbuttons1")}</a>
                                </li>
                                <li className= 'header'>
                                    <a href = "/lore.html">
                                    {this.mouseEvent("lore", "headerbuttons2")}
                                    </a>
                                </li>
                                <li className= 'header'>
                                    <a href="/myPack.html">
                                        {this.mouseEvent("myPack", "headerbuttons3")}
                                    </a>
                                </li>
                                <li className= 'header'>
                                    <a href ="/shop.html">
                                        {this.mouseEvent("shop", "headerbuttons4")}
                                    </a>
                                </li>

                            </div>
                        </ul>
                    </div>
                </nav>

            </>
        )
    }
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discord: "/images/pics/headerAndFooter/discordIcon.png",
            aA: "/images/pics/headerAndFooter/AAicon.png",
            patreon:"/images/pics/headerAndFooter/patreonLogo.png",
        }
        this.imgchange = this.imgchange.bind(this);
        this.mouseEvent = this.mouseEvent.bind(this);
    }


    imgchange(headerbutton,src){
        this.setState({[headerbutton]:src});
    }
    mouseEvent(headerbutton,src){
        return(
            <div onMouseDown = {()=>this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + 'dark.png')}
                 onMouseUp = {()=>this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + '.png')}
                 onMouseEnter={() => this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + 'light.png')}
                 onMouseLeave={() => this.imgchange(headerbutton,"/images/pics/headerAndFooter/" + src + '.png')}>
                <img src={this.state[headerbutton]} className = 'image'/> </div>)
    }

    render() {
        return (
            <>
                <div className="footerContainer spaceBetweenFlex">
                    <div className="rightFlexbox">
                        <a href = "https://discord.gg/A8c8Mq5mYm" target = "_blank"><div className="footerButtons">{this.mouseEvent("discord", "discordIcon")}</div> </a>
                        <a href = "https://www.patreon.com/yeeshastone?fan_landing=true&view_as=public" target = "_blank"><div className="footerButtons">{this.mouseEvent("patreon", "patreonLogo")}</div></a>
                    </div>
                   <a href = "/aa.html"> <div className="footerButtons"> {this.mouseEvent("aA", "AAicon")}</div></a>
                </div>
            </>
        )
    }
}

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(<Footer />);

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(<Header />);