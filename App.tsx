import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "./styles/global";
import NavBar from "./src/navBar/navBar";
import AddButton from "./src/floatingBTN";
import ContainerBoxs from "./src/main";

export default function App() {
  return (
    <SafeAreaView style={s.container}>
      <NavBar />
      <ContainerBoxs />
      <AddButton />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: COLORS.color,
  },
});
