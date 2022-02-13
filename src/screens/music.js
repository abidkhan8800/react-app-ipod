import React from 'react';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import songsDetails from '../songsDetails';
import ReactAudioPlayer from 'react-audio-player';
import './music.css'
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
    
    handleSongEnded = () =>{
        if(this.index == songsDetails.length - 1){
            this.index = 0;
        }
        this.index++;
        this.props.setCurrentSongIndex(this.index);
    }

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
        let songState = this.props.isSongPlaying;
        // let selectedClass = (index === this.index ? "selectedlistItem": "songStyle")
        // console.log(selectedClass)
        return (<div style={styles.gamesContainer}>
            <h1 style={styles.headerStyles}>All Songs</h1>
            { audios && 
              <div style={styles.songsContainer}>
                {audios.map((song, index)=>{
                  return <div className={index === this.index ? "activeSongUpdate" : ""} style={index === this.index ? styles.selectedlistItem : styles.songStyle} key={index}>
                    <AudiotrackIcon />
                    <span >{song.name}</span>
                  </div>
                })}
              </div>}
              <div style={styles.musicPlayer}>
                  <audio src={songsDetails[this.index].url} controls autoPlay onEnded={()=>{this.handleSongEnded()}}  ref={(element) => {this.handlePlayPauseClick(element)}}/>
              </div>
        </div>)
    }
}
const styles={
    gamesContainer: {
        width: 300, 
        height:300,
        position: "absolute",
        borderRadius: "5%",
    },
    headerStyles: {
        textAlign: "center",
        color: "black",
        margin: 0,
        padding: "2px"
    },
    songsContainer: {
        overflow: "scroll",
        paddingLeft: "0px 10px",
        height: "250px"
    },
    songStyle: {
        display: "flex",
        alignItems: "center",
        padding: "1px 0",
        borderBottom: "1px solid white"
    },
    imageStyle: {
        width: 30, 
        height: 30, 
        borderRadius: "50%", 
        marginRight: "20px"
    },
    musicPlayer: {
        position: "absolute",
        bottom: 0
    },
    selectedlistItem: {
        display: "flex",
        alignItems: "center",
        padding: "1px 0",
        borderBottom: "1px solid white",
        backgroundColor: "skyblue"
    }
}
export default Music;