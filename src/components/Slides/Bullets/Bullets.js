/**
 * @flow
 */
import * as React from 'react';
import { View, Animated } from 'react-native';

import styles from './BulletsStyles';
import useArrayItemsOpacityAnimation, { AnimationConstants } from '../../../hooks/useArrayItemsOpacityAnimation';

type Props = {
    slides: Array<{ image: number, ...any }>,
    isAnimating: boolean,
    onBulletAnimationDone: () => void
};

const Bullets = (props: Props) => {
    const { slides, isAnimating, onBulletAnimationDone } = props;

    const [currentIndex, opacityAnimationArray] = useArrayItemsOpacityAnimation(
        slides,
        AnimationConstants.opacityShown,
        AnimationConstants.opacityHalf,
        isAnimating,
        onBulletAnimationDone
    );

    const renderBullets = () => {
        return slides.map((slide, index) => {
            const currentBulletContainerStyles = { opacity: opacityAnimationArray[currentIndex] };
            const nextBulletContainerStyles = { opacity: opacityAnimationArray[currentIndex + 1] };

            let animatedStyles = [styles.bullet];
            if (index === currentIndex) {
                animatedStyles.push(currentBulletContainerStyles);
            } else if (index === currentIndex + 1) {
                animatedStyles.push(nextBulletContainerStyles);
            } else if (index === slides.length) {
                animatedStyles.push(styles.bulletLast);
            }

            return (
                <Animated.View
                    key={`bullet-${index}`}
                    style={animatedStyles}
                />
            );
        });
    };

    return (
        <View style={styles.bulletsContainer}>
            {renderBullets()}
        </View>
    );
};

export default Bullets;
