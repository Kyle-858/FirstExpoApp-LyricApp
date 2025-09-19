import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Lyrics() {
    const [text, setText] = useState("");

    useEffect(() => {
        (async () => {
            const saved = await AsyncStorage.getItem("lyrics")
            if (saved) setText(saved)
        })()
    }, [])

    const saveLyrics = async () => {
        await AsyncStorage.setItem("lyrics", text)
        alert("Lyrics saved!")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write your lyrics:</Text>
            <TextInput 
                style={styles.input}
                placeholder="Start writing..."
                value={text}
                onChangeText={setText}
                multiline
            />
            <Button title="Save" onPress={saveLyrics} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, marginBottom: 10 },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        textAlignVertical: "top",
        marginBottom: 10,
    },
})