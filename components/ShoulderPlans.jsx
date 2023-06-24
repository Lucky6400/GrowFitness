import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { ImageBackground } from 'react-native'
import { styles } from '../style/styles'
import { TouchableOpacity } from 'react-native'
import img from '../assets/img01.jpg'

const ShoulderPlans = () => {
    return (
        <>
            <Text style={styles.h01}>
                Shoulder and Back Workout
            </Text>
            <ScrollView horizontal>
                {Array.from({ length: 5 }, () => 0).map((v, i) => (
                    <ImageBackground key={i + Date.now()} source={img} resizeMode='cover' style={styles.wrk01}>
                        <TouchableOpacity style={{ ...styles.homeHero, backgroundColor: '#000' }}></TouchableOpacity>
                        <Text style={styles.workoutName}>
                            Shoulder workout {String(i + 1).padStart(2, 0)}
                        </Text>
                        <Text style={styles.planDetails}>
                            Beginner Level
                        </Text>
                        <Text style={styles.planDetails}>
                            10 Exercises
                        </Text>
                    </ImageBackground>
                ))}
            </ScrollView>
        </>
    )
}

export default ShoulderPlans