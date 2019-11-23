import { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

// Common buttons props
export type Props = {
    label: string,
    buttonContainerStyle?: ViewStyleProp,
    labelStyle?: TextStyleProp,
    onPress: () => void,
    isDisabled: boolean
};

export const defaultProps = {
    label: 'Button Base',
    isDisabled: false
};
