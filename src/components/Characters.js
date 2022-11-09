import React, { useEffect, useState } from "react";

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
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Characters = ({ navigation }) => {
  const [person, setPersons] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [allPage, setAllPage] = useState(null);
  const [getPage, setGetPage] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [page, setPage] = useState("1");
  console.log(page);

  useEffect(() => {
    setIsLoader(true);
    fetch(getPage)
      .then((data) => {
        data.json().then((data) => {
          const { info, results } = data;
          setNextPage(info.next);
          setAllPage(info.pages);
          setPrevPage(info.prev);
          console.log("!!!!!", info.next);
          setPage(info.next[info.next.length - 1] - 1);
          setPersons(results);
        });
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [getPage]);

  console.log(getPage);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.cardText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.species}</Text>
        <Text>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        {isLoader ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <FlatList
            data={person}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.buttonPagination}
          onPress={() => setGetPage(prevPage)}
        >
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text>{page}</Text>
        <TouchableOpacity
          style={styles.buttonPagination}
          onPress={() => setGetPage(nextPage)}
        >
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  card: {
    width: "98%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    borderColor: "red",
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  tinyLogo: {
    width: 50,
    height: 45,
    marginRight: 10,
    marginLeft: 5,
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 13,
    color: "blue",
  },
  pagination: {
    width: "100%",
    height: 25,
    backgroundColor: "gray",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonPagination: {
    width: 40,
    height: 20,
  },
});
export default Characters;
