import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { LinearGradient } from 'expo-linear-gradient';
import { primary, primaryLighter } from '../style/theme';
import { weeks } from '../data/weeks';
import { useSelector } from 'react-redux';
import { schedules } from '../data/schedules/schedules';

const SchedulePlanner = () => {
    const currentSchedule = useSelector(s => s.fitness.currSch);
    const schedule = currentSchedule?.schedule || schedules[0].schedule;
    return (
        <>
            <Text style={styles.h01}>Schedule your way</Text>
            <LinearGradient
                // Button Linear Gradient
                colors={[primary, primaryLighter]}
                style={styles.scheduler}>
                <Text style={{ ...styles.workoutName, margin: 0, fontSize: 20 }}>
                    Current schedule
                </Text>
                <Text style={styles.goalRight}>
                    {currentSchedule?.level || schedules[0].level}
                </Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                    {schedule.map((v, i) => (
                        <View key={i + Date.now()} style={{ width: '50%' }}>
                            <Text style={{ ...styles.goalLeft, fontSize: 12 }}>
                                {weeks[i]}:
                            </Text>
                            <Text style={{ ...styles.goalRight, fontSize: 12, }}>
                                {v}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* <TouchableOpacity style={{ position: "absolute", top: 10, right: 15 }}>
                    <MaterialIcons name="edit" style={{ fontSize: 24}} color="#fff" />
                </TouchableOpacity> */}
            </LinearGradient>
        </>
    )
}

export default SchedulePlanner