/**
 * @flow
 * */
import React from 'react';

import styles from './WelcomeScreenStyles';
const slide1 = require('../../assets/images/lotr1.jpg');
const slide2 = require('../../assets/images/lotr2.jpg');
const slide3 = require('../../assets/images/lotr3.jpg');

import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import WelcomeSlides from '../../components/Slides/WelcomeSlides/WelcomeSlides';

type Props = {};

const WelcomeScreen = (props: Props) => {
    const slides = [
        {
            image: slide1,
            text: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'
        },
        {
            image: slide2,
            text: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.'
        },
        {
            image: slide3,
            text: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'
        }
    ];

    const handleSlidesDone = () => alert('Done!');

    return (
        <ScreenContainer
            safeAreaForceInset={{ top: 'never' }}
            safeAreaViewStyles={styles.screenContainer}
        >
            <WelcomeSlides
                slides={slides}
                onSlidesDone={handleSlidesDone}
            />
        </ScreenContainer>
    );
};

export default WelcomeScreen;
