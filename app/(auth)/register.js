import { TextInput, View, Pressable, Text, ActivityIndicator, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Logs } from 'expo'
import { useAuth } from "../../context/auth";


import styles from '../../components/auth/auth.style'
import { COLORS, FONT, SIZES, icons, images } from '../../constants';
import { ScreenHeaderBtn } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const register = () => {
	const { signUp } = useAuth();
	const router = useRouter();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [pendingVerification, setPendingVerification] = useState(false);
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);

	Logs.enableExpoCliLogging();


	const onSignUpPress = async () => {
		setLoading(true);

		try {
			const { data, error } = await signUp(
				emailAddress,
				password,
				username,
			);
			if (data) {
				router.replace("/home");
			} else {
				alert(error);
				// Alert.alert("Login Error", resp.error?.message);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	const onPressVerify = async () => {
		console.log('loading');
	};

	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ headerBackVisible: !pendingVerification, headerShown: false }} />

			<View style={styles.header(380)}>
				<View style={styles.headerBackBtn}>
					<ScreenHeaderBtn  
						iconUrl={icons.left}
						dimension='60%'
						handlePress={() => router.back()}
					/>
				</View>
				<Image 
					source={images.Logo}
					resizeMode='contain'
					style={styles.headerLogo}
				/>
				<View style={{ paddingVertical: 20 }}>
					<Text style={{
						color: '#ffffff',
						fontFamily: FONT.bold,
						fontSize: SIZES.xxLarge
					}}>
						A New World of Opportunities
					</Text>
				</View>
			</View>
			<View style={{ marginBottom: 20 }} />


			{!pendingVerification && (
				<>
					<View style={styles.formArea}>
						<View style={{ marginBottom: 20 }} />
						<View style={styles.inputView}>
							<TextInput
								placeholder="Username"
								value={username}
								nativeID="userName"
								onChangeText={(text) => setUsername(text.trim())}
								style={styles.textInput}
							/>
						</View>
						<View style={styles.inputView}>
							<TextInput
								nativeID="email"
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
								nativeID="password"
								onChangeText={(text) => setPassword(text)}
								secureTextEntry
								style={styles.textInput}
							/>
						</View>

						<Pressable style={styles.primaryButton} onPress={onSignUpPress}>
							{loading ? (
								<ActivityIndicator size='large' color={COLORS.primary} />
							) : (
								<Text style={styles.primaryButtonText}>Create Account</Text>
							)}
						</Pressable>
					</View>
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
		</SafeAreaView>
	);
};

export default register;