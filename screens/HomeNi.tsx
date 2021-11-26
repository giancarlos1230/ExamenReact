import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import FormInp from '../Components/FormInp'

const HomeNi = () => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const Datos = () => {
      
        if (usuario==="hacker@gmail.com" && password==="12345678") {
            alert('que nota!')
            
        }
    }

    return (
        <View style={styles.container}>

            <FormInp
                title="Usuario"
                defaultValue={usuario}
                onChangeText={setUsuario}
            />
            <FormInp
                title="Contraseña"
                defaultValue={password}
                onChangeText={setPassword}
            />

            <View style={styles.button} >
                <Button
                    title="Entrar"
                    onPress={Datos}
                />
            </View>
        </View>
    )
}

export default HomeNi

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#6ca0ab",
        flex: 1,
        width: "100%",
        paddingTop: 150,
        paddingLeft: 24,
        paddingRight: 24,
    },
    button:{
        paddingTop: 50,
        
    }

})
