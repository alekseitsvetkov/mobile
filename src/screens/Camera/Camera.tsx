import { ReactNativeFile } from 'apollo-upload-client';
import React, { useContext, useRef } from 'react';
import { View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '_app/context';
import { useUploadPhotoMutation } from '_app/generated/graphql';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { SCREEN_HEIGHT } from '_app/utils/dimensions';

import { s } from './styles';

export const CameraScreen = () => {
  const { theme } = useContext(AppContext);
  const cameraRef = useRef(null);
  const [uploadPhoto, { loading, data, error }] = useUploadPhotoMutation();

  const takePicture = async () => {
    if (cameraRef) {
      const options = { width: 1024 };
      try {
        const photo = await cameraRef.current.takePictureAsync(options);
        await uploadPhoto({
          variables: {
            file: new ReactNativeFile({
              uri: photo.uri,
              type: 'image/*',
              name: uuidv4(),
            }),
          },
          update: cache => {
            cache.evict({});
          },
        });
        if (!loading) {
          navigation.goBack();
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        navigation.goBack();
        return;
      }
    }
  };

  return (
    <View style={[s.container, styles(theme).container]}>
      <View style={{ height: SCREEN_HEIGHT / 2 }}>
        <RNCamera
          ref={cameraRef}
          style={s.preview}
          captureAudio={false}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </View>
      <View style={styles(theme).section}>
        <TouchableOpacity activeOpacity={0.7} onPress={takePicture} style={[s.capture, styles(theme).capture]}>
          <View style={[s.circle, styles(theme).circle]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.base,
    },
    section: {
      flex: 2,
      justifyContent: 'center',
      borderTopColor: theme.gray01,
      borderTopWidth: 1,
    },
    capture: {
      backgroundColor: theme.gray04,
    },
    circle: {
      backgroundColor: theme.gray01,
    },
    text: {
      color: theme.text01,
    },
  });
