import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { ScreenOrientation } from 'expo';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {

  const [width, setWidth] = useState(wp('100%'));
  const [height, setHeight] = useState(hp('40%'));
  const [portrait, setPortraitMode] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [uri1, setUri1] = useState('https://firebasestorage.googleapis.com/v0/b/test-project-203814.appspot.com/o/new%2F508fb3aa-e16c-4558-b279-3df922347b31.mov?alt=media&token=8cdc2df7-c1cf-449a-be7c-ef010e364163')
  const [uri2, setUri2] = useState('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4')
  const [uri3, setUri3] = useState('https://firebasestorage.googleapis.com/v0/b/test-project-203814.appspot.com/o/Kanye%20West%20-%20Yandhi%2FAlien%20(ft.%20Ant%20Clemons).mp3?alt=media&token=7007ebaf-4526-48e0-bf37-736e1e96d593')

  _switchOrientation = () => {
    ScreenOrientation.getOrientationLockAsync().then((res) => {
      if(res != 'LANDSCAPE') {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
        setWidth(hp('100%'));
        setHeight(wp('100%'));
        setPortraitMode(false);
        setFullScreen(true);
      } else {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
        setWidth(wp('100%'));
        setHeight(hp('40%'));
        setPortraitMode(true);
        setFullScreen(false);
      }
    });
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginVertical: 20}} />
        <VideoPlayer
          showFullscreenButton={true}
          videoProps={{
            shouldPlay: false,
            source: {
              uri: uri1
            }
          }}
          switchToLandscape={this._switchOrientation}
          switchToPortrait={this._switchOrientation}
          isPortrait={portrait}
          inFullscreen={fullScreen}
          width={width}
          height={height}
          />
          <View style={{marginVertical: 20}} />
          <Video
            source={{ uri: uri1 }}
            useNativeControls={true}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={false}
            isLooping={true}
            style={{ width: width, height: height }}
          />
          <View style={{marginVertical: 20}} />
          <VideoPlayer
            showFullscreenButton={true}
            videoProps={{
              shouldPlay: false,
              source: {
                uri: uri2
              }
            }}
            switchToLandscape={this._switchOrientation}
            switchToPortrait={this._switchOrientation}
            isPortrait={portrait}
            inFullscreen={fullScreen}
            width={width}
            height={height}
            />
            <View style={{marginVertical: 20}} />
            <Video
              source={{ uri: uri2 }}
              useNativeControls={true}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay={false}
              isLooping={true}
              style={{ width: width, height: height }}
            />
            <View style={{marginVertical: 20}} />
            <VideoPlayer
              showFullscreenButton={true}
              videoProps={{
                shouldPlay: false,
                source: {
                  uri: uri3
                }
              }}
              switchToLandscape={this._switchOrientation}
              switchToPortrait={this._switchOrientation}
              isPortrait={portrait}
              inFullscreen={fullScreen}
              width={width}
              height={height}
              />
            <View style={{marginVertical: 20}} />
            <Video
              source={{ uri: uri3 }}
              useNativeControls={true}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay={false}
              isLooping={true}
              style={{ width: width, height: height }}
            />
            <View style={{marginVertical: 20}} />

    </ScrollView>
  );
}
