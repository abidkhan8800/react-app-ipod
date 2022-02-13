import React from 'react';

const Albums = () =>{
    return (<div className="commonScreenStyles" style={styles.container}>
        <h1 className="commonHeaderStyles" style={styles.headerStyles}>Albums</h1>
        <img style={styles.imgStyles} src="https://cdn.slidesharecdn.com/ss_thumbnails/collagepresentation-090925093033-phpapp02-thumbnail-4.jpg?cb=1253871118" />

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
export default Albums;