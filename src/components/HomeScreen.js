import React, { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const STYLES = ["default", "dark-content", "light-content"];

const HomeeScreen = ({ navigation }) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("dark-content");
  const [statusBarTransition, setStatusBarTransition] = useState("slide");
  const [data, setData] = useState();

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = async () => {
    await fetch("https://rickandmortyapi.com/api")
      .then((data) => {
        // setData(data);
        data.json().then((f) => {
          console.log(f);
        });
        alert(data);
      })
      .catch((error) => alert(error));
  };

  const image = {
    uri: "https://kartinkin.net/uploads/posts/2021-07/1625661406_16-kartinkin-com-p-rik-i-morti-oboi-krasivie-16.jpg",
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => navigation.navigate("Characters")}
            title="Характеры персонажей"
          />
          <Button
            title="Локации"
            onPress={() => navigation.navigate("Location")}
          />

          <Button
            onPress={() => navigation.navigate("Episodes")}
            title="Эпизоды"
          />
        </View>
        <Button
          title="скрыть верхний бар"
          onPress={changeStatusBarVisibility}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    width: "100%",
    height: "100%",
  },
  buttonsContainer: {
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    paddingLeft: 50,
    paddingRight: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default HomeeScreen;
