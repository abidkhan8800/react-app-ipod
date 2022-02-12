import React from "react";
import Controller from "./controller/controller";
import ScreenLayout from "./screens/screenLayout"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      currentIndex: 0,
      menuItems: [ "Coverflow", "Music", "Games", "Settings"],
      musicMenu: ["All Songs", "Artists", "Albums"],
      component: "",
      currentList: ["Coverflow", "Music", "Games", "Settings"],
      currentSongIndex: 0
    }
  }

  handleMenuClick = () =>{
    if(this.state.showMenu){
     this.setState({showMenu: false});
    }else{
      this.setState({showMenu: true})
    }
  }
  setCurrentIndex = (index) => {
      this.setState({
        currentIndex: index
      })
  }
  setComponent = (component) => {
    let list = [];
    let listDisplayed = false;
    if(component === "Music"){
      list = this.state.musicMenu;
      listDisplayed = true
    }else{
      list = this.state.menuItems;
    }
    this.setState({
      component: component,
      showMenu: listDisplayed,
      currentList: list,
    })
  }
  setCurrentSongIndex = (index) =>{
    this.setState({
      currentSongIndex: index
    })
  }

  render(){
    return (
      <div style={styles.root}>
        <div style={styles.container}> 

          <ScreenLayout menuItems={this.state.currentList} showMenu={this.state.showMenu} currentActiveIndex={this.state.currentIndex} currentComponent={this.state.component} currentSongIndex={this.state.currentSongIndex} setCurrentSongIndex={this.setCurrentSongIndex} />

          <div style={styles.divider}></div>

          <Controller menuItems={this.state.currentList} showMenu={this.state.showMenu} handleMenuClick={this.handleMenuClick} setCurrentIndex={this.setCurrentIndex} component={this.setComponent} currentComponent={this.state.component} setCurrentSongIndex={this.setCurrentSongIndex}/>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    marginTop: "5%",    
  },
  container: {
    padding: "1em",
    backgroundColor: "#BBC2CC",
    borderRadius: "1em"
  },
  divider:{
    width: "1em",
    height: "1em"
  }

}

export default App;
