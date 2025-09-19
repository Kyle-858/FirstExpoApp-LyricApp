import { Text, View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {

  const router = useRouter() 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lyric Writer!</Text>
      <View>
        <Button title="Start Writing" onPress={() => router.push("/lyrics")}/>
      </View>
    </View>
  )}
    

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 24, },
});
