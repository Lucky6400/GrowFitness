import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ImageBackground } from 'react-native'
import image from '../assets/homeHero.jpg'
import { ScrollView } from 'react-native-gesture-handler'
import { gymMotivationalQuotes } from '../data/quotes'
import { useSelector } from 'react-redux'
import Plans from '../components/ChestPlans'

export default function HomeScreen({ navigation, route }) {
  const recentPlans = useSelector(s => s.fitness.recentPlans);
//  console.log(recentPlans[2]);

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
        {recentPlans.length > 0 ?
          <Plans title={"Continue..."} plans={recentPlans?.slice(0, 1)} />
          : <></>}

        {recentPlans.length > 0 ?
          <Plans title={"Recently Done"} plans={recentPlans} />
          : <></>}


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