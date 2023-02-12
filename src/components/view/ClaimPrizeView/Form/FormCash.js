import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../../../form';
import {MAX_ADDRESS_LENGTH, MAX_NIK_LENGTH} from '../../../../parameters';
import {getErrorCitizenId} from '../../../../utils';
import {Gap} from '../../../atoms';

export default function FormCash(props) {
  const {form, setForm} = props;
  const [error, setError] = useState(null);

  const onEndPasswordEdit = () => {
    const errMsg = getErrorCitizenId(form?.goverment_id);
    setError(errMsg);
  };

  return (
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
        value={form?.goverment_id}
        maxLength={MAX_NIK_LENGTH}
        onChangeText={(value) => setForm('goverment_id', value)}
        onEndEditing={() => onEndPasswordEdit()}
        errorMessage={error}
      />
      <Input
        required
        label="Bank Penyelenggara"
        leftIcon={{type: 'material-community', name: 'bank-outline'}}
        placeholder="Bank Penyelenggara"
        value={form?.bank}
        onChangeText={(value) => setForm('bank', value)}
      />
      <Input
        required
        label="No. Rekening"
        leftIcon={{type: 'material-community', name: 'credit-card-outline'}}
        placeholder="No. Rekening"
        keyboardType="numeric"
        value={form?.bank_account}
        onChangeText={(value) => setForm('bank_account', value)}
      />
      <Input
        required
        label="Atas Nama Rekening"
        leftIcon={{type: 'material-community', name: 'smart-card'}}
        placeholder="Atas Nama Rekening"
        value={form?.account_holder}
        onChangeText={(value) => setForm('account_holder', value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
