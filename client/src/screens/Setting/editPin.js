import React, {useEffect, useState} from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const phone = "82169511784"
const lastChange ="never"

const editPin = (props) => {
    const [save, setSave] = useState(false)

    const modalPop = (e)  => {
        setSave(true)
        //show 
    }

    useEffect( () => {

    }, [save])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Please enter DANAIN PIN</Text>
            </View>
            <View style={styles.pin}>
                <Text>62-{phone}</Text>
                <TextInput value={pin}/>
            </View>
            <View style={styles.forget}>
                <Text>Forget PIN?</Text>
            </View>
        </View>
    )
}

export default editPin


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        marginBottom: 10,
        alignItems: "center"
    },
    pin: {
        marginBottom: 10,
        alignItems: "center"
    },
    forget: {
        color: "blue",
        alignItems: "center"
    }


})
