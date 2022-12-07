class LoreHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            species: "../images/pics/lore/species.png",
            locations: "../images/pics/lore/locations.png",
            characters:"../images/pics/lore/characters.png",
            oneshot:"../images/pics/lore/oneshot.png",
        }
        this.imgchange = this.imgchange.bind(this);
        this.mouseEvent = this.mouseEvent.bind(this);
    }


    imgchange(headerbutton,src){
        this.setState({[headerbutton]:src});
    }
    mouseEvent(headerbutton,src){
        return(
            <div onMouseDown = {()=>this.imgchange(headerbutton,"../images/pics/lore/" + src + 'dark.png')}
                 onMouseUp = {()=>this.imgchange(headerbutton,"../images/pics/lore/" + src + '.png')}
                 onMouseEnter={() => this.imgchange(headerbutton,"../images/pics/lore/" + src + 'light.png')}
                 onMouseLeave={() => this.imgchange(headerbutton,"../images/pics/lore/" + src + '.png')}>
                <img src={this.state[headerbutton]} className = 'image'/> </div>)
    }

    render() {
        return (
            <>
                <div className="centerHeader">
                    <a href = "../lore/species.html">{this.mouseEvent("species", "species")}</a>
                    <a href = "../lore/locations.html">{this.mouseEvent("locations", "locations")}</a>
                    <a href = "../lore/characters.html">{this.mouseEvent("characters", "characters")}</a>
                    <a href = "../lore/oneShots.html">{this.mouseEvent("oneshot", "oneshot")}</a>
                </div>
            </>
        )
    }
}


const loreHeader = ReactDOM.createRoot(document.getElementById('loreHeader'));
loreHeader.render(<LoreHeader />);
