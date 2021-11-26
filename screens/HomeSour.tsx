import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

const HomeSour = () => {

    const [task, setTask] = useState('')

    const crearTask = ()=>{

    }
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={styles.constainer}>
            <TextInput
                style={styles.inputs}
                placeholder="Escriba un useEffect"
                onChangeText={setTask}
            />
            <Button
                title="Agregar"
                onPress={() => crearTask()}
            />
            </View>

        </View>
    )
}

export default HomeSour

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        color: '#034C50',
    },
    constainer:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop:20
    }
})
