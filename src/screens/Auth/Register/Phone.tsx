import React, { useContext, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, useColorScheme, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { FormWrapper, SafeAreaWrapper } from '_app/components';
import { radius } from '_app/constants';
import { AppContext } from '_app/context';
import { useSendSmsCodeMutation } from '_app/generated/graphql';
import { Button } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const PhoneScreen = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();
  const { theme } = useContext(AppContext);
  const [valid, setValid] = useState(false);
  const [countryCode, setCountryCode] = useState('RU');
  const [phone, setPhone] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const [sendSmsCodeMutation, { data, loading, error }] = useSendSmsCodeMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = () => {
    if (valid) {
      sendSmsCodeMutation({
        variables: {
          phone,
        },
      });
    } else {
      setError('phone', { message: `${t('utils:wrong_phone')}` });
    }
  };

  useEffect(() => {
    const checkValid = phoneInput.current?.isValidNumber(phone);
    setValid(checkValid ? checkValid : false);
  }, [phone]);

  useEffect(() => {
    if (data && data.sendSmsCode === true) {
      // save to async storage
      return navigation.push('Code');
    }
  }, [data]);

  // TODO: handle data.sendSmsCode === false
  return (
    <SafeAreaWrapper>
      <FormWrapper>
        <Controller
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 12 }}
          render={({ field: { onChange, onBlur, value } }) => (
            // TODO: change color icon and input line in dark mode
            <PhoneInput
              ref={phoneInput}
              placeholder={t('utils:phone')}
              filterProps={{ placeholder: t('utils:enter_country_name') }}
              countryPickerProps={{
                translation: t('utils:picker_lang'),
              }}
              withDarkTheme={scheme === 'dark' ? true : false}
              defaultValue={value}
              defaultCode={countryCode}
              onChangeCountry={country => {
                setCountryCode(country.cca2);
              }}
              layout="first"
              onChangeText={text => {
                onChange(text);
                setPhone(text);
              }}
              autoFocus
              textInputProps={{
                onBlur,
              }}
              containerStyle={styles(theme).inputContainer}
              textContainerStyle={styles(theme).textContainer}
              textInputStyle={styles(theme).text}
              codeTextStyle={styles(theme).text}
            />
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && (
          <Text style={s.errorLogin}>
            {errors.phone.message ? errors.phone.message : `${t('utils:phone')} ${t('utils:is_required')}`}
          </Text>
        )}
        <Button label={t('utils:next')} onPress={handleSubmit(onSubmit)} loading={loading} />
        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaWrapper>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    inputContainer: {
      width: '100%',
      backgroundColor: theme.gray01,
      borderRadius: radius.base,
      marginBottom: normalize(10),
    },
    textContainer: {
      backgroundColor: theme.gray01,
      borderRadius: radius.base,
    },
    text: {
      color: theme.text01,
    },
  });
