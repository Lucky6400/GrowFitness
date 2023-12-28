import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from '../style/styles'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import img from '../assets/img01.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react'
import { Modal, Platform } from 'react-native'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fitnessActions } from '../redux/fitnessSlice'
import { Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType, requestCameraPermissionsAsync } from 'expo-camera';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function ProfileScreen() {
  const [type, setType] = useState(CameraType.back);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [remiModal, setRemiModal] = useState(false);
  const currHeightInFt = useSelector(s => s.fitness.currHeightFt);
  const currHeightInInch = useSelector(s => s.fitness.currHeightIn);
  const currWeight = useSelector(s => s.fitness.currWeight);
  const tarWeight = useSelector(s => s.fitness.tarWeight);
  const firstName = useSelector(s => s.fitness.firstName);
  const lastName = useSelector(s => s.fitness.lastName);
  const currentGoal = useSelector(s => s.fitness.currentGoal);
  const [modal, setModal] = useState(false);
  const [reminderTime, setReminderTime] = useState(null);
  const [currhModal, setCurrhModal] = useState(false);
  const [twModal, setTwModal] = useState(false);
  const [profModal, setProfModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstName: firstName,
    lastName: lastName,
    currentGoal: currentGoal,
    currHeightInFt,
    currHeightInInch,
    currWeight,
    tarWeight
  });
  const image = useSelector(s => s.fitness.image);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // return () => {
    //   Notifications.removeNotificationSubscription(notificationListener.current);
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);


  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const askForCameraPermission = async () => {
    // const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status } = await requestCameraPermissionsAsync(Camera.getCameraPermissionsAsync())
    if (status !== 'granted') {
      //  console.log('Camera permission not granted!');
    } else {
      // console.log('Camera permission granted!');
    }
  };

  useEffect(() => {
    askForCameraPermission();
  }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      //  setImage(result.assets[0].uri);
      dispatch(fitnessActions.setProfImage(result.assets[0].uri))
    }
  };
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      //  setImage(uri);
      dispatch(fitnessActions.setProfImage(uri))
      //console.log(uri);
      setCameraModal(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cameraModal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setCameraModal(!cameraModal);
        }}
      >
        <View style={styles.exCont}>
          <View style={{ ...styles.exView, height: 300, width: 300, padding: 0 }}>
            <Camera ref={cameraRef} style={{ height: 300 }} type={type}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={{ ...styles.addEx, width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} onPress={toggleCameraType}>
                  <Icon2 name="camera-flip" size={32} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.addEx, width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} onPress={takePicture}>
                  <Icon2 name="camera" size={32} color="#fff" />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </View>
      </Modal>


      {image ?
        <Image source={{ uri: image }} resizeMode="stretch" style={styles.profileImage} />
        : <Image source={img} resizeMode="stretch" style={styles.profileImage} />
      }

      <TouchableOpacity style={styles.addEx} onPress={pickImage}>
        <Text style={styles.addExTxt}>Change Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCameraModal(true)}
        style={{ ...styles.addEx, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <Icon2 name="camera" size={32} color="#fff" />
        <Text style={styles.addExTxt}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setProfModal(true)} style={styles.profCard}>
        <Icon name="account-circle" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Account settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModal(true)} style={styles.profCard}>
        <FontAwesomeIcon name="weight" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Current Weight
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCurrhModal(true)} style={styles.profCard}>
        <Icon2 name="human-male-height" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Current Height
        </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => setTwModal(true)} style={styles.profCard}>
        <FontAwesomeIcon name="weight" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Target Weight
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setRemiModal(true)} style={styles.profCard}>
        <FontAwesomeIcon name="bell" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Set Reminder
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={async () => {
        await Notifications.cancelAllScheduledNotificationsAsync().then(res => console.log(res)).catch(err => console.log(err));
        Alert.alert("Notifications cancelled successfully!");
      }} style={styles.profCard}>
        <FontAwesomeIcon name="bell" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Cancel all notifications
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => setThModal(true)} style={styles.profCard}>
        <Icon2 name="human-male-height" size={32} color={"#909090"} />
        <Text style={styles.cardTxt}>
          Target Height
        </Text>
      </TouchableOpacity> */}



      {remiModal ?
        <DateTimePicker

          value={new Date()}
          onChange={async (e, s) => {
            // console.log(s)
            // scheduleDailyNotification(new Date(s));
            console.log(await Notifications.getAllScheduledNotificationsAsync())
            setRemiModal(false);
            setReminderTime(s);
            await schedulePushNotification(s);
          }}
          mode="time" />
        :
        <></>
      }



      <Modal
        animationType="slide"
        transparent={true}
        visible={profModal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setProfModal(!profModal);
        }}
      >
        <View style={styles.exCont}>
          <View style={{ ...styles.exView, height: 250 }}>
            <Text style={styles.smallText}>
              Account settings
            </Text>
            <TextInput
              defaultValue={firstName}
              onChangeText={e => setState(p => ({ ...p, firstName: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='default' placeholder='Type your first name' />
            <TextInput
              defaultValue={lastName}
              onChangeText={e => setState(p => ({ ...p, lastName: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='default' placeholder='Type your last name' />

            <TextInput
              defaultValue={currentGoal}
              onChangeText={e => setState(p => ({ ...p, currentGoal: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='default' placeholder='Type your goal' />
            {/* <TextInput style={{...styles.inputStyle, textAlignVertical: 'center'}} keyboardType='numeric' placeholder='Select height in.'/> */}

            <TouchableOpacity
              onPress={() => {
                if (!state.firstName || !state.lastName) {
                  Alert.alert('Please provide required values!');
                  return null;
                }
                dispatch(fitnessActions.setProfile(state));
                setProfModal(false)
              }}
              style={styles.nextBtn}>
              <Text style={styles.bigText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModal(!modal);
        }}
      >
        <View style={styles.exCont}>
          <View style={{ ...styles.exView, height: 150 }}>
            <Text style={styles.smallText}>
              Select Current Weight
            </Text>
            <TextInput
              defaultValue={currWeight || '0'}
              onChangeText={e => setState(p => ({ ...p, currWeight: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='numeric' placeholder='Type weight (in kg)' />
            {/* <TextInput style={{...styles.inputStyle, textAlignVertical: 'center'}} keyboardType='numeric' placeholder='Select height in.'/> */}

            <TouchableOpacity
              onPress={() => {
                if (!state.currWeight) {
                  Alert.alert('Please provide required values!');
                  return null;
                }
                dispatch(fitnessActions.setCurrWeight(state.currWeight));
                setModal(false)
              }}
              style={styles.nextBtn}>
              <Text style={styles.bigText}>Set Weight</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={currhModal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setCurrhModal(!currhModal);
        }}
      >
        <View style={styles.exCont}>
          <View style={{ ...styles.exView, height: 200 }}>
            <Text style={styles.smallText}>
              Select Current Height
            </Text>
            <TextInput
              defaultValue={currHeightInFt || '0'}
              onChangeText={e => setState(p => ({ ...p, currHeightInFt: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='numeric' placeholder='Type Height (in ft)' />
            <TextInput
              defaultValue={currHeightInInch || '0'}
              onChangeText={e => setState(p => ({ ...p, currHeightInInch: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='numeric' placeholder='Type height in.' />

            <TouchableOpacity
              onPress={() => {
                if (!state.currHeightInFt || !state.currHeightInInch) {
                  Alert.alert('Please provide required values!');
                  return null;
                }
                dispatch(fitnessActions.setCurrHeight(state))
                setCurrhModal(false);
              }}
              style={styles.nextBtn}>
              <Text style={styles.bigText}>Set Height</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={twModal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setTwModal(!twModal);
        }}
      >
        <View style={styles.exCont}>
          <View style={{ ...styles.exView, height: 150 }}>
            <Text style={styles.smallText}>
              Select Target Weight
            </Text>
            <TextInput
              defaultValue={tarWeight || '0'}
              onChangeText={e => setState(p => ({ ...p, tarWeight: e }))}
              style={{ ...styles.inputStyle2, textAlignVertical: 'center' }} keyboardType='numeric' placeholder='Type weight (in kg)' />
            {/* <TextInput style={{...styles.inputStyle, textAlignVertical: 'center'}} keyboardType='numeric' placeholder='Select height in.'/> */}

            <TouchableOpacity
              onPress={() => {
                if (!state.tarWeight) {
                  Alert.alert('Please provide required values!');
                  return null;
                }
                dispatch(fitnessActions.setTarWeight(state.tarWeight));
                setTwModal(false)
              }}
              style={styles.nextBtn}>
              <Text style={styles.bigText}>Set Weight</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </ScrollView>
  )
}


async function schedulePushNotification(notificationTime) {
  const notificationContent = {
    title: 'GrowFitness: Your daily workout reminder',
    body: "Reminder of your workout routine!",
    sound: true,
  };

  // Calculate the notification time for today
  const now = new Date();
  const notificationDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    notificationTime.getHours(),
    notificationTime.getMinutes()
  );

  console.log(notificationDate)
  // Schedule the daily notification
  await Notifications.scheduleNotificationAsync({
    content: notificationContent,
    trigger: { hour: notificationDate.getHours(), minute: notificationDate.getMinutes(), repeats: true },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  return token;
}