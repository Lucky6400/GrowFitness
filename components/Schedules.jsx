import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ScrollView } from 'react-native'

const Schedules = () => {
    return (
        <>
            <Text style={styles.h01}>
                Popular Schedules🔥
            </Text>
            <ScrollView horizontal>
                {Array.from({ length: 5 }, () => 0).map((v, i) => (
                    <View key={i + Date.now()} style={styles.sch01}>
                        
                    </View>
                ))}
            </ScrollView>
        </>
    )
}

export default Schedules