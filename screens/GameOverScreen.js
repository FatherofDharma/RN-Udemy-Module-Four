import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
          fadeDuration={1000}
            // source={require("../assets/success.png")}
            //network images using links MUST have a set width and height, because react native doesn't know their size
            source={{
              uri:
                'http://www.susanharpertodd.com/sites/default/files/gallerix/albums/1/14/original/57b0e49316c48b87f2ba7fbf7d1da65ef5519f0e.jpg'
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
        <BodyText>Number was: {props.userNumber}</BodyText>
        <Button title="NEW GAME" onPress={props.onRestart} />
      </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
});

export default GameOverScreen;
