import React from 'react';


class List extends React.Component {

    render() {
        const {menuItems, currentActiveIndex} = this.props;
        return (
            <div className="mainScreen">
               {<div className="menuContainer">
                <div className="menuHeaderStyles">
                       Ipod.js
                </div>
                    {menuItems.map((item, menuIndex)=>{
                        return <div className={menuIndex === currentActiveIndex ? "selectedListItem": "listItem" } key={menuIndex}>
                            <p>{item}</p>
                            <p style={{color: "white"}}>&gt;</p>
                        </div>
                    })}
              </div>}
            </div>
        )
    }
}

export default List;