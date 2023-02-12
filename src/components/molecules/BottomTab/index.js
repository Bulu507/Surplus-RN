import {useNavigation, useRoute} from '@react-navigation/native';
import {isEqual} from 'lodash';
import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getDefaultWAMessage, HOME_PAGE, localParams} from '../../../parameters';
import {getLocalData, sendWhatsApp} from '../../../services';
import {colors} from '../../../utils';
import TabItem from './TabItem';

export default function BottomTab() {
  const route = useRoute();
  const navigation = useNavigation();
  const {dataUser} = useSelector((x) => x.userReducer);
  const onHomePage = isEqual(route.name, HOME_PAGE);

  const setToHomePage = () => {
    if (!onHomePage) {
      navigation.popToTop();
    }
    navigation.replace(HOME_PAGE);
  };

  const tapToOpenWA = async () => {
    const message = getDefaultWAMessage(dataUser?.name);
    const local = await getLocalData(localParams.DASHBOARD_DATA);
    const phone = local?.Informasi?.wa;
    sendWhatsApp(message, phone);
  };

  const tapToCall = async () => {
    const local = await getLocalData(localParams.DASHBOARD_DATA);
    const phone = local?.Informasi?.phone;
    console.log('cek phone', local);
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <>
      {/* <DialogBox
        type="under-dev"
        isVisible={show}
        close={() => setshow(false)}
      /> */}
      <View style={styles.container}>
        <TabItem
          active={onHomePage}
          title="Beranda"
          icon="home"
          onPress={() => setToHomePage()}
        />
        <TabItem
          title="WA Resmi"
          icon="logo-whatsapp"
          onPress={() => tapToOpenWA()}
        />
        <TabItem title="Telpon Kami" icon="call" onPress={() => tapToCall()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});
