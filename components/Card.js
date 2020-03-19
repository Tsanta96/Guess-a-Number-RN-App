import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        //...unpacks the key value pairs into the surrounding object below, also "...props.style"
        //takes in the styles that are passed to this custom component and overrides any conflicting 
        //styles with "...styles.card" since "props.style" is after.
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
})

export default Card;
