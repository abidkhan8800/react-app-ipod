import React from 'react';
import List from "./list";
import Games from "./games";
import Coverflow from "./coverflow";
import Settings from "./settings";
import Albums from "./albums";
import Artists from "./artists";
import Songs from "./allSongs";


class ScreenLayout extends React.Component {
    // common layout choosing which component to show
    render() {
        const {showMenu, currentIndex, musicMenu, currentComponent, currentSongIndex, isSongPlaying, currentList} = this.props.props;
        const {setCurrentSongIndex} = this.props;
        return (
            <div className="base">
                <div className="baseScreenStyles">
                    { showMenu && <List menuItems={currentList} currentActiveIndex={currentIndex} musicMenu={musicMenu} showMenu={showMenu}/>}  
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