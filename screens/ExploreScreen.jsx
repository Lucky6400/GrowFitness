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
import { useDispatch } from 'react-redux'
import { fitnessActions } from '../redux/fitnessSlice'
import CustomPlans from '../components/CustomPlans'
import { Alert } from 'react-native'

const ExploreScreen = () => {
  const [visible, setVisible] = useState(false);
  const [exVisible, setExVisible] = useState(false);
  const [restVisible, setRestVisible] = useState(false);
  const [planName, setPlanName] = useState("");
  const [planDesc, setPlanDesc] = useState("");
  const [restTime, setRestTime] = useState(0);
  const [planLevel, setPlanLevel] = useState("");
  const [noOfReps, setNoOfReps] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [currEx, setCurrEx] = useState(null);
  const dispatch = useDispatch();

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
        <CustomPlans />
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
                <TouchableOpacity onPress={() => setRestVisible(true)} style={styles.addEx}>
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
                    {v.type === 'work' ? v.name : `Rest Time ${v.time}s`}
                  </Text>

                  {v.type === 'work' ?
                    <>
                      <Text style={styles.exDesc}>
                        {v.type !== 'rest' && v?.description?.slice(0, 80) + "..."}
                      </Text>

                      <Text>
                        Reps: {v.reps}
                      </Text>
                    </>
                    :
                    <></>
                  }



                </TouchableOpacity>
              )) : <></>}

              <TouchableOpacity onPress={() => {
                const payload = {
                  name: planName,
                  description: planDesc,
                  level: planLevel,
                  noOfExercises: exercises.filter(v => v.type === 'work').length,
                  exercises: exercises
                }

                if (exercises[exercises.length - 1]?.type === 'rest') {
                  Alert.alert("Rest cannot be at the end!");
                  return null;
                } else if (exercises.length === 0) {
                  Alert.alert("Please add some exercises!")
                  return null;
                } else if (planName === "") {
                  Alert.alert("Please add a plan name!")
                  return null;
                } else if(planDesc === "") {
                  Alert.alert("Please add a plan description!")
                  return null;
                } else if (planLevel === "") {
                  Alert.alert("Please select a plan level!")
                  return null;
                }


                dispatch(fitnessActions.addPlan(payload));
                setExercises([]);
                setPlanName("");
                setPlanDesc("");
                setPlanLevel("");
                setVisible(false);
              }} style={styles.addEx}>
                <Text style={styles.addExTxt}>
                  Add Plan
                </Text>
              </TouchableOpacity>


              <Modal
                animationType="slide"
                transparent={true}
                visible={restVisible}
                onRequestClose={() => {
                  setRestVisible(false);
                }}>
                <View style={styles.exCont}>
                  <View style={{ ...styles.exView, height: 100 }}>
                    <TextInput
                      placeholder='Set rest time'
                      keyboardType='numeric'
                      onChangeText={e => setRestTime(e)}
                      style={{ ...styles.inputStyle, textAlignVertical: 'center' }}
                    />
                    <Button
                      disabled={restTime == 0}
                      onPress={() => {
                        setExercises(p => ([...p, {
                          id: exercises.length + Date.now() + 1,
                          time: parseInt(restTime),
                          type: 'rest'
                        }]));
                        setRestVisible(false);
                        setCurrEx(null);
                      }}
                      title="Done" color={primary} />
                  </View>
                </View>
              </Modal>

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