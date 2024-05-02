import { View, StyleSheet } from "react-native";
import { Text, Image, IconButton, Divider } from "native-base";
import logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: "5%",
        backgroundColor: "#952323",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={logo} alt="heatro_logo" width={8} height={10} />
        <Text style={styles.header_text} fontSize="4xl">
          Heatro
        </Text>
      </View>

      <IconButton
        variant="ghost"
        size="lg"
        onPress={() => navigation.navigate("login")}
        _icon={{
          as: MaterialIcons,
          name: "logout",
          color: "#DAD4b5",
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_text: {
    color: "#DAD4b5",
    marginLeft: "5%",
  },
});
