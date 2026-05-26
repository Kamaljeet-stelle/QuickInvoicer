import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    safeRoot: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 25,
        paddingTop: 8,
        paddingBottom: 32,
    },
    fieldGroup: {
        gap: 12,
    },
    fieldFull: {
        width: '100%',
    },
    rightAccessoryIcon: {
        width: 24,
        height: 24,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: colors.red,
        borderRadius: 40,
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    submitButtonText: {
        color: colors.whiteColor,
        fontSize: 18,
        fontWeight: '800',
    },
    submitButtonContainer: {
        alignItems: 'center',
        paddingTop: 8,
    },
    fieldStyle: {
        fontSize: 16
    },
});