import { View } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import img01 from '../assets/dumbbell-press.jpg'
import img02 from '../assets/img01.jpg'
import Plans from '../components/Plans'
import { ScrollView } from 'react-native'
import SchedulePlanner from '../components/SchedulePlanner'
import Schedules from '../components/Schedules'
import ChestPlans from '../components/ChestPlans'
import ArmPlans from '../components/ArmPlans'
import AbsPlans from '../components/AbsPlans'
import ShoulderPlans from '../components/ShoulderPlans'
import LegPlans from '../components/LegPlans'

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SchedulePlanner />
      <Schedules />
      <ChestPlans />
      <ArmPlans />
      <AbsPlans />
      <ShoulderPlans />
      <LegPlans />
    </ScrollView>
  )
}

export default ExploreScreen