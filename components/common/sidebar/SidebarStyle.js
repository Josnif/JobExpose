import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        flex: 1,
        overflow: 'hidden',
        zIndex: 999,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: COLORS.black,
        opacity: 0.5,
    },
    closeButon: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 9999,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5
    },
    contentView: {
        width: '70%',
        height: '100%',
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: 'column',
        zIndex: 9999,
    },
    menuView: {
        margin: SIZES.small,
        paddingLeft: SIZES.small,
        paddingVertical: SIZES.small - 3,
        flexDirection: "row",
        columnGap: SIZES.small
    },
    menuText: {
        color: COLORS.primary,
        fontFamily: FONT.medium,
        fontSize: SIZES.large
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: SIZES.small / 1.25,
        borderRadius: 50
    },
    profileName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge
    },
    profileID: {
        fontSize: SIZES.small + 2, 
        color: COLORS.secondary
    }


})

export default styles;
