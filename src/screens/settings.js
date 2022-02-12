import React from 'react';

const Settings = () =>{
    return (<div style={styles.gamesContainer}>
        <h1 style={styles.headerStyles}>Settings</h1>
    </div>)
}


const styles={
    gamesContainer: {
        width: 300, 
        height:300,
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0x3fcw0GrlRTCXJ6p-NdtxAUx_kZjP7kYlyqyigxZ93R_6l3iRjFYRx-He-jKXWibHI&usqp=CAU)",
        backgroundSize: "cover",
        marginTop: "-20px"
    },
    headerStyles: {
        textAlign: "center",
        color: "black"
    }
}
export default Settings;