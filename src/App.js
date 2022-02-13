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
      currentSongIndex: 0,
      isSongPlaying: true
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
      currentList: list
    })
  }
  setCurrentSongIndex = (index) => {
    this.setState({
      currentSongIndex: index
    })
  }

  handlePlayPauseClick = () =>{
    console.log('playPause')
    if(this.state.isSongPlaying){
     this.setState({isSongPlaying: false});
    }else{
      this.setState({isSongPlaying: true})
    }
  }

  render(){
    return (
      <div style={styles.root}>
        <div style={styles.container}> 
          <ScreenLayout menuItems={this.state.currentList} showMenu={this.state.showMenu} currentActiveIndex={this.state.currentIndex} musicMenu ={this.state.musicMenu} currentComponent={this.state.component} currentSongIndex={this.state.currentSongIndex} setCurrentSongIndex={this.setCurrentSongIndex} isSongPlaying={this.state.isSongPlaying}/>
          <Controller menuItems={this.state.currentList} showMenu={this.state.showMenu} currentActiveIndex ={this.state.currentIndex} handleMenuClick={this.handleMenuClick} setCurrentIndex={this.setCurrentIndex} component={this.setComponent} currentComponent={this.state.component} musicMenu ={this.state.musicMenu} currentSongIndex={this.state.currentSongIndex} setCurrentSongIndex={this.setCurrentSongIndex} isSongPlaying={this.state.isSongPlaying} handlePlayPauseClick={this.handlePlayPauseClick}/>
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
    backgroundImage: "url(https://media.istockphoto.com/photos/silver-textured-background-picture-id1135421909?b=1&k=20&m=1135421909&s=170667a&w=0&h=uuY6fpQXKVYmrk9zefSe3-PfEvjlSweSQt1AJrV0hEA=)",
    borderRadius: "1em",
    backgroundSize: "cover"
  },
  divider:{
    width: "1em",
    height: "1em",
  }

}

export default App;
