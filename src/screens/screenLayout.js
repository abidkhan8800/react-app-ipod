import React from 'react';
import List from "./list";
import Games from "./games";
import Coverflow from "./coverflow";
import Settings from "./settings";
import Albums from "./albums";
import Artists from "./artists";
import Songs from "./music";


class ScreenLayout extends React.Component {

    render() {
        const {menuItems, showMenu, currentActiveIndex, musicMenu, currentComponent, currentSongIndex, setCurrentSongIndex} = this.props;
        return (
            <div style={styles.root}>
                {/* <div style={styles.listStyles}>
                
                </div> */}
                <div style={styles.mainScreen}>
                    { showMenu && <List menuItems={menuItems} currentActiveIndex={currentActiveIndex} musicMenu={musicMenu} showMenu={showMenu}/>}  
                    { currentComponent === "Coverflow" && <Coverflow/>}
                    { currentComponent === "Settings" && <Settings />}
                    { currentComponent === "Games" && <Games />}
                    { currentComponent === "Albums" && <Albums />}
                    { currentComponent === "Artists" && <Artists />}
                    { currentComponent === "All Songs" && <Songs currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}/>}
                </div>
            </div>
        )
    }
}

const styles = {
    root: {
        position: "relative",
        overflow: "hidden",
    },
    mainScreen: {
        width: "300px",
        height: "300px",
        backgroundColor: "white",
        border: "2px solid black",
        borderRadius: "5%",
        backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg)",
        overflow: "hidden",
    },
    listStyles:{
        position: "absolute",
        overflow: "hidden",
    }
}

export default ScreenLayout;