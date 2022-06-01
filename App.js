import React, {useState,useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
import imagex from './assets/icons/eco-light.png'
import imagew from './assets/icons/eco-light-off.png'
import imagey from './assets/icons/logo-dio.png'
import imaget from './assets/icons/logo-dio-white.png'

const App = ()=> {

  const [toggle, setToggle] = useState (false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=> {
      setToggle(oldToggle => !oldToggle);
    });
    return ()=> subscription.remove();
  }, []);

  return (
  <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity 
      onPress={handleChangeToggle}>
      <Image 
        style={toggle ? style.lightingOn : style.lightingOff}
        source={
          toggle
          ? imagex
          : imagew}/>
      <Image 
        style={style.dioLogo}
        source={
          toggle
          ? imagey
          : imaget}/>
    </TouchableOpacity>
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItens: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex:1,
    backgroundColor: 'white',
    alignItens: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
 dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});