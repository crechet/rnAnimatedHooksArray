/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Root = () => {
    return (
        <SafeAreaProvider>
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            >
                <Text>Root</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default Root;
