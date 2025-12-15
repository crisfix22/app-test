import { Alert, KeyboardAvoidingView, TextInput, View, } from 'react-native';
import TextCustomComponent from '../../components/TextCustom/textCustom.component';
import { styles } from './login.styles';
import { ButtonCustomComponent } from '../../components/ButtonCustom/buttonCustom.component';
import { useLogin } from './hooks/useLogin.hook';
import { useState } from 'react';
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { validateCredentials, login } = useLogin();
    const navigation = useNavigation();
    const handleLogin = async () => {
        console.log("email", email);
        console.log("password", password);
        if(!validateCredentials(email, password)) {
            Alert.alert("Error", "Email and password are required");
            return;
        }
        const response = await login(email, password);
        if(response.success) {
            
        navigation.dispatch(StackActions.replace("Home"));
        } else {
            Alert.alert("Error", response.message);
        }
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <TextCustomComponent text="Bienvenido a la aplicacion de Carbon" color="text_primary" />
                </View>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <ButtonCustomComponent
                    style={styles.button}
                    onPress={handleLogin}
                    text="Ingresar"
                />
            </View>
        </KeyboardAvoidingView>
    );
}