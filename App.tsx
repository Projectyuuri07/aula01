import { View, Text, Button, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"

function App() {
  return (
    <View style={styles.container}>
     <StatusBar style="dark" />
      <Text>hello, world</Text>
      <Text>hello, world</Text>
      <Button title="Press me" onPress={() => alert("Button pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb45",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App