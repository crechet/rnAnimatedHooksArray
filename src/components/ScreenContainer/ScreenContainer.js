/**
 * @flow
 */
import * as React from 'react';
import { StatusBar } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './ScreenContainerStyles';

type Props = {
    safeAreaViewStyles?: ViewStyleProp,
    safeAreaForceInset?: {
        top?: 'always' | 'never',
        bottom?: 'always' | 'never',
        left?: 'always' | 'never',
        right?: 'always' | 'never',
        vertical?: 'always' | 'never',
        horizontal?: 'always' | 'never',
    },
    children?: React.Node
};

const ScreenContainer = (props: Props) => {
    const { safeAreaForceInset } = props;
    const safeAreaStyles = [styles.safeArea];

    if (props.safeAreaViewStyles) safeAreaStyles.push(props.safeAreaViewStyles);

    return (
        <SafeAreaView
            style={safeAreaStyles}
            forceInset={safeAreaForceInset}
        >
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor={'rgba(0, 0, 0, 0)'}
            />

            {props.children}
        </SafeAreaView>
    );
};

ScreenContainer.defaultProps = {
    safeAreaBackgroundColor: styles.safeArea.backgroundColor,
    safeAreaForceInset: {
        top: 'always',
        horizontal: 'never'
    }
};

export default ScreenContainer;
