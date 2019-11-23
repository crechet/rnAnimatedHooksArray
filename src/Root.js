/**
 * @format
 * @flow
 */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';

const Root = () => {
    return (
        <SafeAreaProvider>
            <WelcomeScreen />
        </SafeAreaProvider>
    );
};

export default Root;
