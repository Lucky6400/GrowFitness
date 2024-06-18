import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ScrollView } from 'react-native'
import { schedules } from '../data/schedules/schedules'
import { useState } from 'react'
import { Modal } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { primary, primaryLighter } from '../style/theme'
import { weeks } from '../data/weeks'
import { useDispatch } from 'react-redux'
import { fitnessActions } from '../redux/fitnessSlice'

const Schedules = () => {
    const [visible, setVisible] = useState(false);
    const [currIdx, setCurrIdx] = useState(null);
    const dispatch = useDispatch();
    return (
        <>
            <Text style={styles.h01}>
                Popular Schedules🔥
            </Text>
            <ScrollView horizontal>
                {schedules.map((v, i) => (
                    <TouchableOpacity
                        onPress={() => {
                            setCurrIdx(i);
                            setVisible(true);
                        }}
                        key={i + Date.now()} style={styles.sch01}>
                        <Text style={styles.workoutName}>
                            {v.level}
                        </Text>
                        <Text style={styles.schDesc}>
                            {v.description}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setVisible(false);
                }}>
                <View style={styles.exCont}>
                    <View style={{ ...styles.exView, backgroundColor: primaryLighter, height: 300, padding: 0 }}>
                        <Text style={{ ...styles.modalText, borderBottomColor: '#fff' }}>{schedules[currIdx]?.level}</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                            {schedules[currIdx]?.schedule.map((v, i) => (
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
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(fitnessActions.setSchedule(schedules[currIdx]));
                                setVisible(false);
                            }}
                            style={{ width: '100%', height: 60, backgroundColor: '#fff', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 24, color: primary, fontWeight: "700" }}>
                                Set as current
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Schedules