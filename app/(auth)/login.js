import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
import { useRouter, Stack, Link } from 'expo-router';
import { useAuth } from "../../context/auth";

import styles from '../../components/auth/auth.style'
import { COLORS, SIZES, icons, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';
import { ScreenHeaderBtn } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const router = useRouter();
    const { signIn } = useAuth();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResetForm, setShowResetForm] = useState(false);

    const handleSigninPress = async () => {
        setLoading(true);
        
		try {
			const { data, error } = await signIn(
                emailAddress,
                password
            );

            if (data) {
                router.replace("/home");
            } else {
                alert(error);
            }
		} catch (err) {
			console.log(err);
		} finally {
            setLoading(false);
            console.log('done');
		}

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.backdropContainer}>
                <Image 
                    source={images.authBg}
                    resizeMode='cover'
                    style={styles.backdropImage}
                />
            </View>

            <View style={styles.header(400)}>
                {showResetForm && (
                    <View style={styles.headerBackBtn}>
                        <ScreenHeaderBtn  
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => setShowResetForm(false)}
                        />
                    </View>
                )}
                <Image 
                    source={images.Logo}
                    resizeMode='contain'
                    style={styles.headerLogo}
                />
            </View>

            {!showResetForm ? (
                <View style={styles.formArea}>
                    <View style={styles.formHeading}>
                        <Text style={styles.formHeadingText}>Welcome Back!</Text>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            nativeID="email"
                            autoCapitalize="none"
                            value={emailAddress}
                            style={styles.textInput}
                            placeholder="Email..."
                            placeholderTextColor="#000"
                            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            value={password}
                            style={styles.textInput}
                            placeholder="Password..."
                            placeholderTextColor="#000"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>

                    <View style={{ alignItems: 'flex-end', width: '100%', marginRight: SIZES.xSmall  }}>
                        <Pressable style={styles.titleText} onPress={() => setShowResetForm(true)}>
                            <Text>Forgot password?</Text>
                        </Pressable>
                    </View>

                    <Pressable style={styles.primaryButton} onPress={handleSigninPress}>
                        {loading ? (
                            <ActivityIndicator size='large' color={COLORS.white} />
                        ) : (
                            <Text style={styles.primaryButtonText}>Sign in</Text>
                        )}
                    </Pressable>

                    <View style={styles.footer}>
                        <Text>Have an account?</Text>

                        <TouchableOpacity
                            style={styles.secondaryButton}
                            onPress={() => router.push('/register')}
                        >
                            <Text style={styles.secondaryButtonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.formArea}>
                    <View style={styles.formHeading}>
                        <Text style={styles.formHeadingText}>Reset Password</Text>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            nativeID="email"
                            autoCapitalize="none"
                            value={emailAddress}
                            style={styles.textInput}
                            placeholder="Email..."
                            placeholderTextColor="#000"
                            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                        />
                    </View>

                    <TouchableOpacity style={styles.primaryButton} onPress={() => alert('Functionality not completed! contact support team')}>
                        {loading ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : (
                            <Text style={styles.primaryButtonText}>Submit</Text>
                        )}
                    </TouchableOpacity>
                </View>
            )}


        </SafeAreaView>
    )
}

export default Login;