import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'lightcoral', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="injeolmi"
        options={{
          title: 'Injeolmi',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />      
      <Tabs.Screen
      name="sandwich"
      options={{
        title: 'Sandwich',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}
    />
    </Tabs>
  );
}

