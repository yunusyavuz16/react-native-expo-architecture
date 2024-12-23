import { ThemedView } from "@/components/ThemedView";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import loginStyles from "./login.styles";

export default function LoginScreen() {
  const [username, setUsername] = useState("admin");
  const { handleLogin } = useAuth(username);
  return (
    <ThemedView style={loginStyles.container}>
      <TextInput
        style={loginStyles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </ThemedView>
  );
}
