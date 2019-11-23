/**
 * @flow
 * */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './ButtonBaseStyles';
import { Props, defaultProps } from '../ButtonsTypes';

const ButtonBase = (props: Props) => {
    const { label, onPress, buttonContainerStyle, labelStyle, isDisabled } = props;

    const containerStyles = buttonContainerStyle ? [styles.container, buttonContainerStyle] : [styles.container];
    const labelStyles = labelStyle ? [styles.label, labelStyle] : [styles.label];

    return (
        <TouchableOpacity
            disabled={isDisabled}
            style={containerStyles}
            activeOpacity={0.5}
            onPress={onPress}
        >
            <Text style={labelStyles}>{label}</Text>
        </TouchableOpacity>
    );
};

ButtonBase.defaultProps = {
    ...defaultProps
};

export default ButtonBase;
