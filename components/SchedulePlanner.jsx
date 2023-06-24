import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { primary, primaryLighter } from '../style/theme';
import { TouchableOpacity } from 'react-native';

const SchedulePlanner = () => {
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
                    Normal schedule
                </Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                    {["Chest", "Arms", "Shoulder & Back", "Legs", "Rest", "Rest", "Rest"].map((v, i) => (
                        <View key={i + Date.now()} style={{ width: '50%' }}>
                            <Text style={{ ...styles.goalLeft, fontSize: 12 }}>
                                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i]}:
                            </Text>
                            <Text style={{ ...styles.goalRight, fontSize: 12, }}>
                                {v}
                            </Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={{ position: "absolute", top: 10, right: 15 }}>
                    <MaterialIcons name="edit" size={24} color="#fff" />
                </TouchableOpacity>
            </LinearGradient>
        </>
    )
}

export default SchedulePlanner