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
  const [uri, setUri] = useState('https://video-weaver.cdg02.hls.ttvnw.net/v1/playlist/CpADWYihUClM0q8tc9TdvfdwnDOAo8tcVkISvo8r_MTojO6tckKXMrvwXn9YpCjLN5brB0V5bYOz_T_QT4a-PzsTIPqAAeuAPh7Rd61B2weor3DSVqC3NSeqxbBF-fbgNR6Sque8Kpjrmg_DWPX1Iu4YQy5xGnbbixaSJYOkhdBSU_YiAxHCVgfivv8eAAoUn5qk86I4S5EjaJZJBzP-JcMkKjykTizhXlmaOzEfDJ5DDvDVsx7VOUjYiDV5P8GNEvOVnOTSdXYuamVf_vTa-MK7yYLcQPZT-yxBelXB3k6VKWfL7rjxdgPWWzQ5DQPsHJTfNcoXO3f-vxaWrfu-W5U4Xgbk78jqH8oodgSvMf2VsjyeIWB950p4HLxs1MmREx03V724aF98TPrsjVRH3zceaUdlF5pMpI7UuyqVxJIaOsCQXonU2aejgpG0u8vB1940z1KQB0alpriMvoeKBOtrjvTwhiua2W-kBDI2wMGDPQ2484-BguqP9rwI-0mH3eW1t-1dyIUGVW_aivdP3dBKVxIQssoIA1LDxJ66LogqEo6AJxoMxwO22H0iYlBlbiJl.m3u8');

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
        <VideoPlayer
          showFullscreenButton={true}
          videoProps={{
            shouldPlay: false,
            source: {
              uri: uri
            }
          }}
          disableSlider={true}
          switchToLandscape={this._switchOrientation}
          switchToPortrait={this._switchOrientation}
          isPortrait={portrait}
          inFullscreen={fullScreen}
          width={width}
          height={height}
          />
    </ScrollView>
  );
}
