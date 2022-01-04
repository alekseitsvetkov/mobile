import { useActionSheet } from '@expo/react-native-action-sheet';
import { ReactNativeFile } from 'apollo-upload-client';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Text,
  ActionSheetIOS,
  TouchableOpacity,
  View,
  useColorScheme,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { v4 as uuidv4 } from 'uuid';

import { Avatar } from '_app/components';
import { PLATFORM, tBase } from '_app/constants';
import { AppContext } from '_app/context';
import {
  useDeletePhotoMutation,
  useMeQuery,
  useUpdateProfileMutation,
  useUploadPhotoMutation,
} from '_app/generated/graphql';
import { Input } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { HandleAvailableColor } from '_app/theme';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

export const ProfileChangeScreen = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();

  const { me, theme } = useContext(AppContext);

  const { loading, data } = useMeQuery();
  const [uploadPhoto] = useUploadPhotoMutation();
  const [deletePhoto] = useDeletePhotoMutation();
  const [updateProfile, { data: dataProfile, loading: loadingProfile, error: errorProfile }] =
    useUpdateProfileMutation();

  const { showActionSheetWithOptions } = useActionSheet();

  const user = data!.me;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, name, bio }) => {
    updateProfile({
      variables: {
        input: {
          username,
          name,
          bio,
        },
      },
      update: cache => {
        cache.evict({});
      },
    });
  };

  const actionOptions = [
    `${t('utils:cancel')}`,
    `${t('settings:take_photo')}`,
    `${t('settings:choose_from_gallery')}`,
    `${t('settings:delete_photo')}`,
  ];

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: actionOptions,
            destructiveButtonIndex: 3,
            cancelButtonIndex: 0,
            userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
          },
          buttonIndex => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              navigation.push('Camera');
            } else if (buttonIndex === 2) {
              launchImageLibrary(
                { mediaType: 'photo', maxWidth: 1024, maxHeight: 1024 },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    return uploadPhoto({
                      variables: {
                        file: new ReactNativeFile({
                          uri: assets[0].uri,
                          type: 'image/*',
                          name: uuidv4(),
                        }),
                      },
                      update: cache => {
                        cache.evict({});
                      },
                    });
                  }
                },
              );
            } else if (buttonIndex === 3) {
              deletePhoto({
                update: cache => {
                  cache.evict({});
                },
              });
            }
          },
        )
      : showActionSheetWithOptions(
          {
            options: actionOptions,
            userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
          },
          i => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              navigation.push('Camera');
            } else if (i === 2) {
              launchImageLibrary(
                { mediaType: 'photo', maxWidth: 1024, maxHeight: 1024 },
                ({ didCancel, errorCode, errorMessage, assets }) => {
                  if (errorMessage || errorCode || didCancel) {
                    return null;
                  }
                  if (assets) {
                    return uploadPhoto({
                      variables: {
                        file: new ReactNativeFile({
                          uri: assets[0].uri,
                          type: 'image/*',
                          name: uuidv4(),
                        }),
                      },
                    });
                  }
                },
              );
            } else if (i === 3) {
              deletePhoto({
                update: cache => {
                  cache.evict({});
                },
              });
            }
          },
        );
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          {!loading && (
            <TouchableOpacity
              activeOpacity={user.avatar ? 0.7 : 1}
              onPress={() =>
                user.avatar &&
                navigation.push('Avatar', {
                  image: user.avatar,
                })
              }
            >
              <Avatar src={user.avatar} username={user.username} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => onPressSheet()}>
            <Text
              style={[
                tBase,
                { fontWeight: '600', paddingTop: normalize(10), paddingBottom: normalize(20) },
                styles(theme).text,
              ]}
            >
              {t('profile:new_photo')}
            </Text>
          </TouchableOpacity>

          <View style={{ width: '100%' }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  ref={null}
                  placeholder={t('utils:username')}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="username"
              defaultValue={me.username}
            />
            {errors.username && <Text>This is required.</Text>}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input ref={null} placeholder={t('utils:name')} onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="name"
              defaultValue={me.name}
            />

            {errors.name && <Text>This is required.</Text>}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input ref={null} placeholder={t('utils:bio')} onChangeText={onChange} onBlur={onBlur} value={value} />
              )}
              name="bio"
              defaultValue={me.bio}
            />

            {errors.lastName && <Text>This is required.</Text>}
            <TouchableOpacity
              style={{ width: '100%', alignItems: 'center', marginTop: normalize(10) }}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={[tBase, styles(theme).loadingProfile]}>
                {loadingProfile ? t('utils:loading') : t('profile:done')}
              </Text>
            </TouchableOpacity>
            {errorProfile && <Text style={styles(theme).error}>{errorProfile.message}</Text>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
    error: {
      color: HandleAvailableColor.false,
      marginVertical: normalize(10),
    },
    loadingProfile: {
      color: theme.text01,
      fontWeight: '600',
    },
  });
