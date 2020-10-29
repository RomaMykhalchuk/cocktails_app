import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Text, View } from 'react-native';

export const Filter = ({filter}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text>{filter}</Text>
            <CheckBox
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                disabled={false}
            />
        </View>
    );
};