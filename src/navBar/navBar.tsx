import { StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, Theme } from "../../styles/global";

const NavBar = () => {
  return (
    <View style={s.navBar}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <Text style={s.title}>Vortex</Text>
    </View>
  );
};

const s = StyleSheet.create({
  navBar: {
    backgroundColor: Theme(0),
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  title: {
    color: "black",
    fontSize: 20,
  },
});
export default NavBar;
