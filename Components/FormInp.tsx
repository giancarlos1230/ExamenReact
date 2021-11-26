import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

interface Props{
    title:string;
    defaultValue:string;
    onChangeText:(text: string) => void;
}

const FormInp = ({title, defaultValue,onChangeText}:Props) => {
    return (
        <View>
             <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.inputs}
                defaultValue={defaultValue}
                onChangeText={text  =>onChangeText(text)}
            />
        </View>
    )
}

export default FormInp

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 17,
        textAlign: 'right',
        fontSize: 22,
        color: '#034C50',
        width:'100%'

    },
    text: {
        fontSize: 34,
        color: '#034C50',
    }
})
