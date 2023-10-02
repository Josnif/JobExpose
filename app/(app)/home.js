import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, SidebarModal, Welcome, ProfileMenu } from '../../components'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerShown: !openSidebar,
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisibile: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu} 
                            dimension="60%"
                            handlePress={() => {
                                setOpenSidebar(true);
                            }}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={images.profile} 
                            dimension="100%" 
                            handlePress={() => {
                                // setOpenProfile(!openProfile)
                            }}
                        />
                    ),
                    headerTitle: ""
                }}
            />
            
            {openProfile ? <ProfileMenu /> : null}
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <Popularjobs />
                    <Nearbyjobs />
                    
                </View>
            </ScrollView>
            
            {openSidebar && <SidebarModal handleClose={() => setOpenSidebar(false)} />}
        </SafeAreaView>
    )
}

export default Home;