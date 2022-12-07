
function Characters(){

    const [npc, setNpc] = React.useState([]);
    const [changeState,setChangeState] = React.useState(0);
    const [button, setButton] = React.useState("../images/pics/NPC/name.png");
    const [allNPCs,setAllNPCs] = React.useState([]);

    const [error,setError] = React.useState("");

    const fetchNPC = async ()=>{
        try{
            const response = await axios.get("/api/npc/name")
            setAllNPCs(response.data);
            setNpc(response.data);
        }
        catch(error){
            setError("error retrieving npcs: " + error);
        }

    }

    React.useEffect (()=>{
        fetchNPC();
        setNpc(allNPCs);
    },[]);

    React.useEffect (()=>{
        listNPC();

    },changeState);

    let DropDown = () => {
        event.preventDefault();
        document.getElementById('DD').classList.toggle("dropDownContentDisplayed");
    }


    function SortBySpecies(){
        npc.sort( function (a,b){
            const nameA = a.Species.toUpperCase();
            const nameB = b.Species.toUpperCase();

            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        })
        setChangeState(1);
        setButton("../images/pics/NPC/species.png");
        DropDown();
    }
    function SortByName(){
        npc.sort( function (a,b){
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        })
        setChangeState(2);
        setButton("../images/pics/NPC/name.png");
        DropDown();
    }

    function SortBySubspecies(){
        npc.sort( function (a,b){
            const nameA = a.Subspecies.toUpperCase();
            const nameB = b.Subspecies.toUpperCase();

            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        })
        setChangeState(3);
        setButton("../images/pics/NPC/subspecies.png");
        DropDown();
    }
    function SortByLocation(){
        npc.sort( function (a,b){
            const nameA = a.Location.toUpperCase();
            const nameB = b.Location.toUpperCase();

            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        })
        setChangeState(4);
        setButton("../images/pics/NPC/location.png");
        DropDown();
    }




    let sort = () =>{

        let a = 2;
        return(
            <>
                <img className="banner" src = "../images/pics/NPC/NPCs.png"/>

                <div className="formLeft">

                    <form>

                        <div className="dropDown">
                            <p>Sort by:</p>
                            <button onClick={DropDown}><img src = {button}/></button>

                            <div className="dropDownContent" id="DD">
                                <ul>
                                    <li onClick= {() =>{SortBySpecies()}}><img src = "../images/pics/NPC/species.png"/></li>
                                    <li onClick={() => {SortBySubspecies()}}><img src = "../images/pics/NPC/subspecies.png"/></li>
                                    <li onClick={() => {SortByName()}}><img src = "../images/pics/NPC/name.png"/></li>
                                    <li onClick={() => {SortByLocation()}}><img src = "../images/pics/NPC/location.png"/></li>
                                </ul>
                            </div>

                        </div>
                        {/*<input type = "text" name="sort" className="inputBox"></input>*/}
                    </form>
                </div>
            </>
        )
    }


    let listNPC = ()=>{

        return(
            <>
        {npc.map((image) =>(

                <div className="columnFlexCenter">
                    <a href = {image.Link}>
                    <img className="banner centerHeader" src={image.image}/>
                    </a>
                </div>
        ))}
            </>
        )
    }


    return(
        <>
            {sort()}
            {listNPC()}

       </>
    )
}

const NPC = ReactDOM.createRoot(document.getElementById('NPC'));
NPC.render(<Characters />);