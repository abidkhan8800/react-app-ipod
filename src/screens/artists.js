import React from 'react';

const Artists = () =>{
    return (<div style={styles.gamesContainer}>
        <h1 style={styles.headerStyles}>Artists</h1>
    </div>)
}


const styles={
    gamesContainer: {
        position: "absolute",
        width: 300, 
        height:300,
        backgroundColor: "black",
        borderRadius: "5%"
    },
    headerStyles: {
        paddingTop: "0.5em",
        textAlign: "center",
        color: "white"
    }
}
export default Artists;