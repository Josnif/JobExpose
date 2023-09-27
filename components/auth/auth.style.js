import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		paddingHorizontal: 20,
		alignItems: 'center'
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
		marginBottom: 20,
	},
	
	footer: {
		color: "#000",
		marginTop: 20,
		backgroundColor: "#fff",
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
	
	  oauthView: {
		width: "90%",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
		marginBottom: 20,
	  },
});

export default styles;