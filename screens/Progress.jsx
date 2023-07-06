import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

const ProgressScreen = () => {
    const [selected, setSelected] = useState('');
    const markedDays = useSelector(s => s.fitness.daysMarked);
    const recentPlans = useSelector(s => s.fitness.recentPlans);

    return (
        <ScrollView style={{ ...styles.container, flex: 1 }}>
            <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={markedDays}
            />
            {/* <Text style={styles.h01}>
                Info
            </Text> */}
            <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.h02}>
                        Days completed
                    </Text>
                    <Text>
                        {Object.keys(markedDays).length}
                    </Text>
                </View>
            </View>

            <Text style={styles.h01}>
                Recent History
            </Text>
            {recentPlans.length > 0 ?
                recentPlans.map((v, i) => (
                    <View key={i + Date.now()} style={styles.histCard}>
                        <Text>{v.name}</Text>
                        <Text style={styles.smallText}>
                            {new Date(v.date).toLocaleString()}
                        </Text>
                    </View>
                ))

                : <></>}


        </ScrollView>
    )
}

export default ProgressScreen