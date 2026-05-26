import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


export const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    button: {
        backgroundColor: colors.red,
        borderRadius: 20,
        paddingHorizontal: 34,
        paddingVertical: 8,
    },
    buttonText: {
        color: colors.whiteColor,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 26,
    },
});