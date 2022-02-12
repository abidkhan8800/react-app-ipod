import React from 'react';

const Coverflow = () =>{
    return (<div style={styles.gamesContainer}>
        <h1 style={styles.headerStyles}>Coverflow</h1>
    </div>)
}


const styles={
    gamesContainer: {
        width: 300, 
        height:300,
        backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg)",
        position: "absolute",
        borderRadius: "5%"
    },
    headerStyles: {
        paddingTop: "0.5em",
        textAlign: "center",
        color: "white"
    }
}
export default Coverflow;