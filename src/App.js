import React from "react";
import Controller from "./controller/controller";
import ScreenLayout from "./screens/screenLayout";
import './app.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      currentIndex: 0,
      menuItems: [ "Coverflow", "Music", "Games", "Settings"],
      musicMenu: ["All Songs", "Artists", "Albums"],
      currentComponent: "",
      currentList: ["Coverflow", "Music", "Games", "Settings"],
      currentSongIndex: 0,
      isSongPlaying: true
    }
  }

  // to hanlde click on the menu button
  handleMenuClick = () =>{
    if(this.state.showMenu){
     this.setState({showMenu: false});
    }else{
      this.setState({showMenu: true})
    }
  }

  // setting current index in the menu items 
  setCurrentIndex = (index) => {
      this.setState({
        currentIndex: index
      })
  }

  // setting whichc component to display in the screenLayout
  setCurrentComponent = (component) => {
    let list = [];
    let listDisplayed = false;
    if(component === "Music"){
      list = this.state.musicMenu;
      listDisplayed = true
    }else{
      list = this.state.menuItems;
    }
    this.setState({
      currentComponent: component,
      showMenu: listDisplayed,
      currentList: list
    })
  }

  // setting which song to play
  setCurrentSongIndex = (index) => {
    this.setState({
      currentSongIndex: index,
      isSongPlaying: (!this.state.isSongPlaying) ? true: this.state.isSongPlaying
    })
  }

  // handle play and pause on the song playing

  handlePlayPauseClick = () =>{
    if(this.state.isSongPlaying){
     this.setState({isSongPlaying: false});
    }else{
      this.setState({isSongPlaying: true})
    }
  }

  render(){
    return (
      <div className="rootApp">
        <div className="rootContainer"> 
            <ScreenLayout 
                props={this.state}
                setCurrentSongIndex={this.setCurrentSongIndex}
            />
            <Controller 
                props={this.state} 
                handleMenuClick={this.handleMenuClick} 
                setCurrentIndex={this.setCurrentIndex} 
                setCurrentComponent={this.setCurrentComponent} 
                setCurrentSongIndex={this.setCurrentSongIndex} 
                handlePlayPauseClick={this.handlePlayPauseClick}
            />
        </div>
      </div>
    );
  }
}

const styles = {
  
}

export default App;
