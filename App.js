import { lazy } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ExploreScreen = lazy(() => import('./screens/ExploreScreen'));
import ProgressScreen from './screens/Progress';
import { primary, secondary } from './style/theme';
import { persistor, store } from './redux/store';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>

      <PersistGate loading={
        <ActivityIndicator style={{ marginTop: 300 }} size="large" color="#00ff00" />
      } persistor={persistor}>

        <NavigationContainer>

          <StatusBar style="dark" />
          <Tab.Navigator>
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="home" size={32} color={focused ? primary : secondary} />,
                tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? primary : secondary }}>Home</Text>,
                headerTitle: () => <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>GROW</Text><Text style={{ fontWeight: 'bold', fontSize: 20, color: primary }}>FITNESS</Text>
                </View>

              }}
              name="Home" component={HomeScreen} />
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="arm-flex" size={32} color={focused ? primary : secondary} />,
                tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? primary : secondary }}>Explore</Text>,
                headerTitle: () => <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>GROW</Text><Text style={{ fontWeight: 'bold', fontSize: 20, color: primary }}>FITNESS</Text>
                </View>
              }}
              name="Explore" component={ExploreScreen} />
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="progress-star" size={32} color={focused ? primary : secondary} />,
                tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? primary : secondary }}>Progress</Text>,
                headerTitle: () => <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>GROW</Text><Text style={{ fontWeight: 'bold', fontSize: 20, color: primary }}>FITNESS</Text>
                </View>
              }}
              name="Progress" component={ProgressScreen} />
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused, color, size }) => <Icon name="account" size={32} color={focused ? primary : secondary} />,
                tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? primary : secondary }}>Profile</Text>,
                headerTitle: () => <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>GROW</Text><Text style={{ fontWeight: 'bold', fontSize: 20, color: primary }}>FITNESS</Text>
                </View>
              }}
              name="Profile" component={ProfileScreen} />

          </Tab.Navigator>

        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}
