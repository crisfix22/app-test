import { Alert, Image, KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { styles } from './login.styles';
import { useLogin } from './hooks/useLogin.hook';
import { useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import LoadingComponent from '../../global/components/Loading/loading.component';
import TextCustomComponent from '../../global/components/TextCustom/textCustom.component';
import { ButtonCustomComponent } from '../../global/components/ButtonCustom/buttonCustom.component';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { validateCredentials, login } = useLogin();
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const handleLogin = async () => {
        if(!validateCredentials(email, password)) {
            Alert.alert("Error", "Email and password are required");
            return;
        }
        setIsLoading(true);
        const response = await login(email, password);
        setIsLoading(false);
        if(response.success) {
        navigation.dispatch(StackActions.replace("Home"));
        } else {
            Alert.alert("Error", response.message);
        }
    }
    if(isLoading) {
        return <LoadingComponent />;
    }
    return (
        <View style={styles.container}>
                <View style={styles.titleContainer}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                
                <TextCustomComponent text="Bienvenido a Carbon" 
                    fontSize={24} 
                    textAlign="center"
                    fontWeight="bold" color="text_primary" style={styles.titleText} />
                <TextCustomComponent text="Inicia sesión para continuar" 
                    fontSize={16} 
                    textAlign="center"
                    fontWeight="normal" color="text_secondary" />
                </View>

                <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>    
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
                </KeyboardAvoidingView>
              
                
        </View>
    );
}