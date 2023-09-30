import { View, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Drawer } from 'expo-router/drawer';

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '50%', backgroundColor: 'black',  }}>
      {!isPresented && <Link href="/home">Dismiss</Link>}
      <StatusBar style="light" />
      <Text>Good</Text>
    </View>
  );
}
