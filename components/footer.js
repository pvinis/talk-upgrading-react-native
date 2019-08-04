import React from 'react'
import { useDeck } from '@mdx-deck/components'
import { View, Text } from 'react-native-web'


export const Footer = props => {
    const state = useDeck()

    return (
        <View style={{
            position: 'absolute',
            bottom: 0,
            height: 48,
            borderTopWidth: 1,
            borderTopColor: 'red',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <Text>{state.index} / {state.length}</Text>
            <Text>React Native EU 2019</Text>
            <Text>Pavlos Vinieratos</Text>
            <Text accessibilityRole='link' target="_blank" href='https://twitter.com/pvinis'>@pvinis</Text>
        </View>
    )
}
