import React from 'react';

const Artists = () =>{
    return (<div className="commonScreenStyles" style={styles.container}>
    <h1 className="commonHeaderStyles" style={styles.headerStyles}>Artists</h1>
    <img style={styles.imgStyles} src="https://i.etsystatic.com/11173961/r/il/59996f/2778536122/il_340x270.2778536122_8c08.jpg" />

</div>)
}


const styles={
container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
},
imgStyles:{
    height: "200px",
    width: "250px"
},
headerStyles: {
    color: "black"
}
}
export default Artists;