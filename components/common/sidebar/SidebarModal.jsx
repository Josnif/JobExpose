import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import styles from './SidebarStyle'
import { useAuth } from '../../../context/auth';
import { SIZES, images } from '../../../constants';

const MenuItem = ({ name }) => (
    <View style={styles.menuView}>
        <Text style={styles.menuText}>{name}</Text>
    </View>
);

const SidebarModal = ({ handleClose }) => {
    const { user } = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backdrop} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <ScrollView style={styles.contentView}>
                    <View style={{ marginTop: 50, }} />

                    <View style={{ marginBottom: 30, alignItems: 'center' }}>
                        <Image 
                            source={images.profile}
                            resizeMode="cover"
                            style={styles.profileImg}
                        />

                        {user && (
                            <>
                                <View style={{ marginTop: 5, flexDirection: 'row', rowGap: 5, alignItems: 'center' }}>
                                    <Text style={styles.profileName}>{user?.name}</Text>
                                    {user?.status && (
                                        <MaterialIcons name="verified" size={20} color="forestgreen" />
                                    )}
                                </View>
                                <Text style={styles.profileID}>ID: {user.$id}</Text>
                            </>
                        )}
                    </View>
                    
                    <MenuItem name='Profile' />
                    <MenuItem name='Favourites' />
                    <MenuItem name='Applications' />
                    <MenuItem name='Applied Jobs' />
                    <MenuItem name='Settings' />
                    <MenuItem name='Logout' />
                </ScrollView>

                <TouchableOpacity style={styles.closeButon} onPress={handleClose}>
                    <Ionicons name="md-close-sharp" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SidebarModal