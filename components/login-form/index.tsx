import {
  alignItemsStyle,
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginLeftStyle,
  positionStyle,
  textFontSizeStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import AgCheckBox from "../common/AgCheckbox";
import AgInput from "../common/AgInput";
import AgButton from "../common/AgButton";
import useAuth from "@/hooks/useAuth";

const initialEmail = "admin@email.com";
const LoginForm = () => {
  const { agPrimaryColor } = useStyles();
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { handleLogin } = useAuth(initialEmail);

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
        <ThemedText>Password</ThemedText>
        <TouchableOpacity>
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
        <ThemedText
          type="sm"
          style={[
            marginLeftStyle.marginLeftMd,
            textFontSizeStyle.textFontSizeXmd,
          ]}
        >
          Remember me
        </ThemedText>
      </View>

      {/* Sign In Button */}
      <AgButton onPress={handleLogin} text="Sign In" type="primary" />
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 12,
  },
});

export default LoginForm;
