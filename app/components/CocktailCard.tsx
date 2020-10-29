import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const CocktailCard = ({ image, title }) => {
    return (
        <View style={styles.cockTailCard}>
            <Image source={{ uri: image, width: 100, height: 100 }} />
            <Text style={styles.cocktailTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cocktailTitle: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18.75,
        color: '#7E7E7E',
        marginLeft: 20
    },
    cockTailCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:40
    }
});