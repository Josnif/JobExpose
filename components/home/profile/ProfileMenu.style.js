import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: SIZES.small,
        paddingTop: 10,
        paddingBottom: SIZES.medium,
        top: 0,
        backgroundColor: '#FFF',
        zIndex: 99999,
        width: '500px',
        height: '350px',
        ...SHADOWS.medium,
    },
    profileLink: {
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    profileLinkText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium + 2,
    }
});

export default styles;