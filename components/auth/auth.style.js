import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center"
	},

	// container: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	padding: 20
	// },

	button: {
		margin: 8,
		alignItems: 'center'
	},

	headerBackBtn: {
		position: 'absolute',
		top: SIZES.xSmall / 2,
		left: 5,
		zIndex: 50
	},

	header: (height=400) => ({
		width: '100%',
		height: height,
		backgroundColor: COLORS.primary,
		margin: 0,
		alignItems: "center",
		justifyContent: "center"
	}),

	headerLogo: {
		borderRadius: 50,
		width: 100,
		height: 100,
		marginTop: -SIZES.large
	},

	formArea: {
		borderRadius: SIZES.large,
		padding: SIZES.large,
		backgroundColor: "#fff",
		justifyContent: "center",
		paddingHorizontal: 20,
		marginHorizontal: 'auto',
		marginTop: -100,
		alignItems: 'center',
		width: '90%',
		height: "auto",
		...SHADOWS.small
	},

	formHeading: {
		paddingTop: SIZES.small,
		paddingBottom: SIZES.large + 5
	},

	formHeadingText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xxLarge,
	},	
	
	inputView: {
		borderRadius: SIZES.xSmall / 2,
		width: "95%",
		height: 45,
		marginBottom: SIZES.large,
		borderColor: COLORS.secondary,
		borderStyle: "solid",
		borderWidth: 1,
	},
	
	textInput: {
		height: 50,
		flex: 1,
		padding: SIZES.xSmall,
		marginLeft: SIZES.small,
	},
	
	primaryButton: {
		width: "90%",
		borderRadius: 5,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		backgroundColor: COLORS.primary,
		color: "#ffffff",
	},
	
	primaryButtonText: {
		color: "#ffffff",
		fontWeight: "bold",
	},
	
	titleText: {
		color: "#000",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 5,
	},
	
	footer: {
		color: "#000",
		marginTop: 20,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	
	secondaryButton: {
		marginTop: 15,
		borderRadius: 5,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#000",
	},
	
	secondaryButtonText: {
		color: "#000",
		fontWeight: "bold",
	},

	backdropContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		width: '0%',
		height: '100%',
		zIndex: -1,
	},
	backdropImage: {
		width: '100%',
		height: '100%',
	},
	
	  oauthView: {
		width: "90%",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
		marginBottom: 20,
	  },
});

export default styles;