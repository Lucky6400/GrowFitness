import { View } from 'react-native'
import React from 'react'
import { styles } from '../style/styles'
import { ScrollView } from 'react-native'
import SchedulePlanner from '../components/SchedulePlanner'
import Schedules from '../components/Schedules'
import ChestPlans from '../components/ChestPlans'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native'
import { useState } from 'react'
import { Text } from 'react-native'
import { TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { primary, primaryTransparent, secondary } from '../style/theme'
import { Button } from 'react-native'
import { chestEx } from '../data/exerciseTypes/chest'
import { useDispatch, useSelector } from 'react-redux'
import { fitnessActions } from '../redux/fitnessSlice'
import CustomPlans from '../components/CustomPlans'
import { Alert } from 'react-native'
import { useEffect } from 'react'
import { chestPlans } from '../data/plans/chestPlans'
import { armPlans } from '../data/plans/armPlans'
import { absPlans } from '../data/plans/absPlans'
import { shoulderPlans } from '../data/plans/shoulderPlans'
import { legPlans } from '../data/plans/legsPlans'
import absEx from '../data/exerciseTypes/abs'
import { shoulderAndBackExercises } from '../data/exerciseTypes/shoulderAndBack'
import { armEx } from '../data/exerciseTypes/arms'
import { legExercises } from '../data/exerciseTypes/legs'
import Banner from '../components/Banner'
import { RBchestplans } from '../data/plans/ResistanceBand/RBchestplans'
import { RBarmsplans } from '../data/plans/ResistanceBand/RBarmsplans'
import { RBshoudlerplans } from '../data/plans/ResistanceBand/RBshoulderplans'
import { RBlegsplans } from '../data/plans/ResistanceBand/RBlegsplans'
import { RBExercises } from '../data/exerciseTypes/ResistanceBand/exercises'

const ExploreScreen = React.memo(() => {
  const currentPlan = useSelector(s => s.fitness.currentPlan)
  const modalVisible = useSelector(s => s.fitness.modalVisible)
  const [exVisible, setExVisible] = useState(false);
  const [restVisible, setRestVisible] = useState(false);
  const [planName, setPlanName] = useState(currentPlan ? currentPlan.name : "");
  const [planDesc, setPlanDesc] = useState(currentPlan ? currentPlan.description : "");
  const [restTime, setRestTime] = useState(0);
  const [planLevel, setPlanLevel] = useState(currentPlan ? currentPlan.level : "");
  const [noOfReps, setNoOfReps] = useState(0);
  const [exercises, setExercises] = useState(currentPlan ? currentPlan.exercises : []);
  const [currEx, setCurrEx] = useState(null);
  const dispatch = useDispatch();
  let totalExercises = [...chestEx, ...absEx, ...shoulderAndBackExercises, ...armEx, ...legExercises, ...RBExercises]
  const [allExercises, setAllExercises] = useState(totalExercises);

  const obj = {
    'Shoulder & Back': shoulderAndBackExercises,
    'Arms': armEx,
    'Legs': legExercises,
    'Abs': absEx,
    'Resistance Band': RBExercises
  }

  useEffect(() => {
    //console.log(currentPlan)
    setPlanName(currentPlan ? currentPlan.name : "");
    setPlanLevel(currentPlan ? currentPlan.level : "");
    setPlanDesc(currentPlan ? currentPlan.description : "");
    setExercises(currentPlan ? currentPlan.exercises : []);
  }, [currentPlan])
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <SchedulePlanner />
        <Schedules />
        <CustomPlans />

        <Banner title="With Dumbbells"/>
        <ChestPlans plans={chestPlans} title={"Dominating Chest Development"} />
        <ChestPlans plans={absPlans} title={" Core crusher routine"} />
        <ChestPlans plans={armPlans} title={"Guns of steel"} />
        <ChestPlans plans={shoulderPlans} title={"Shoulder and Back workout"} />
        <ChestPlans plans={legPlans} title={"Sculpted lower body circuit"} />
        <Banner title={"WIth Resistance Band"} />
        <ChestPlans plans={[...RBchestplans, ...RBarmsplans, ...RBshoudlerplans, ...RBlegsplans]} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          dispatch(fitnessActions.setCurrentPlan(null));
          dispatch(fitnessActions.setModalVisible(false));
        }}>
        <View style={styles.addPlanCont}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Add Custom Plan</Text>
            <ScrollView>
              <TextInput
                placeholder="Plan Name"
                defaultValue={planName}
                style={{ ...styles.inputStyle, textAlignVertical: 'center' }}
                onChangeText={e => setPlanName(e)}
              />

              <TextInput
                placeholder="Plan Description"
                multiline
                defaultValue={planDesc}
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
                } else if (planDesc === "") {
                  Alert.alert("Please add a plan description!")
                  return null;
                } else if (planLevel === "") {
                  Alert.alert("Please select a plan level!")
                  return null;
                }

                if (currentPlan) {
                  dispatch(fitnessActions.editPlan({ ...payload, oldName: currentPlan.name }))
                } else {
                  dispatch(fitnessActions.addPlan(payload));
                }
                dispatch(fitnessActions.setCurrentPlan(null));
                setExercises([]);
                setPlanName("");
                setPlanDesc("");
                setPlanLevel("");
                dispatch(fitnessActions.setModalVisible(false));
              }} style={styles.addEx}>
                <Text style={styles.addExTxt}>
                  Submit
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
                    <Text>Filter:</Text>
                    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', paddingVertical: 15, height: 150, gap: 10 }}>

                      {Object.keys(obj).map((v, i) => (
                        <TouchableOpacity
                          onPress={() => {
                            setAllExercises(obj[v])
                          }}
                          key={i + Date.now()}
                          style={styles.filterBtn}>
                          <Text style={{ color: '#fff' }}>{v}</Text>
                        </TouchableOpacity>
                      ))}


                    </ScrollView>

                    <Text>Exercises:</Text>
                    <ScrollView>
                      {allExercises.map((v, i) => (
                        <TouchableOpacity
                          onPress={() => setCurrEx(v)}
                          key={i + Date.now()} style={{ ...styles.exListCard, borderColor: currEx?.name === v.name ? primary : secondary, backgroundColor: currEx?.name === v.name ? primaryTransparent : 'transparent' }}>
                          <Text style={{ color: currEx?.name === v.name ? primary : "#000", textTransform: 'capitalize' }}>
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
                        if(!currEx) {
                          Alert.alert("Please select an exersize");
                          return null;
                        }
                        if(!noOfReps) {
                          Alert.alert("Please enter no. of reps");
                          return null;
                        }
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



      <TouchableOpacity onPress={() => {
        setExercises([]);
        setPlanName("");
        setPlanDesc("");
        setPlanLevel("");
        dispatch(fitnessActions.setModalVisible(true))
      }} style={styles.plusBtn}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>

    </View>
  )
})

export default ExploreScreen