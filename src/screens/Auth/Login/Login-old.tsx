import { ApolloError } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Feather';

import { FormWrapper, SafeAreaWrapper } from '_app/components';
import { IconSizes, tLogo } from '_app/constants';
import { AppContext } from '_app/context';
import { useLoginMutation } from '_app/generated/graphql';
import { Button, Input, LoadingIndicator } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { Typography } from '_app/theme';
import { ThemeColors } from '_app/types/theme';
import { signOut } from '_app/utils/authentication';
import { normalize } from '_app/utils/dimensions';
import { loadToken, saveToken } from '_app/utils/storage';

import { s } from './styles';

const { FontWeights } = Typography;

export const LoginScreen = () => {
  const { theme, updateMe } = useContext(AppContext);

  const { t } = useTranslation();

  const [initializing, setInitializing] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [errorLogin, setErrorLogin] = useState<ApolloError>();

  const [login, { loading, data, error }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    login({
      variables: {
        input: {
          username,
          password,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      const { accessToken, user } = data.login;

      saveToken(accessToken);
      updateMe(user);
      navigation.navigate('RootTab');
      setInitializing(false);
    }
  }, [data]);

  useEffect(() => {
    setErrorLogin(error);
  }, [error]);

  const navigateToApp = async () => {
    try {
      // welcomeNotification();
      navigation.navigate('RootTab');
    } catch {
      signOut();
    }
  };

  const initialize = async () => {
    const token = await loadToken();
    if (token) {
      await navigateToApp();
    }

    setInitializing(false);
    SplashScreen.hide();
  };

  useEffect(() => {
    initialize();
  }, []);

  let content = <LoadingIndicator color={theme.accent} size={IconSizes.x1} />;

  if (!initializing) {
    content = (
      <View>
        <FormWrapper verticalOffset={-40}>
          <Text style={[tLogo, styles(theme).formTitle]}>Skeetry</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                ref={null}
                onBlur={onBlur}
                onChangeText={onChange}
                label={t('utils:username')}
                placeholder={t('utils:username')}
                value={value}
                error={errors.username && t('utils:username') + ' ' + t('utils:is_required')}
              />
            )}
            name="username"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                ref={null}
                label={t('utils:password')}
                placeholder={t('utils:password')}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password && t('utils:password') + ' ' + t('utils:is_required')}
                secureTextEntry={true}
              />
            )}
            name="password"
            defaultValue=""
          />
          <TouchableOpacity
            onPress={() => navigation.push('ForgotPassword')}
            style={[s.forgotPassword]}
            activeOpacity={1}
          >
            <Text style={styles(theme).forgotPasswordText}>{t('utils:forgot_password')}</Text>
          </TouchableOpacity>
          <Button
            Icon={() => <Icon name="log-in" color={theme.white} size={16} />}
            label={t('utils:login')}
            onPress={handleSubmit(onSubmit)}
            loading={loading}
          />
          <Text style={[s.errorLogin, errorLogin ? { opacity: 1, textAlign: 'center' } : { opacity: 0 }]}>
            {errorLogin && errorLogin.message}
          </Text>
        </FormWrapper>
        <TouchableOpacity
          onPress={() => navigation.push('Phone')}
          activeOpacity={1}
          style={[s.registerWrapper, styles(theme).registerWrapper]}
        >
          <Text style={[s.registerWrapperText, styles(theme).registerWrapperText]}>
            <Text style={[s.registerWrapperTextBold, styles(theme).registerWrapperTextBold]}>
              {t('utils:no_account')}
            </Text>{' '}
            {t('utils:register_now')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <SafeAreaWrapper>{content}</SafeAreaWrapper>;
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    formTitle: {
      marginBottom: normalize(30),
      color: theme.text01,
    },
    forgotPasswordText: {
      ...FontWeights.Semibold,
      color: theme.gray03,
    },
    registerWrapperText: {
      color: theme.text01,
    },
    registerWrapperTextBold: {
      color: theme.gray03,
    },
    registerWrapper: {
      borderTopColor: theme.gray01,
    },
  });
