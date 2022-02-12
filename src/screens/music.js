import React from 'react';
import axios from 'axios';

class Music extends React.Component{
    constructor() {
        super();
        this.state = {
            products: [],
            loader: true,
            songs: []
        }
    }
    componentDidMount() {
    }
    render(){
        let songs = this.state.songs;
        let loader = this.state.loader;
        return (<div style={styles.gamesContainer}>
            <h1 style={styles.headerStyles}>All Songs</h1>
            {/* {<h2 style={{position: "absolute", paddingLeft: "10px"}}>Please wait loading songs...</h2>} */}
            { songs && 
              <div style={styles.songsContainer}>
                {songs.map((song, index)=>{
                  return <div style={styles.songStyle} key={index}>
                    <img style={styles.imageStyle} src={song.images.coverart}/>
                    <span>{song.title}</span>
                    {/* <audio controls muted>
                      <source src={song.hub.actions[1].uri}/>
                    </audio> */}
                  </div>
                })}
              </div>}
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
        color: "white",
        margin: 0,
        padding: "2px"
    },
    songsContainer: {
        overflow: "scroll",
        paddingLeft: "20px",
        height: "250px"
    },
    songStyle: {
        display: "flex",
        alignItems: "center",
        padding: "1px 0"
    },
    imageStyle: {
        width: 40, 
        height: 40, 
        borderRadius: "50%", 
        marginRight: "20px"
    }
}
export default Music;