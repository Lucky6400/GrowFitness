import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from '../style/styles';
import { TouchableOpacity } from 'react-native';
import img from '../assets/dumbbell-press.jpg';
import { chestPlans } from '../data/plans/chestPlans';
import { Modal } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { primary } from '../style/theme';

const ChestPlans = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [exModalVisible, setExModalVisible] = useState(false);
    const [idx, setIdx] = useState(0);
    const [exIdx, setExIdx] = useState(0);
    const [restTime, setRestTime] = useState(chestPlans[idx]?.exercises[exIdx]?.time || 0);

    useEffect(() => {
        let timer;
        if (restTime > 0) {
            timer = setTimeout(() => {
                setRestTime(time => time - 1);
            }, 1000);
        } else {
            // Move to the next exercise
            if (exIdx < chestPlans[idx]?.exercises.length) {
                if (chestPlans[idx]?.exercises[exIdx]?.type === 'rest') {
                    setExIdx(prevIdx => prevIdx + 1);
                }
                setRestTime(chestPlans[idx]?.exercises[exIdx]?.time || 0);
            } else {
                // End of exercises, close the modal
                setExModalVisible(false);
            }
        }
        return () => clearTimeout(timer);
    }, [restTime, exIdx, idx]);

    return (
        <>
            <Text style={styles.h01}>Dominating Chest Development</Text>
            <ScrollView horizontal>
                {chestPlans.map((v, i) => (
                    <ImageBackground
                        key={i + Date.now()}
                        source={img}
                        resizeMode="cover"
                        style={styles.wrk01}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setIdx(i);
                                setModalVisible(true);
                            }}
                            style={{ ...styles.homeHero, backgroundColor: '#000' }}
                        ></TouchableOpacity>
                        <Text style={styles.workoutName}>{v.name}</Text>
                        <Text style={styles.planDetails}>{v.level} Level</Text>
                        <Text style={styles.planDetails}>{v.noOfExercises} Exercises</Text>
                    </ImageBackground>
                ))}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.planCont}>
                        <ScrollView contentContainerStyle={styles.modalView}>
                            <Image
                                source={img}
                                resizeMode="cover"
                                style={{ width: '100%', height: 200, marginVertical: 10 }}
                            />
                            <Text style={styles.modalText}>{chestPlans[idx]?.name}</Text>
                            <Text style={styles.planDesc}>{chestPlans[idx]?.description}</Text>

                            <Text style={styles.h01}>exercises</Text>

                            {chestPlans[idx]?.exercises
                                .filter(v => v.type === 'work')
                                .map((v, i) => (
                                    <View key={i + Date.now()} style={styles.exCard}>
                                        <Text style={{ fontWeight: 600 }}>{v.name}</Text>
                                        <Text>x{v.reps}</Text>
                                    </View>
                                ))}
                        </ScrollView>
                        <View
                            style={{
                                width: 200,
                                marginVertical: 10,
                                position: 'absolute',
                                bottom: 0,
                                left: 80,
                            }}
                        >
                            <Button
                                onPress={() => {
                                    setExIdx(0);
                                    setExModalVisible(true);
                                }}
                                color={primary}
                                title="Start"
                            />
                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={exModalVisible}
                            onRequestClose={() => {
                                setExModalVisible(!exModalVisible);
                            }}
                        >
                            <View style={styles.exModalCont}>
                                {chestPlans[idx]?.exercises[exIdx]?.type === 'work' ? (
                                    <>
                                        <Text style={styles.modalText}>
                                            {chestPlans[idx]?.exercises[exIdx]?.name}
                                        </Text>
                                        <Text style={styles.planDesc}>
                                            {chestPlans[idx]?.exercises[exIdx]?.description}
                                        </Text>
                                        <Text style={styles.reps}>{chestPlans[idx]?.exercises[exIdx]?.reps}</Text>
                                        <Text style={styles.RestTime}>{"Reps"}</Text>
                                    </>
                                ) : (
                                    <>
                                        <Text style={styles.modalText}>Take a Rest</Text>
                                        <Text style={styles.RestTime}>{restTime}</Text>
                                    </>
                                )}
                                <View
                                    style={{ position: 'absolute', bottom: 0, width: '100%', height: 60 }}
                                >
                                    {exIdx < chestPlans[idx]?.exercises.length - 1 ? (
                                        <TouchableOpacity
                                            style={styles.nextBtn}
                                            onPress={() => {
                                                setExIdx(prevIdx => prevIdx + 1);
                                                setRestTime(chestPlans[idx]?.exercises[exIdx + 1]?.time || 0);
                                            }}
                                        >
                                            <Text style={styles.bigText}>Next</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.nextBtn}
                                            onPress={() => {
                                                setExModalVisible(false);
                                            }}
                                        >
                                            <Text style={styles.bigText}>Done</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        </Modal>
                    </View>
                </Modal>
            </ScrollView>
        </>
    );
};

export default ChestPlans;
