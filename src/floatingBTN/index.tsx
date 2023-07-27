//
//
//
//
//
import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Theme } from "../../styles/global";

const AddButton = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Click")}
      activeOpacity={1}
      style={s.addBtn}
    >
      <ImageBackground
        source={require("../../icons/add_button.png")}
        style={s.veiwContainer}
      ></ImageBackground>
    </TouchableOpacity>
  );
};

export default AddButton;
const s = StyleSheet.create({
  addBtn: {
    position: "absolute",
    right: 25,
    bottom: 30,
    borderRadius: 40,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme(0),
  },
  veiwContainer: {
    width: 25,
    height: 25,
    marginLeft: -1,
  },
});
