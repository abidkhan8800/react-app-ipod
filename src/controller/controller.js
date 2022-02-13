import ZingTouch from "zingtouch";
import React from "react";
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import songsDetails from  '../songsDetails';
import './controller.css'
class Controller extends React.Component {
  constructor() {
    super();
    this.movingIndex = 0;
    this.myRef = React.createRef();
    this.songIndex = 0;
  }

  componentDidMount() {
    let currentAngle = 0;
    const region = new ZingTouch.Region(this.myRef.current);
    region.bind(this.myRef.current, 'rotate', (e) => {
      const {setCurrentIndex} = this.props;
      const {currentList} = this.props.props;
      currentAngle += e.detail.distanceFromLast;
      // when rotation is in clockwise direction
        if( currentAngle > 10){
          currentAngle = 0;
          this.movingIndex++;
          if(this.movingIndex < 0){
            this.movingIndex = currentList.length-1;
          }
          if(this.movingIndex > currentList.length-1){
            this.movingIndex = 0;
          }
           setCurrentIndex(this.movingIndex)
        }

          // when rotation is in anti-clockwise direction
        if(currentAngle < -10){
          currentAngle  = 0;
          this.movingIndex--;
          if(this.movingIndex < 0){
            this.movingIndex = currentList.length - 1;
          }
          if(this.movingIndex > currentList.length - 1){
            this.movingIndex = 0;
          }
          setCurrentIndex(this.movingIndex)
        }
      });
  }

  handleSelectionChange = () => {
    const {currentList, showMenu} = this.props.props
    if(showMenu){
      this.props.setCurrentComponent(currentList[this.movingIndex]);
    }else{
      this.props.handlePlayPauseClick();
    }
  }

  handleNextButton = () =>{
    this.songIndex++;
    if(this.songIndex > songsDetails.length - 1){
      this.songIndex = 0;
    }
    this.props.setCurrentSongIndex(this.songIndex);
  }

  handleBackButton= () =>{
    this.songIndex--;
    if(this.songIndex < 0){
      this.songIndex = songsDetails.length - 1;
    }
    this.props.setCurrentSongIndex(this.songIndex);
  }

  handlePlayPauseButton = () => {
    this.props.handlePlayPauseClick();
  }

  render(){
    const {handleMenuClick} = this.props;
    const {isSongPlaying, currentComponent} = this.props.props;
    return (
      <div className="controllerConatiner">
        <div className={(isSongPlaying && currentComponent === "All Songs") ? "controller controllerChageColor": "controller"} ref={this.myRef}>
             <div>
                  <span  onClick={()=>{handleMenuClick()}} className="menuKeyStyle">
                    MENU
                  </span>
                  <span className="backwardKeyStyle" onClick={()=>{this.handleBackButton()}}>
                    <FastRewindIcon fontSize="large"/>
                  </span>
                  <span className="forwardKeyStyle" onClick={()=>{this.handleNextButton()}}>
                   <FastForwardIcon fontSize="large"/> 
                  </span>
                  <span className="playPauseKeyStyle" onClick={()=>{this.handlePlayPauseButton()}}>
                    <PlayArrowIcon fontSize="large"/><PauseIcon fontSize="large"/>
                  </span>
             </div>
             <div className={(isSongPlaying && currentComponent === "All Songs") ? "mainButton controllerChageColor": "mainButton"} onClick={()=>{this.handleSelectionChange(this.movingIndex)}}>
            </div>
        </div>
    </div>
    );
  }
}

export default Controller;
