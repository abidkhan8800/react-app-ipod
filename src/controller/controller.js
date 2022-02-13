import ZingTouch from "zingtouch";
import React from "react";
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import songsDetails from  '../songsDetails';
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
      const {setCurrentIndex, menuItems} = this.props;
      currentAngle += e.detail.distanceFromLast;
      // when rotation is in clockwise direction
        if( currentAngle > 10){
          currentAngle = 0;
          this.movingIndex++;
          if(this.movingIndex < 0){
            this.movingIndex = menuItems.length-1;
          }
          if(this.movingIndex > menuItems.length-1){
            this.movingIndex = 0;
          }
          setCurrentIndex(this.movingIndex)
        }

          // when rotation is in anti-clockwise direction
        if(currentAngle < -10){
          currentAngle  = 0;
          this.movingIndex--;
          if(this.movingIndex < 0){
            this.movingIndex = menuItems.length - 1;
          }
          if(this.movingIndex > menuItems.length - 1){
            this.movingIndex = 0;
          }
          setCurrentIndex(this.movingIndex)
        }
      });
  }

  handleSelectionChange = () => {
    this.props.component(this.props.menuItems[this.movingIndex]);
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


  render(){
    const {handleMenuClick} = this.props;
    return (
      <div style={styles.controllerConatiner}>
        <div style={styles.controller} draggable={false} ref={this.myRef}>
             <div>
                  <span  onClick={()=>{handleMenuClick()}} style={styles.menuKeyStyle}>
                    MENU
                  </span>
                  <span style={styles.backwardKeyStyle} onClick={()=>{this.handleBackButton()}}>
                    <FastRewindIcon fontSize="large"/>
                  </span>
                  <span style={styles.forwardKeyStyle} onClick={()=>{this.handleNextButton()}}>
                   <FastForwardIcon fontSize="large"/> 
                  </span>
                  <span style={styles.playPauseKeyStyle}>
                    <PlayArrowIcon fontSize="large"/><PauseIcon fontSize="large"/>
                  </span>
             </div>
             <div style={styles.mainButton} onClick={()=>{this.handleSelectionChange(this.movingIndex)}}>
            </div>
        </div>
    </div>
    );
  }
}


const styles= {
  controllerConatiner:{
    width: "300px",
    height: "300px",
    backgroundColor: "#BBC2CC",
    position: "relative",
    verticalAlign: "center",
  },
  controller: {
    margin: "auto",
    height: "300px",
    width: "300px",
    backgroundColor: "white",
    position: "relative",
    borderRadius: "50%"
  },
  mainButton: {
    width: "120px",
    height: "120px",
    backgroundColor: "#BBC2CC",
    margin: "auto",
    position: "absolute",
    borderRadius: "50%",
    top: "30%",
    left: "30%",
  },
  menuKeyStyle:{
    position: "absolute",
    fontWeight: 'bold', 
    color: "grey", 
    fontSize: '20px',
    left: "40%",
    top: "10%",
    padding: 0
  },
  forwardKeyStyle:{
    position: "absolute",
    color: "grey",
    top: "45%",
    right: "10%"
  },
  backwardKeyStyle: {
    position: "absolute",
    color: "grey",
    top: "45%",
    left: "10%"
  },
  playPauseKeyStyle: {
    position: "absolute",
    color: "grey", 
    left: "37%",
    bottom: "10%"
    
  }

}

export default Controller;
