import {
  alignItemsStyle,
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginLeftStyle,
  positionStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import AgCheckBox from "../common/AgCheckbox";
import AgInput from "../common/AgInput";

const LoginForm = () => {
  const { agPrimaryColor } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePressCheckBox = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={{ width: "100%" }}>
      {/* Email */}
      <View style={[marginBottomStyle.marginBottomMd]}>
        <ThemedText style={[marginBottomStyle.marginBottomSm]}>
          Email
        </ThemedText>
        <AgInput
          placeholder="email@email.com"
          placeholderTextColor="#A0A0A0"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password */}
      <View
        style={[
          justifyContentStyle.justifyContentSpaceBetween,
          flexDirectionStyle.flexDirectionRow,
          marginBottomStyle.marginBottomSm,
          alignItemsStyle.alignItemsEnd,
        ]}
      >
        <ThemedText style={marginBottomStyle.marginBottomSm}>
          Password
        </ThemedText>
        <TouchableOpacity style={[marginBottomStyle.marginBottomSm]}>
          <Text style={[agPrimaryColor]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          positionStyle.positionRelative,
          justifyContentStyle.justifyContentCenter,
          marginBottomStyle.marginBottomMd,
        ]}
      >
        <AgInput
          placeholder="Enter Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Remember Me */}
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          alignItemsStyle.alignItemsCenter,
          marginBottomStyle.marginBottomXl,
        ]}
      >
        <AgCheckBox value={rememberMe} onValueChange={handlePressCheckBox} />
        <ThemedText type="sm" style={[marginLeftStyle.marginLeftMd]}>
          Remember me
        </ThemedText>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 12,
  },

  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginForm;
