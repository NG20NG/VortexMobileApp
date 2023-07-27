//
//
//
//
//
import { StyleSheet, View, Text } from "react-native";
import { COLORS, Theme } from "../../styles/global";
import { SplitText } from "./components";

const ContainerBoxs = () => {
  const arr: number[] = [1, 2, 3, 1, 1, 1, 1, 1];
  const text = "This is my text for now and more 123 123 123fezon";
  const limit = 35;

  return (
    <View style={s.container}>
      {arr.map((e, i) => {
        return (
          <View key={i} style={s.boxs}>
            <Text style={s.textTitle}>
              {i + 1 + "_"}{" "}
              {text.length >= limit ? SplitText(text, limit) : text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ContainerBoxs;
const s = StyleSheet.create({
  container: {
    width: "96%",
    height: 500,
    rowGap: 5,
    marginTop: 10,
  },
  boxs: {
    backgroundColor: "#ffffff0b",
    borderRadius: 3,
    height: 60,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    borderLeftWidth: 2,
    borderLeftColor: Theme(0),
    paddingLeft: 10,
  },
  textTitle: {
    color: "#e8e8e8",
    fontSize: 20,
  },
});
