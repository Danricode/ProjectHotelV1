import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Card, Title, Paragraph, List } from "react-native-paper";
import MyContact from "./components/contact";
import HideSeek from "./components/ShowHide";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./assets/logo.png")} />
      <Image source={require("./assets/rw.png")} />
      <Text style={styles.title}>Your destination awaits</Text>
      <Text style={styles.text}>
        With 35 years in the business, over 142 destinations and parterships
        with the best hotels, restaurants and clubs in each one of them, we are
        equipped to provide you with the best travel experience. The process is
        as simple as it gets, tell us the trip of your dreams and our team will
        make it come true and assist you every step of the way. Ready whenever
        you are.
      </Text>
      <Button
        onPress={() => navigation.navigate("Circuits")}
        title="Where to?"
      />
    </View>
  );
}

function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card>
          <Card.Content>
            <Title style={styles.title}>Cruise ships</Title>
          </Card.Content>
          <Card.Cover
            source={require("./assets/cruise.jpg")}
            style={styles.cardImg}
          />
          <Paragraph>Bring your best blue diamond!</Paragraph>
          <HideSeek />
          <Card.Content>
            <Title style={styles.title}>Restaurants</Title>
          </Card.Content>
          <Card.Cover
            source={require("./assets/last.jpg")}
            style={styles.cardImg}
          />
          <Paragraph>As if it's your last</Paragraph>
          <HideSeek />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function CircuitsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card>
          <Card.Content>
            <Title style={styles.title}>Jojo's Bizarre Island</Title>
          </Card.Content>
          <Card.Cover
            source={require("./assets/isla.png")}
            style={styles.cardImg}
          />
          <Paragraph>Strike a pose !</Paragraph>
          <HideSeek />
          <Card.Content>
            <Title style={styles.title}>Castlevania</Title>
          </Card.Content>
          <Card.Cover
            source={require("./assets/vania.jpg")}
            style={styles.cardImg}
          />
          <Paragraph>What is a man!?</Paragraph>
          <HideSeek />
          <Card.Content>
            <Title style={styles.title}>Silent Hill</Title>
          </Card.Content>
          <Card.Cover
            source={require("./assets/sh.jpg")}
            style={styles.cardImg}
          />
          <Paragraph>James, honey...</Paragraph>
          <HideSeek />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>Find us,</Text>
          <MyContact></MyContact>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
  
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Services" component={ServicesScreen} />
        <Drawer.Screen name="Circuits" component={CircuitsScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: -100,
  },
  title: {
    fontSize: 25,
    color: "#0089D6",
  },
  text: { margin: 40, color: "#0089D6" },
  photo: {
    margin: -120,
    height: 250,
    width: 450,
  },
  tagline: {
    color: "#0089D6",
    marginBottom: 30,
  },
  cardImg: {
    width: 250,
  },
  hoursTitle: {
    margin: 10,
    fontSize: 14,
    color: "#0089D6",
    textAlign: "left",
  },
});
