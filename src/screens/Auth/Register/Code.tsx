import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import { FormWrapper, SafeAreaWrapper } from '_app/components';
import { colors } from '_app/constants';
import { AppContext } from '_app/context';
import { useConfirmSmsCodeMutation, useSendSmsCodeMutation } from '_app/generated/graphql';
import { Button } from '_app/layout';
import { navigation } from '_app/services/navigations';
import { ThemeColors } from '_app/types/theme';
import { normalize } from '_app/utils/dimensions';

import { s } from './styles';

export const CodeScreen = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();
  const { theme } = useContext(AppContext);

  const CELL_COUNT = 4;
  const resendInterval = 60;

  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(resendInterval);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [confirmSmsCodeMutation, { data, loading, error }] = useConfirmSmsCodeMutation();

  const [sendSmsCodeMutation, { data: dataResend, loading: loadingResend, error: errorResend }] =
    useSendSmsCodeMutation();

  const onSubmit = value => {
    if (value.length === CELL_COUNT) {
      confirmSmsCodeMutation({
        variables: {
          phone,
          code: value,
        },
      });
    }
  };

  useEffect(() => {
    let countdown = setInterval(() => {
      setTimer(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (data && data.confirmSmsCode === true) {
      setCode(value);
      return navigation.push('Credentials');
    }
  }, [data]);

  // TODO: handle data.confirmSmsCode === false

  const resendCode = async () => {
    if (timer === 0) {
      await sendSmsCodeMutation({
        variables: {
          phone,
        },
      });
    }

    setTimer(resendInterval);
  };

  useEffect(() => {
    if (dataResend?.sendSmsCode === true) {
      Alert.alert(t('auth:code_sent'));
    }
  }, [dataResend]);

  return (
    <SafeAreaWrapper>
      <FormWrapper>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={s.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                s.cell,
                styles(theme).text,
                isFocused && s.focusCell,
                scheme === 'dark' && isFocused && { borderColor: colors.white },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {timer !== 0 && (
          <Text style={[{ padding: normalize(10) }, styles(theme).text]}>
            Запросить код повторно можно через {timer}
          </Text>
        )}
        {timer === 0 && (
          <Button
            label={t('utils:resend')}
            onPress={() => resendCode()}
            loading={loading}
            containerStyle={{ marginVertical: normalize(10) }}
          />
        )}
        {value.length === CELL_COUNT && (
          <Button label={t('utils:next')} onPress={() => onSubmit(value)} loading={loading} />
        )}

        {error && <Text style={[s.errorLogin, { textAlign: 'center' }]}>{error.message}</Text>}
      </FormWrapper>
    </SafeAreaWrapper>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
  });
