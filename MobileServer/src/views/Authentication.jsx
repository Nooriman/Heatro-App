import { View, StyleSheet } from "react-native";
import { Button, Input, Text, Image, Icon, Pressable } from "native-base";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Authentication = () => {
  const navigation = useNavigation();

  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const onButtonPressed = () => {
    if (credentials.user === "Admin" && credentials.password === "admin") {
      navigation.navigate("main");
    } else {
      alert("Please enter proper email or password");
    }
  };

  return (
    <View style={styles.mainView}>
      <View>
        <Image source={logo} alt="heatro_logo" style={{ margin: "auto" }} />
        <Text fontSize="6xl" color="#DAD4B5">
          Heatro
        </Text>
      </View>

      <View style={styles.authentication_form}>
        <Input
          placeholder="Username"
          size="lg"
          style={styles.form_input}
          type="text"
          InputRightElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={9}
              color="muted.400"
              backgroundColor="#fff"
            />
          }
          value={credentials.user}
          onChange={(e) =>
            setCredentials({ ...credentials, user: e.nativeEvent.text })
          }
        />

        <Input
          placeholder="Password"
          size="lg"
          style={styles.form_input}
          type={showPassword ? "text" : "password"}
          InputRightElement={
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              backgroundColor="#fff"
            >
              <Icon
                as={
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                  />
                }
                size={9}
                mr={2}
                color="muted.400"
              />
            </Pressable>
          }
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.nativeEvent.text })
          }
        />

        <Button onPress={onButtonPressed} style={styles.form_button}>
          Login
        </Button>
      </View>

      <View style={styles.footer_container}>
        <Text style={styles.footer_text}>Powered by IOTIK.CO</Text>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#952323",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  authentication_form: {
    width: "70%",
    height: "15%",
    justifyContent: "space-between",
  },
  form_input: {
    backgroundColor: "#fff",
  },
  form_button: {
    backgroundColor: "#DAD4B5",
  },
  footer_container: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
  },
  footer_text: {
    textAlign: "center",
    color: "#DAD4B5",
  },
});
