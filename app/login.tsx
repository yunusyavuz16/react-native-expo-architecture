import { ThemedView } from "@/components/ThemedView";
import useLogin from "@/hooks/useLogin";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("admin");
  const {handleLogin} = useLogin(username);
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
