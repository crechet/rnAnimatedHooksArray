/**
 * @flow
 * */
import React from 'react';
import { Image, View } from 'react-native';
import type { ViewStyleProp, ImageStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import styles from './LogoStyles'
const logoWhite = require('./images/lotrLogo.png');

type Props = {
    logoContainerStyles?: ViewStyleProp,
    imageStyles?: ImageStyleProp
};

const Logo = (props: Props) => {
    const containerStyles = props.logoContainerStyles ? [styles.container, props.logoContainerStyles] : [styles.container];
    const imageStyles = props.imageStyles ? [styles.logo, props.imageStyles] : [styles.logo];

    return (
        <View style={containerStyles}>
            <Image
                source={logoWhite}
                style={imageStyles}
            />
        </View>
    );
};

export default Logo;
