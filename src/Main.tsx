import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IStateProps {
  title: string;
}

type Props = IStateProps;

const Main: FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
