import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginScene from './scenes/LoginScene';
import RegisterScene from './scenes/RegisterScene';
import MainScene from './scenes/MainScene';
import FavoritesScene from './scenes/FavoritesScene';
import YoutubePlayer from './scenes/YoutubePlayer';



const SceneManager = ({ loggedIn }) => {
  return ( 
    <Router sceneStyle = { { paddingTop: 24 } }>
      <Scene key = "root" initial = { !loggedIn } type={ActionConst.REPLACE}>
        <Scene key = "loginScene" component = { LoginScene } hideNavBar = { true } />
        <Scene key = "registerScene" component = { RegisterScene } hideNavBar = { true } />
      </Scene>

      <Scene key = "mainSceens" initial = { loggedIn }>
        <Scene key = "mainScene" component = { MainScene } hideNavBar = { true } />
        <Scene key = "favoritesScene" component = { FavoritesScene } hideNavBar = { true } />
        <Scene key = "ytPlayer" component = { YoutubePlayer } hideNavBar = { true } />                                                        
      </Scene>
    </Router>
  );
};

export default SceneManager;