import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ImageBackground } from 'react-native'
import image from '../assets/homeHero.jpg'
import { ScrollView } from 'react-native-gesture-handler'
import { gymMotivationalQuotes } from '../data/quotes'
import img01 from '../assets/img01.jpg'
import { TouchableOpacity } from 'react-native'

export default function HomeScreen({ navigation, route }) {

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageHero}>
        <View style={styles.homeHero}></View>
        <Text style={styles.heroHeading}>
          Good morning, Lucky!
        </Text>

        <Text style={styles.heroQuote}>
          " {gymMotivationalQuotes[Math.floor(Math.random() * gymMotivationalQuotes.length)]} "
        </Text>

        <View style={styles.heroGoal}>
          <Text style={styles.goalLeft}>
            Current Goal:
          </Text>
          <Text style={styles.goalRight}>
            Muscle Building
          </Text>
        </View>

      </ImageBackground>

      <View style={styles.homeCenter}>
        <Text style={styles.h01}>
          Continue...
        </Text>
        <ImageBackground source={img01} style={styles.continue} resizeMode="cover">
          <TouchableOpacity onPress={() => console.log("presssed")} style={{ ...styles.homeHero, backgroundColor: '#000' }}></TouchableOpacity>
          <Text style={styles.workoutName}>
            Arms Workout - Dumbbells
          </Text>

          <Text style={styles.workoutName}>
            DAY - 20
          </Text>

          <View style={{ ...styles.workoutProgress, width: '70%' }}></View>
        </ImageBackground>

        <Text style={styles.h01}>
          Recently Done
        </Text>

        <ScrollView horizontal>

          {Array.from({ length: 5 }, () => 0).map((v, i) => (
            <ImageBackground key={i + Date.now()} source={img01} resizeMode='cover' style={styles.wrk01}>
              <TouchableOpacity style={{ ...styles.homeHero, backgroundColor: '#000' }}></TouchableOpacity>
              <Text style={styles.workoutName}>
                Arms Workout - Dumbbells
              </Text>
            </ImageBackground>
          ))}

        </ScrollView>

        <Text style={styles.h01}>
          Your current status
        </Text>
        <View style={styles.status}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              Current WEIGHT
            </Text>
            <Text>
              62.00KG
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              Current HEIGHT
            </Text>
            <Text>
              5ft. 7in
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              bmi
            </Text>
            <Text>
              21.3
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              target weight
            </Text>
            <Text>
              70.00KG
            </Text>
          </View>
        </View>


      </View>
    </ScrollView>
  )
}