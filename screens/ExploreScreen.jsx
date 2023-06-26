import { View } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ScrollView } from 'react-native'
import SchedulePlanner from '../components/SchedulePlanner'
import Schedules from '../components/Schedules'
import ChestPlans from '../components/ChestPlans'
import ArmPlans from '../components/ArmPlans'
import AbsPlans from '../components/AbsPlans'
import ShoulderPlans from '../components/ShoulderPlans'
import LegPlans from '../components/LegPlans'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native'
import { useState } from 'react'
import { Text } from 'react-native'
import { TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { primary, primaryTransparent, secondary } from '../style/theme'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Button } from 'react-native'
import { chestEx } from '../data/exerciseTypes/chest'

const ExploreScreen = () => {
  const [visible, setVisible] = useState(false);
  const [exVisible, setExVisible] = useState(false);
  const [planName, setPlanName] = useState("");
  const [planDesc, setPlanDesc] = useState("");
  const [planLevel, setPlanLevel] = useState("");
  const [noOfReps, setNoOfReps] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [currEx, setCurrEx] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <SchedulePlanner />
        <Schedules />
        <ChestPlans />
        <ArmPlans />
        <AbsPlans />
        <ShoulderPlans />
        <LegPlans />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.addPlanCont}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Add Custom Plan</Text>
            <ScrollView>
              <TextInput
                placeholder="Plan Name"
                style={{ ...styles.inputStyle, textAlignVertical: 'center' }}
                onChangeText={e => setPlanName(e)}
              />

              <TextInput
                placeholder="Plan Description"
                multiline
                numberOfLines={5}
                style={styles.inputStyle}
                onChangeText={e => setPlanDesc(e)}
              />

              <Picker
                selectedValue={planLevel}
                onValueChange={(itemValue, itemIndex) =>
                  setPlanLevel(itemValue)
                }>
                <Picker.Item enabled={false} label="Select Level" value="" />
                <Picker.Item label="Beginner" value="Beginner" />
                <Picker.Item label="Intermediate" value="Intermediate" />
                <Picker.Item label="Hardcore" value="Hardcore" />
              </Picker>



              <Text style={styles.customPlanHeading}>Exercises:</Text>
              {exercises[exercises.length - 1]?.type === 'work' ?
                <TouchableOpacity onPress={() => setExVisible(true)} style={styles.addEx}>
                  <Text style={styles.addExTxt}>
                    Add Rest
                  </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setExVisible(true)} style={styles.addEx}>
                  <Text style={styles.addExTxt}>
                    Add Exercise
                  </Text>
                </TouchableOpacity>
              }


              {exercises.length ? exercises.map((v, i) => (
                <TouchableOpacity
                  key={i + Date.now()}
                  onPress={() => {
                    setExercises(p => p.filter(s => s.id !== v.id))
                  }}
                  style={{ ...styles.exListCard, width: '95%', alignSelf: 'center' }}>
                  <Text>
                    {v.name}
                  </Text>
                  <Text style={styles.exDesc}>
                    {v.description?.slice(0, 80) + "..."}
                  </Text>
                  <Text>
                    Reps: {v.reps}
                  </Text>
                </TouchableOpacity>
              )) : <></>}

              <Modal
                animationType="slide"
                transparent={true}
                visible={exVisible}
                onRequestClose={() => {
                  setExVisible(false);
                }}>
                <View style={styles.exCont}>
                  <View style={styles.exView}>
                    <ScrollView>
                      {chestEx.map((v, i) => (
                        <TouchableOpacity
                          onPress={() => setCurrEx(v)}
                          key={i + Date.now()} style={{ ...styles.exListCard, borderColor: currEx?.name === v.name ? primary : secondary, backgroundColor: currEx?.name === v.name ? primaryTransparent : 'transparent' }}>
                          <Text style={{ color: currEx?.name === v.name ? primary : "#000" }}>
                            {v.name}
                          </Text>
                          <Text style={styles.exDesc}>
                            {v.description}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                    <TextInput
                      onChangeText={e => setNoOfReps(e)}
                      style={styles.inputStyle} placeholder="No. of Reps" keyboardType='numeric' />
                    <Button
                      onPress={() => {
                        setExercises(p => ([...p, {
                          ...currEx,
                          reps: noOfReps,
                          type: 'work'
                        }]));
                        setExVisible(false);
                        setCurrEx(null);
                      }}
                      title="Done" color={primary} />
                  </View>
                </View>
              </Modal>
            </ScrollView>

          </View>
        </View>
      </Modal>



      <TouchableOpacity onPress={() => setVisible(true)} style={styles.plusBtn}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>

    </View>
  )
}

export default ExploreScreen