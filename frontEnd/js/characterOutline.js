function NPCOutline(){

    let char = document.getElementById("NPCname").getAttribute("charName");

    const [NPC, setNPC] = React.useState({});

    const fetchNPC = async ()=>{
        try{
            const response = await axios.get("/api/npc/" + char)
            setNPC(response.data);
        }
        catch(error){
            setError("error retrieving npcs: " + error);
        }
    }


    //make a header var that takes in 5 headers? or maybe an array
    React.useEffect (()=>{
        fetchNPC();
    },[]);

    let refreash = ()=>{
        let iconHeader = '/images/pics/NPC/' + NPC.nameID + '.png';
        let headerOne = '/images/pics/NPC/' + NPC.nameID + 'Header1.png';
        let headerTwo = '/images/pics/NPC/' + NPC.nameID + 'Header2.png';
        let headerThree = '/images/pics/NPC/' + NPC.nameID + 'Header3.png';
        let headerFour = '/images/pics/NPC/' + NPC.nameID + 'Header4.png';
        let headerFive = '/images/pics/NPC/' + NPC.nameID + 'Header5.png';
        let headerSix = '/images/pics/NPC/' + NPC.nameID + 'Header6.png';
console.log(NPC.Full);

        return(
            <>
                     <img className="nameHeader" src = {iconHeader}/>
               <div className="clearSpace"></div>
                <img className="banner" src = {headerOne}/>
                <p>{NPC.Basic}</p>
                <img className="banner" src = {headerTwo}/>
                { }

                {/*{NPC.Full.map((paragraph) =>(*/}
                {/*    <p>{paragraph}</p>*/}
                {/*))}*/}
                {/*<img className="banner" src = {headerThree}/>*/}
                {/*<p>{NPC.Adventure}</p>*/}
                {/*<img className="banner" src = {headerFour}/>*/}
                {/*<p>{NPC.Outfit}</p>*/}
                {/*<img className="banner" src = {headerFive}/>*/}
                {/*<p>{NPC.More}</p>*/}
                {/*<img className="banner" src = {headerSix}/>*/}
                {/*<p>{NPC.Song}</p>*/}

            </>
        )
    }

    React.useEffect (()=>{
        refreash();
    },[NPC]);

    return(
        <>
            <p>{char}</p>
            {refreash()}
        </>
    )

}

const NPC = ReactDOM.createRoot(document.getElementById('myCharacter'));
NPC.render(<NPCOutline />);