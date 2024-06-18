import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ImageBackground } from 'react-native'
import image from '../assets/homeHero.jpg'
import { ScrollView } from 'react-native'
import { gymMotivationalQuotes } from '../data/quotes'
import { useSelector } from 'react-redux'
import Plans from '../components/ChestPlans'
import BmiComponent from '../components/BMI'

export default function HomeScreen({ navigation, route }) {
  const recentPlans = useSelector(s => s.fitness.recentPlans);
  //  console.log(recentPlans[2]);
  const currHeightInFt = useSelector(s => s.fitness.currHeightFt);
  const currHeightInInch = useSelector(s => s.fitness.currHeightIn);
  const currWeight = useSelector(s => s.fitness.currWeight);
  const tarWeight = useSelector(s => s.fitness.tarWeight);
  const firstName = useSelector(s => s.fitness.firstName);
  const currentGoal = useSelector(s => s.fitness.currentGoal);
  const totalWorkouts = useSelector(s => s.fitness.totalWorkouts);

  const heightInMeter = (currHeightInFt * 0.3048) + (currHeightInInch * 0.0254);
  const bmi = currWeight / (heightInMeter * heightInMeter);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageHero}>
        <View style={styles.homeHero}></View>
        <Text style={styles.heroHeading}>
          Hey there, {firstName}!
        </Text>

        <Text style={styles.heroQuote}>
          " {gymMotivationalQuotes[Math.floor(Math.random() * gymMotivationalQuotes.length)]} "
        </Text>

        <View style={styles.heroGoal}>
          <Text style={styles.goalLeft}>
            Current Goal:
          </Text>
          <Text style={styles.goalRight}>
            {currentGoal}
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
              {currWeight ? currWeight + "KG" : "N.A"}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              Current HEIGHT
            </Text>
            <Text>
              {currHeightInFt}ft. {currHeightInInch}in
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              bmi
            </Text>
            <BmiComponent bmi={bmi} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              target weight
            </Text>
            <Text>
              {tarWeight ? tarWeight + "KG" : "N.A"}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.h02}>
              total workouts
            </Text>
            <Text>
              {totalWorkouts ? totalWorkouts : "0"}
            </Text>
          </View>
        </View>


      </View>
    </ScrollView>
  )
}