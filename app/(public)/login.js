import { useSignIn } from '@clerk/clerk-expo';
import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter, Stack, Link } from 'expo-router';

import styles from '../../components/auth/auth.style'
import { COLORS } from '../../constants';

const Login = () => {
    const router = useRouter();
    const { signIn, setActive, isLoaded } = useSignIn();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSigninPress = async () => {
        setLoading(true);
        if (!isLoaded) {
			return;
		}
		try {
			const completeSignIn = await signIn.create({
				identifier: emailAddress,
				password
			});

			// This indicates the user is signed in
			await setActive({ session: completeSignIn.createdSessionId });
		} catch (err) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.inputView}>
                <TextInput
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

            <View style={{ justifyContent: 'flex-start' }}>
                <Link href="/reset" asChild>
                    <Pressable style={styles.titleText}>
                        <Text>Forgot password?</Text>
                    </Pressable>
                </Link>
            </View>

            <Pressable style={styles.primaryButton} onPress={handleSigninPress}>
                {loading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
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
    )
}

export default Login;