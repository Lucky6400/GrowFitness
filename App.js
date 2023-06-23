import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ExploreScreen from './screens/ExploreScreen';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="dark" />
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => <Icon name="home" size={32} color={focused ? "#2E7D32" : "#404040"} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? "#2E7D32" : "#404040" }}>Home</Text>,
            headerShown: false,
          }}
          name="Home" component={HomeScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => <Icon name="arm-flex" size={32} color={focused ? "#2E7D32" : "#404040"} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? "#2E7D32" : "#404040" }}>Explore</Text>,
            headerShown: false,
          }}
          name="Explore" component={ExploreScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => <Icon name="account" size={32} color={focused ? "#2E7D32" : "#404040"} />,
            tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: 10, color: focused ? "#2E7D32" : "#404040" }}>Profile</Text>,
            headerShown: false,
          }}
          name="Profile" component={ProfileScreen} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavText: {
    fontSize: 10
  }
});
