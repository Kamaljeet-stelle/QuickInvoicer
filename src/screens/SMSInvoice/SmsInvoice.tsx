import { Text, View } from "react-native";
import { FloatingLabelInput } from "../../components/forms/FloatingLabelInput";
import { useState } from "react";
import { Header } from "../../components/common/Header";
import { styles } from "./styles";
import { AppButton } from "../../components/common/AppButton";
import { useNavigation } from "@react-navigation/native";

export function SMSInvoice() {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const onChangeText = (text: string) => {
        setValue(text);
    };
    return (
        <View>
            <Header title="SMS Invoice" onBackPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <FloatingLabelInput
                    label="To Contact Number"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Send"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() => { }} />
            </View>

        </View>
    );
}       