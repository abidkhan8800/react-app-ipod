import React from 'react';

const Settings = () =>{
    return (<div className="commonScreenStyles" style={styles.container}>
        <h1 className="commonHeaderStyles" style={styles.headerStyles}>Settings</h1>
    </div>)
}


const styles={
    container: {
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0x3fcw0GrlRTCXJ6p-NdtxAUx_kZjP7kYlyqyigxZ93R_6l3iRjFYRx-He-jKXWibHI&usqp=CAU)",
    },
    headerStyles: {
        color: "black"
    }
}
export default Settings;