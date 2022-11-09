import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const Location = ({ navigation }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((data) => {
        data.json().then((data) => {
          const { info, results } = data;
          setLocation(results);
        });
      })
      .catch((error) => alert(error));
  }, []);
  return <Text>Location</Text>;
};

export default Location;
