import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { FormWrapper, SafeAreaWrapper } from '_app/components';
import { useSignupMutation } from '_app/generated/graphql';
import { Button, Input } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const CredentialsScreen = () => {
  const { t } = useTranslation();

  const [signupMutation, { data, loading, error }] = useSignupMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ name, username, password }) => {
    signupMutation({
      variables: {
        input: {
          phone,
          name,
          username,
          password,
          code,
        },
      },
    });
  };

  useEffect(() => {
    if (data && data.signup) {
      const { accessToken, refreshToken, user } = data.signup;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      return navigation.push('Welcome');
    }
  }, [data]);

  return (
    <SafeAreaWrapper>
      <FormWrapper>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              ref={null}
              onBlur={onBlur}
              onChangeText={onChange}
              label={t('utils:name')}
              placeholder={t('utils:name')}
              value={value}
              error={errors.name && t('utils:name') + ' ' + t('utils:is_required')}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && (
          <Text style={s.errorLogin}>
            {t('utils:name')} {t('utils:is_required')}
          </Text>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
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
        {errors.username && (
          <Text style={s.errorLogin}>
            {t('utils:username')} {t('utils:is_required')}
          </Text>
        )}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              ref={null}
              onBlur={onBlur}
              onChangeText={onChange}
              label={t('utils:password')}
              placeholder={t('utils:password')}
              value={value}
              error={errors.password && t('utils:password') + ' ' + t('utils:is_required')}
              secureTextEntry={true}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={s.errorLogin}>
            {t('utils:password')} {t('utils:is_required')}
          </Text>
        )}
        <Button
          label={t('utils:next')}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          containerStyle={{ marginTop: normalize(10) }}
        />
        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaWrapper>
  );
};
