import React from 'react';


class List extends React.Component {

    render() {
        const {menuItems, currentActiveIndex} = this.props;
        return (
            <div style={styles.mainScreen}>
               {<div style={styles.menuContainer}>
                <div style={styles.headerStyles}>
                        Ipod.js
                </div>
                    {menuItems.map((item, menuIndex)=>{
                        return <div style={ menuIndex === currentActiveIndex ? styles.selectedListItem : styles.listItem} key={menuIndex}>
                            <p>{item}</p>
                            <p style={{color: "white"}}>&gt;</p>
                        </div>
                    })}
              </div>}
            </div>
        )
    }
}

const styles = {
    mainScreen: {
        width: "300px",
        height: "300px",
        backgroundColor: "white",
        borderRadius: "5%",
        backgroundColor: "transparent", 
        overflow: "hidden",
    },
    menuContainer:{
        backgroundColor: "white",
        width: "150px",
        height: "300px",
        overflow: "hidden",
        borderRadius: "5%",
    },
    headerStyles: {
        padding: "10px",
        fontSize: "1.5em",
        fontWeight: "bold",
    },
    listItem:{
        padding: "0 5px",
        fontSize: "1em",
        fontWeight: "bold",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "15px"
    },
    selectedListItem:{
        padding: "0 5px",
        fontSize: "1em",
        fontWeight: "bold",
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "skyblue",
        color:"white",
        paddingRight: "15px"
    }
}

export default List;