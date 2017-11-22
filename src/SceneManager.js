import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScene from './scenes/LoginScene';
import RegisterScene from './scenes/RegisterScene';
import MainScene from './scenes/MainScene';


const SceneManager = () => {
  return (
    <Router sceneStyle={{ paddingTop: 24 }}>
      <Scene key="root">
        <Scene key="loginScene" component={LoginScene} hideNavBar={true} initial />
        <Scene key="registerScene" component={RegisterScene} hideNavBar={true} />
      </Scene>

      <Scene key="mainSceens">
        <Scene key="mainScene" component={MainScene} hideNavBar={true} />        
      </Scene>
    </Router>
  );
};

export default SceneManager;