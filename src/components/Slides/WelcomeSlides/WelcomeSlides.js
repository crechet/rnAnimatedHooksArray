/**
 * @flow
 * */
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles, { linearGradientColors } from './WelcomeSlidesStyles';
import useArrayItemsOpacityAnimation, { AnimationConstants } from '../../../hooks/useArrayItemsOpacityAnimation';

import ButtonBase from '../../Buttons/ButtonBase/ButtonBase';
import Logo from '../../Logo/Logo';
import ImageSlides from '../ImageSlides/ImageSlides';
import Bullets from '../Bullets/Bullets';

type Props = {
    slides: Array<{ image: number, text: string }>,
    onSlidesDone: () => void
};

const WelcomeSlides = (props: Props) => {
    const { slides, onSlidesDone } = props;

    const [isAnimating, setIsAnimating] = useState(false);

    const [customCurrentItemIndex, customOpacityAnimationArray] = useArrayItemsOpacityAnimation(
        slides,
        AnimationConstants.opacityShown,
        AnimationConstants.opacityHidden,
        isAnimating,
        () => setIsAnimating(false)
    );

    // Handle next button press
    const handleNextPress = () => {
        if (customCurrentItemIndex === slides.length - 1) {
            onSlidesDone();
            return;
        }

        setIsAnimating(true);
    };

    const renderSlidesText = () => {
        return slides.map((slide, index) => {
            const currentTextContainerStyles = { opacity: customOpacityAnimationArray[customCurrentItemIndex] };
            const nextTextContainerStyles = { opacity: customOpacityAnimationArray[customCurrentItemIndex + 1] };

            let animatedStyles = [styles.textContainerInner];
            if (index === customCurrentItemIndex) {
                animatedStyles.push(currentTextContainerStyles);
            } else if (index === customCurrentItemIndex + 1) {
                animatedStyles.push(nextTextContainerStyles);
            }

            return (
                <Animated.View
                    key={`welcome-slide-text-${index}`}
                    style={animatedStyles}
                >
                    <Text style={styles.text}>
                        {slide.text}
                    </Text>
                </Animated.View>
            );
        }).reverse();
    };

    return (
        <View style={styles.container}>
            <ImageSlides
                slides={slides}
                isAnimating={isAnimating}
                onSlideAnimationDone={() => setIsAnimating(false)}
            />

            <LinearGradient
                colors={linearGradientColors}
                style={styles.controlsContainer}
            >
                <Logo
                    logoContainerStyles={styles.logoContainer}
                />

                <View style={styles.textContainer}>
                    {renderSlidesText()}
                </View>

                <ButtonBase
                    isDisabled={isAnimating}
                    buttonContainerStyle={styles.button}
                    labelStyle={styles.buttonLabel}
                    label={'Next'}
                    onPress={handleNextPress}
                />

                <Bullets
                    slides={slides}
                    isAnimating={isAnimating}
                    onBulletAnimationDone={() => setIsAnimating(false)}
                />
            </LinearGradient>
        </View>
    );
};

export default WelcomeSlides;
