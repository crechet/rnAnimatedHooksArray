/**
 * @flow
 * */
import React from 'react';
import { View, Image, Animated } from 'react-native';

import styles from './ImageSlidesStyles';
import useArrayItemsOpacityAnimation, { AnimationConstants } from '../../../hooks/useArrayItemsOpacityAnimation';

type Props = {
    slides: Array<{ image: number, ...any }>,
    isAnimating: boolean,
    onSlideAnimationDone: () => void
};

const ImageSlides = (props: Props) => {
    const { slides, isAnimating, onSlideAnimationDone } = props;

    const [customCurrentItemIndex, customOpacityAnimationArray] = useArrayItemsOpacityAnimation(
        slides,
        AnimationConstants.opacityShown,
        AnimationConstants.opacityHidden,
        isAnimating,
        onSlideAnimationDone
    );

    const renderSlides = () => {
        return slides.map((slide, index) => {
            const currentSlideContainerStyles = { opacity: customOpacityAnimationArray[customCurrentItemIndex] };
            const nextSlideContainerStyles = { opacity: customOpacityAnimationArray[customCurrentItemIndex + 1] };

            let containerStyles = [styles.container];
            if (index === customCurrentItemIndex) {
                containerStyles.push(currentSlideContainerStyles);
            } else if (index === customCurrentItemIndex + 1) {
                containerStyles.push(nextSlideContainerStyles);
            }

            return (
                <Animated.View
                    key={`image-slide-${index}`}
                    style={containerStyles}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={slide.image}
                            style={styles.image}
                        />
                    </View>
                </Animated.View>
            );
        });
    };

    return (
        <View style={styles.slidesContainer}>
            {renderSlides()}
        </View>
    );
};

export default ImageSlides;
