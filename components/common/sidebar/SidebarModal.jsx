import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import styles from './SidebarStyle'
import { useAuth } from '../../../context/auth';
import { images } from '../../../constants';

const MenuItem = ({ name, icon, handlePress }) => (
    <Pressable style={styles.menuView} onPress={handlePress}>
        {icon}
        <Text style={styles.menuText}>{name}</Text>
    </Pressable>
);

const SidebarModal = ({ handleClose }) => {
    const { user, signOut } = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.backdrop} onPress={handleClose} />

            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <ScrollView style={styles.contentView} contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ marginTop: 50 }}>
                        <View style={{ marginBottom: 70, alignItems: 'center' }}>
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
                        
                        <MenuItem 
                            name='Profile' 
                            icon={<AntDesign name="profile" size={24} color="black" />}
                            handlePress={() => console.log('profile')} 
                        />
                        <MenuItem 
                            name='Favourites' 
                            icon={<MaterialIcons name="favorite-border" size={24} color="black" />} 
                            handlePress={() => console.log('Favourites')}
                        />
                        <MenuItem 
                            name='Applied Jobs' 
                            icon={<MaterialIcons name="work-outline" size={24} color="black" />} 
                            handlePress={() => console.log('jobs')}
                        />
                        <MenuItem 
                            name='Settings' 
                            icon={<SimpleLineIcons name="settings" size={24} color="black" />} 
                            handlePress={() => console.log('settings')}
                        />
                        <MenuItem 
                            name='Logout' 
                            icon={<MaterialIcons name="logout" size={24} color="black" />} 
                            handlePress={() => signOut()}
                        />
                    </View>

                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Text>Version 1.0.0</Text>
                    </View>

                </ScrollView>

                <TouchableOpacity style={styles.closeButon} onPress={handleClose}>
                    <Ionicons name="md-close-sharp" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SidebarModal