import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { styles } from '../style/styles';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native';
import { primary } from '../style/theme';
import * as Speech from 'expo-speech';
import { useDispatch } from 'react-redux';
import { fitnessActions } from '../redux/fitnessSlice';
import img from '../assets/dumbbell-press.jpg';
import img2 from '../assets/dumbbell-flys.jpg';
import YoutubePlayer from "react-native-youtube-iframe";

const speak = (text) => {
    //  const thingToSay = '1';
    Speech.speak(text);
};

const Plans = ({ plans, title }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [exModalVisible, setExModalVisible] = useState(false);
    const [idx, setIdx] = useState(0);
    const [exIdx, setExIdx] = useState(0);
    const [restTime, setRestTime] = useState(plans[idx]?.exercises[exIdx]?.time || 0);
    //   console.log(plans[1].image)

    const getDataURL = (img) => {
        const fileReader = new FileReader();

        fileReader.onload = function (event) {
            const dataURL = event.target.result;
            // Use the dataURL as needed
            console.log(dataURL);
            return dataURL
        };

        fileReader.readAsDataURL(img);
    }
    useEffect(() => {
        let timer;
        if (restTime > 0) {
            timer = setTimeout(() => {
                setRestTime(time => time - 1);
            }, 1000);
        } else {
            // Move to the next exercise
            if (exIdx < plans[idx]?.exercises.length) {
                if (plans[idx]?.exercises[exIdx]?.type === 'rest') {
                    setExIdx(prevIdx => prevIdx + 1);
                    if (plans[idx]?.exercises[exIdx + 1].type === 'work') {
                        speak(`${plans[idx]?.exercises[exIdx + 1].reps} ${plans[idx]?.exercises[exIdx + 1].name}`)
                    }
                }
                setRestTime(plans[idx]?.exercises[exIdx]?.time || 0);
            } else {
                // End of exercises, close the modal
                setExModalVisible(false);
            }
        }
        return () => clearTimeout(timer);
    }, [restTime, exIdx, idx]);

    const dispatch = useDispatch();
    const [playing, setPlaying] = useState(true);

    return (
        <>
            {title ?
                <Text style={styles.h01}>{title}</Text>
                : <></>}

            <ScrollView horizontal>
                {plans.map((v, i) => (
                    <TouchableOpacity
                        key={i + Date.now()}
                        onPress={() => {
                            setIdx(i);
                            setModalVisible(true);
                            dispatch(fitnessActions.addToRecent({ ...v, date: new Date().toISOString() }))
                        }}>

                        <ImageBackground

                            source={{ uri: String(v.image) }}
                            resizeMode="cover"
                            //  defaultSource={img2}
                            //  borderRadius={10}
                            imageStyle={{ borderRadius: 10 }}
                            style={styles.wrk01}
                        >
                            <ImageBackground imageStyle={{ borderRadius: 10 }} progressiveRenderingEnabled source={img2} style={{ ...styles.homeHero, zIndex: -2, backgroundColor: 'transparent' }}></ImageBackground>
                            <View

                                style={{ ...styles.homeHero, backgroundColor: '#000', borderRadius: 10 }}
                            ></View>
                            <Text style={styles.workoutName}>{v.name}</Text>
                            <Text style={styles.planDetails}>{v.level} Level</Text>
                            <Text style={styles.planDetails}>{v.noOfExercises} Exercises</Text>
                        </ImageBackground>
                    </TouchableOpacity>
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
                                source={{ uri: String(plans[idx].image) }}
                                resizeMode="cover"
                                style={{ width: '100%', height: 200, marginVertical: 10 }}
                            />
                            <Text style={styles.modalText}>{plans[idx]?.name}</Text>
                            <Text style={styles.planDesc}>{plans[idx]?.description}</Text>

                            <Text style={styles.h01}>exercises</Text>

                            {plans[idx]?.exercises
                                .filter(v => v.type === 'work')
                                .map((v, i) => (
                                    <View key={i + Date.now()} style={styles.exCard}>
                                        <Text style={{ fontWeight: 600, textTransform: 'uppercase' }}>{v.name}</Text>
                                        <Text>x{v.reps}</Text>
                                    </View>
                                ))}
                        </ScrollView>
                        <View
                            style={{
                                width: '100%',
                                marginVertical: 10,
                                position: 'absolute',
                                bottom: 0,
                            }}
                        >
                            <Button
                                onPress={() => {
                                    setExIdx(0);
                                    setExModalVisible(true);
                                    speak(`Ready to go! First exercise ${plans[idx]?.exercises[0]?.name}`)
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
                                setExIdx(null);
                                setRestTime(0);
                                Speech.stop();
                                setExModalVisible(!exModalVisible);
                            }}
                        >
                            <ScrollView contentContainerStyle={styles.exModalCont}>
                                {plans[idx]?.exercises[exIdx]?.type === 'work' ? (
                                    <>
                                        {plans[idx]?.exercises[exIdx].videoId ?
                                            <YoutubePlayer
                                                height={250}
                                                play={playing}
                                                videoId={plans[idx]?.exercises[exIdx].videoId}
                                                initialPlayerParams={{
                                                    start: plans[idx]?.exercises[exIdx]?.timestamp,
                                                    end: plans[idx]?.exercises[exIdx + 2]?.timestamp,
                                                    controls: true,

                                                }}
                                                onChangeState={e => {
                                                    if (e === 'ended' || e === 'paused') {
                                                        setPlaying(false);
                                                    }
                                                }}

                                            />
                                            : <></>}

                                        <Text style={styles.modalText}>
                                            {plans[idx]?.exercises[exIdx]?.name}
                                        </Text>
                                        <Text style={styles.planDesc}>
                                            {plans[idx]?.exercises[exIdx]?.description}
                                        </Text>
                                        <Text style={styles.reps}>{plans[idx]?.exercises[exIdx]?.reps}</Text>
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
                                    {exIdx < plans[idx]?.exercises.length - 1 ? (
                                        <TouchableOpacity
                                            style={styles.nextBtn}
                                            onPress={() => {
                                                Speech.stop();
                                                setExIdx(prevIdx => prevIdx + 1);
                                                setRestTime(plans[idx]?.exercises[exIdx + 1]?.time || 0);
                                                if (plans[idx]?.exercises[exIdx + 1].type === 'work') {

                                                    speak(`${plans[idx]?.exercises[exIdx + 1].reps} ${plans[idx]?.exercises[exIdx + 1].name}`)
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
                                                speak(`Well done! Congratulations`)
                                            }}
                                        >
                                            <Text style={styles.bigText}>Done</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </ScrollView>
                        </Modal>
                    </View>
                </Modal>
            </ScrollView>
        </>
    );
};

export default Plans;
