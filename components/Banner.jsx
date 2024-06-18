import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { primary } from '../style/theme'

const Banner = ({title}) => {
    return (
        <View style={styles.banner}>
            <View style={{
                position: 'absolute',
                backgroundColor: primary,
                width: 10,
                height: 90,
                left: 20,
                transform: 'rotate(25deg)',
                top: 20
            }}></View>

            
            <Text style={{ ...styles.addExTxt, color: '#000', textTransform: 'uppercase', fontWeight: "700" }}>{title}</Text>


            <View style={{
                position: 'absolute',
                backgroundColor: primary,
                width: 10,
                height: 90,
                right: 20,
                transform: 'rotate(25deg)',
                top: -20
            }}></View>

        </View>
    )
}

export default Banner