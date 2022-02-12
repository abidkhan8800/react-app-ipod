import React from 'react';

const Games = () =>{
    return (<div style={styles.gamesContainer}>
        <h1 style={styles.headerStyles}>Games</h1>
    </div>)
}


const styles={
    gamesContainer: {
        width: 300, 
        height:300,
        backgroundImage: "url(https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80)",
        backgroundSize: "cover",
        position: "absolute",
        borderRadius: "5%"
    },
    headerStyles: {
        paddingTop: "0.5em",
        textAlign: "center",
        color: "white"
    }
}
export default Games;