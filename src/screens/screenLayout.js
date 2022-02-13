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
        const {menuItems, showMenu, currentActiveIndex, musicMenu, currentComponent, currentSongIndex, setCurrentSongIndex, isSongPlaying} = this.props;
        return (
            <div className="base">
                <div className="baseScreenStyles">
                    { showMenu && <List menuItems={menuItems} currentActiveIndex={currentActiveIndex} musicMenu={musicMenu} showMenu={showMenu}/>}  
                    { currentComponent === "Coverflow" && <Coverflow/>}
                    { currentComponent === "Settings" && <Settings />}
                    { currentComponent === "Games" && <Games />}
                    { currentComponent === "Albums" && <Albums />}
                    { currentComponent === "Artists" && <Artists />}
                    { currentComponent === "All Songs" && <Songs currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} isSongPlaying={isSongPlaying}/>}
                </div>
            </div>
        )
    }
}

export default ScreenLayout;