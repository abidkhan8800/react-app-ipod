import React from 'react';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import songsDetails from '../songsDetails'; // object containing details about the songs

class Music extends React.Component{
    constructor(props) {
        super();
        this.state = {
            products: [],
            loader: true,
            songs: [], 
        }
        this.index = 0;
    }
    // move to next song whne one song finishes
    handleSongEnded = () =>{
        if(this.index === songsDetails.length - 1){
            this.index = 0;
        }
        this.index++;
        this.props.setCurrentSongIndex(this.index);
    }

    // handing the play pause of the song
    handlePlayPauseClick(e){
        if(e){
            if(!this.props.isSongPlaying){
                e.pause();
            }else{
                e.play();
            }
        }
    }

    render(){
        const audios = songsDetails;
        this.index = this.props.currentSongIndex;
        return (<div className="commonScreenStyles">
            <h1 className="commonHeaderStyles" style={styles.headerStyles}>All Songs</h1>
            {/* Displaying all the songs */}
            { audios &&
              <div className="songsContainer">
                {audios.map((song, index)=>{
                  return <div className={index === this.index ? "activeSongUpdate selectedSongStyles" : "songStyle"} key={index}>
                    <AudiotrackIcon />
                    <span >{song.name}</span>
                  </div>
                })}
              </div>}
              {/* Music Player controls */}
              <div className="musicPlayer">
                  <audio src={songsDetails[this.index].url} controls autoPlay onEnded={()=>{this.handleSongEnded()}}  ref={(element) => {this.handlePlayPauseClick(element)}}/>
              </div>
        </div>)
    }
}
const styles={
    headerStyles: {
        color: "black",
        margin: 0,
        padding: "12px 0"
    }
}
export default Music;