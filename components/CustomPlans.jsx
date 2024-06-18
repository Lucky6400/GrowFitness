import { View, Text, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from '../style/styles';
import { TouchableOpacity } from 'react-native';
import img from '../assets/dumbbell-press.jpg';
import { Modal } from 'react-native';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fitnessActions } from '../redux/fitnessSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Speech from 'expo-speech';

const CustomPlans = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const customPlans = useSelector(s => s.fitness.customPlans);
    const [exModalVisible, setExModalVisible] = useState(false);
    const [idx, setIdx] = useState(0);
    const [exIdx, setExIdx] = useState(0);
    const [restTime, setRestTime] = useState(customPlans[idx]?.exercises[exIdx]?.time || 0);

    const speak = (text) => {
        //  const thingToSay = '1';
        Speech.speak(text);
    };
    useEffect(() => {
        let timer;
        if (restTime > 0) {
            timer = setTimeout(() => {
                setRestTime(time => time - 1);
            }, 1000);
        } else {
            // Move to the next exercise
            if (exIdx < customPlans[idx]?.exercises?.length) {
                if (customPlans[idx]?.exercises[exIdx]?.type === 'rest') {
                    setExIdx(prevIdx => prevIdx + 1);
                    if (customPlans[idx]?.exercises[exIdx + 1].type === 'work') {
                        speak(`${customPlans[idx]?.exercises[exIdx + 1].reps} ${customPlans[idx]?.exercises[exIdx + 1].name}`)
                    }
                }
                setRestTime(customPlans[idx]?.exercises[exIdx]?.time || 0);
            } else {
                // End of exercises, close the modal
                setExModalVisible(false);
            }
        }
        return () => clearTimeout(timer);
    }, [restTime, exIdx, idx]);

    const dispatch = useDispatch();

    return (
        <>
            <Text style={styles.h01}>Custom plans</Text>
            <ScrollView horizontal>
                {customPlans?.length > 0 ? customPlans.map((v, i) => (
                    <View style={{ width: Dimensions.get("window").width, paddingHorizontal: 10, borderRadius: 20, overflow: 'hidden' }} key={i + Date.now()}>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(fitnessActions.setCurrentPlan({ ...v, index: i }));
                                dispatch(fitnessActions.setModalVisible(true));
                            }}
                            style={styles.editBtn}>
                            <Icon name="edit" style={{ fontSize: 32 }} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                dispatch(fitnessActions.deletePlan(v));
                            }}
                            style={{ ...styles.editBtn, top: 70, backgroundColor: '#b30f00' }}>
                            <Icon name="delete" style={{ fontSize: 32 }} color="#fff" />
                        </TouchableOpacity>
                        <ImageBackground
                            key={i + Date.now()}
                            source={require('../assets/dumbbell-flys.jpg')}
                            resizeMode="cover"
                            style={{ ...styles.wrk01, width: "100%", height: 300, borderRadius: 20 }}
                            imageStyle={{ borderRadius: 20 }}

                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setIdx(i);
                                    setModalVisible(true);
                                    dispatch(fitnessActions.addToRecent({ ...v, date: new Date().toISOString() }))
                                }}
                                activeOpacity={0.8}
                                style={{ ...styles.homeHero, backgroundColor: '#000', borderRadius: 20 }}
                            ></TouchableOpacity>


                            <Text style={styles.workoutName}>{v.name}</Text>
                            <Text style={styles.planDetails}>{v.level} Level</Text>
                            <Text style={styles.planDetails}>{v.noOfExercises} Exercises</Text>
                            <Text style={styles.planDetails}>{v.description}</Text>
                        </ImageBackground>
                    </View>
                ))
                    :
                    <Text>No plans found! Click '+' icon to add one.</Text>
                }

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
                            <Text style={styles.modalText}>{customPlans[idx]?.name}</Text>
                            <Text style={styles.planDesc}>{customPlans[idx]?.description}</Text>

                            <Text style={styles.h01}>exercises</Text>

                            {customPlans[idx]?.exercises
                                .filter(v => v.type === 'work')
                                .map((v, i) => (
                                    <View key={i + Date.now()} style={styles.exCard}>
                                        <Text style={{ fontWeight: "600" }}>{v.name}</Text>
                                        <Text>x{v.reps}</Text>
                                    </View>
                                ))}
                        </ScrollView>
                        <View
                            style={{
                                width: '100%',
                                marginVertical: 0,
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    setExIdx(0);
                                    setExModalVisible(true);
                                    speak(`Ready to go! First exercise ${customPlans[idx]?.exercises[0]?.name}`)
                                    //  Speech.speak(`Ready to go`)
                                }}
                                style={styles.submitBtn}
                            >
                                <Text style={styles.submitText}>
                                    Start
                                </Text>
                            </TouchableOpacity>
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
                                {customPlans[idx]?.exercises[exIdx]?.type === 'work' ? (
                                    <>
                                        <Text style={styles.modalText}>
                                            {customPlans[idx]?.exercises[exIdx]?.name}
                                        </Text>
                                        <Text style={styles.planDesc}>
                                            {customPlans[idx]?.exercises[exIdx]?.description}
                                        </Text>
                                        <Text style={styles.reps}>{customPlans[idx]?.exercises[exIdx]?.reps}</Text>
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
                                    {exIdx < customPlans[idx]?.exercises.length - 1 ? (
                                        <TouchableOpacity
                                            style={styles.nextBtn}
                                            onPress={() => {
                                                setExIdx(prevIdx => prevIdx + 1);
                                                setRestTime(customPlans[idx]?.exercises[exIdx + 1]?.time || 0);
                                                if (customPlans[idx]?.exercises[exIdx + 1].type === 'work') {
                                                    speak(`${customPlans[idx]?.exercises[exIdx + 1].reps} ${customPlans[idx]?.exercises[exIdx + 1].name}`)
                                                } else {
                                                    speak('Take a rest');
                                                }

                                            }}
                                        >
                                            <Text style={styles.bigText}>Next</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.nextBtn}
                                            onPress={() => {
                                                setExModalVisible(false);
                                                dispatch(fitnessActions.markDay());
                                                dispatch(fitnessActions.addTotalWorkouts());
                                                speak(`Well Done! Congratulations!!`)
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

export default CustomPlans;
