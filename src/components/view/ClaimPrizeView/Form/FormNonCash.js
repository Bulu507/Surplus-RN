import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../../form';
import {MAX_ADDRESS_LENGTH, MAX_NIK_LENGTH} from '../../../../parameters';
import {getErrorCitizenId} from '../../../../utils';
import {Gap} from '../../../atoms';

export default function FormNonCash(props) {
  const {form, setForm} = props;
  const [error, setError] = useState(null);

  const onEndPasswordEdit = () => {
    console.log('cekasdas');
    const errMsg = getErrorCitizenId(form?.goverment_id);
    setError(errMsg);
  };

  return (
    <>
      <View style={styles.container}>
        <Gap height={10} />
        <Input
          required
          label="Alamat Lengkap"
          leftIcon={{
            type: 'material-community',
            name: 'map-marker',
          }}
          placeholder="Alamat Lengkap"
          multiline
          maxLength={MAX_ADDRESS_LENGTH}
          value={form?.address}
          onChangeText={(value) => setForm('address', value)}
        />
        <Input
          required
          label="NIK KTP"
          leftIcon={{
            type: 'material-community',
            name: 'card-account-details-outline',
          }}
          placeholder="NIK KTP"
          keyboardType="numeric"
          maxLength={MAX_NIK_LENGTH}
          value={form?.goverment_id}
          onChangeText={(value) => setForm('goverment_id', value)}
          onEndEditing={() => onEndPasswordEdit()}
          errorMessage={error}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15},
});
