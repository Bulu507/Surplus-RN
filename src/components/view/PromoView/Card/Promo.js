import {StyleSheet, View} from 'react-native';
import React from 'react';
import Box from './Box';
import {colors} from '../../../../utils';
import {Button, Gap, Text} from '../../../atoms';
import {ICON} from '../../../../parameters';

export default function Promo(props) {
  const data = props?.data;
  const points = data?.labelPoin;
  const expiredAt = data?.expiredAt;
  const isActive = data?.isActive;
  const isExpired = data?.isExpired;

  return (
    <Box {...props}>
      <View>
        <Text type="bold" color={colors.text.highlight}>
          {points}
        </Text>
        <Text size={8} style={{fontStyle: 'italic'}}>
          Batas Penukaran: {expiredAt}
        </Text>
        <Gap height={10} />
        {isExpired ? (
          <Text color={colors.text.danger}>*masa penukaran sudah selesai</Text>
        ) : (
          <Button
            disabled={!isActive}
            title="Tukarkan Poin"
            icon={{
              type: ICON.MDC,
              name: 'circle-multiple-outline',
              color: colors.white,
              size: 18,
            }}
            onPress={props?.onPress}
          />
        )}
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({});
