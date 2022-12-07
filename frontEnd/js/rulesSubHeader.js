
class RulesHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            char: "../images/pics/rules/charactercreation.png",
            combat: "../images/pics/rules/combat.png",
            items:"../images/pics/rules/items.png",
            talents:"../images/pics/rules/talents.png",
        }
        this.imgchange = this.imgchange.bind(this);
        this.mouseEvent = this.mouseEvent.bind(this);
    }


    imgchange(headerbutton,src){
        this.setState({[headerbutton]:src});
    }
    mouseEvent(headerbutton,src){
        return(
            <div onMouseDown = {()=>this.imgchange(headerbutton,"../images/pics/rules/" + src + 'dark.png')}
                 onMouseUp = {()=>this.imgchange(headerbutton,"../images/pics/rules/" + src + '.png')}
                 onMouseEnter={() => this.imgchange(headerbutton,"../images/pics/rules/" + src + 'light.png')}
                 onMouseLeave={() => this.imgchange(headerbutton,"../images/pics/rules/" + src + '.png')}>
                <img src={this.state[headerbutton]} className = 'image'/> </div>)
    }

    render() {
        return (
            <>
                <div className="centerHeader">
                <a href = "../rules/characterCreation.html">{this.mouseEvent("char", "charactercreation")}</a>
                <a href = "../rules/combat.html">{this.mouseEvent("combat", "combat")}</a>
                <a href = "../rules/items.html">{this.mouseEvent("items", "items")}</a>
                <a href = "../rules/talents.html">{this.mouseEvent("talents", "talents")}</a>
                </div>
            </>
        )
    }
}


const rulesHeader = ReactDOM.createRoot(document.getElementById('rulesHeader'));
rulesHeader.render(<RulesHeader />);

