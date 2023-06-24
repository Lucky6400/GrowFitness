import { View } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import img01 from '../assets/dumbbell-press.jpg'
import img02 from '../assets/img01.jpg'
import Plans from '../components/Plans'
import { ScrollView } from 'react-native'
import SchedulePlanner from '../components/SchedulePlanner'
import Schedules from '../components/Schedules'

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SchedulePlanner/>
      <Schedules />
      <Plans name={"Dominating Chest Development"} type="Chest" img={img01}/>
      <Plans name={"Guns of steel workout"} type="Arm" img={img02} />
      <Plans name={"Core Crusher Routine"} type="Abs" img={img01}/>
      <Plans name={"Sculpted Lower Body Circuit"} type="Legs" img={img02} />
      <Plans name={"Shoulder and Back Workout"} type="Shoulder & back" img={img02} />
    </ScrollView>
  )
}

export default ExploreScreen