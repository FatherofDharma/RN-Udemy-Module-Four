import { StyleSheet } from 'react-native';

//alternate way to style different tags rather than using components and styling their {props.children}
export default StyleSheet.create({
    bodyText: {
        fontFamily: 'open-sans',
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});