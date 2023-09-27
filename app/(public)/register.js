import { TextInput, View, Pressable, Text, ActivityIndicator } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { Logs } from 'expo'

import styles from '../../components/auth/auth.style'
import { COLORS } from '../../constants';

const register = () => {
	const { isLoaded, signUp, setActive } = useSignUp();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [pendingVerification, setPendingVerification] = useState(false);
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);

	Logs.enableExpoCliLogging();

	console.log('testing log');
	

	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

		console.log({
			emailAddress,
			password,
			username,
		});

		try {
			// Create the user on Clerk
			await signUp.create({
				emailAddress,
				password,
				username,
			});

			// Send verification Email
			await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

			// change the UI to verify the email address
			setPendingVerification(true);
		} catch (err) {

			console.log(err);
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	const onPressVerify = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code
			});

			await setActive({ session: completeSignUp.createdSessionId });
		} catch (err) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerBackVisible: !pendingVerification }} />

			{!pendingVerification && (
				<>
					<View style={styles.inputView}>
						<TextInput
							placeholder="Username"
							value={username}
							onChangeText={(text) => setUsername(text)}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							autoCapitalize="none"
							placeholder="example@email.com"
							value={emailAddress}
							onChangeText={(text) => setEmailAddress(text)}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.inputView}>
						<TextInput
							placeholder="password"
							value={password}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry
							style={styles.textInput}
						/>
					</View>

					<Pressable style={styles.primaryButton} onPress={onSignUpPress}>
						{loading ? (
							<ActivityIndicator size='large' color={COLORS.primary} />
						) : (
							<Text style={styles.primaryButtonText}>Sign up</Text>
						)}
					</Pressable>
				</>
			)}

			{pendingVerification && (
				<>
					<View style={styles.inputView}>
						<TextInput
							value={code}
							placeholder="Code..."
							style={styles.textInput}
							onChangeText={setCode}
						/>
					</View>
					<Pressable style={styles.primaryButton} onPress={onPressVerify}>
						{loading ? (
							<ActivityIndicator size='large' color={COLORS.primary} />
						) : (
							<Text style={styles.primaryButtonText}>Verify Email</Text>
						)}
					</Pressable>
				</>
			)}
		</View>
	);
};

export default register;