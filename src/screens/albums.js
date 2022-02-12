import React from 'react';

const Albums = () =>{
    return (<div style={styles.gamesContainer}>
        <h1 style={styles.headerStyles}>Albums</h1>
    </div>)
}


const styles={
    gamesContainer: {
        width: 300, 
        height:300,
        backgroundColor: "black",
        position: "absolute",
        borderRadius: "5%"
    },
    headerStyles: {
        paddingTop: "0.5em",
        textAlign: "center",
        color: "white"
    }
}
export default Albums;