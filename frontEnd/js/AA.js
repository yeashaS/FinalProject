
function AmazingArtists(){
    let colorClass = "coloredBackground";
    const [artists,setArtists] = React.useState([]);
    const finalId = [];
    const [error,setError] = React.useState("");

    const fetchList = async() => {
        try {
            const response = await axios.get("/api/artists");
            setArtists(response.data);
        } catch(error) {
            setError("error retrieving tickets: " + error);
        }
    }

    const setTotalId = () => {
        artists.map((counter) =>{
            finalId.push(counter.id);
        })
    }

    const setBackground = (artist)=>{
        if(artist.id % 2 === 1){
            colorClass ="empty";
        }
        else{
            colorClass="coloredBackground";
        }
    }

    const randomVal = ()=> Math.floor(Math.random() * finalId.length);

    React.useEffect (()=>{
        fetchList();
    },[]);


    const findFeaturedArtist =()=>{
        setTotalId();
        let random = randomVal();

        let fa = artists.find((art) => art.id === random);
        console.log(fa);

        if (fa == undefined){

        }
        else{
            return(
                <>
                    <>
                        <div className = "empty">
                            <img src = "images/pics/artist/FeaturedArtist.png" className="bannerMini"/>
                            <a href = {fa.link} target = "_blank">

                                <img className="banner" src = {fa.name} />
                                <div className="groupPicFlex">
                                    {fa.image.map( (imges) => (
                                        <img className="basicPoloridWithPadding" src ={imges}/>
                                    ))}
                                </div>
                            </a>
                        </div>
                    </>
                </>
            )
        }
    }

    return(
        <>


            {findFeaturedArtist()}
            <div className="coloredBackground">
                <img  className="banner" src = "../images/pics/artist/AmazingArtists.png" alt = "Amazing Artists"/>
                <p>Welcome to the Amazing Artist page! This page is to pay tribute to all the artists who have helped out with this project.
                    You can find links as well as examples of the art from all the artists who have contributed here! This page is updated regularly
                    when new art is added to the project.</p>
            </div>
            {artists.map((list)=>(
                <>
                    {setBackground(list)}

                    <div className = {colorClass}>
                        <a href = {list.link} target = "_blank">

                            <img className="banner" src = {list.name} />
                            <div className="groupPicFlex">
                                {list.image.map( (imges) => (
                                    <img className="basicPoloridWithPadding" src ={imges}/>
                                ))}
                            </div>
                        </a>
                    </div>
                </>
            ))}
        </>
    )
}

const amzingA = ReactDOM.createRoot(document.getElementById('amazing'));
amzingA.render(<AmazingArtists />);