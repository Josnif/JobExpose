import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './ProfileMenu.style'

const ProfileMenu = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileLink} onPress={() => {}}>
        <Text style={styles.profileLinkText}>Profile</Text>
      </Pressable>
      <Pressable style={styles.profileLink} onPress={() => {}}>
        <Text style={styles.profileLinkText}>Logout</Text>
      </Pressable>
    </View>
  )
}

export default ProfileMenu