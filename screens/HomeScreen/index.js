import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import Input from "../../components/UI/Input";
import { Card, CardItem, Text, Body } from 'native-base';


export const HomeScreen = (props) => {
  const { listLichChay, fetching } = useSelector(state => state.HomeReducer)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch({ type: "API_CALL_REQUEST" })
  }, [])

  const test = () => {

  }
  const renderInfo = (id, name) => {
    props.navigation.navigate("info", {
      id,
      name,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fetching
        ? <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        : <React.Fragment>
          <View style={styles.screen}>
            <Input
              placeholder={"Tìm kiếm: Hiện tại - Đích đến"}
              style={styles.searchBar}
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
            <TouchableOpacity
              style={styles.searchButton}
              activeOpacity={0.6}
              onPress={test}
            >
              <Text style={styles.btnText}> Search </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, padding: 10 }} contentContainerStyle={{ flexGrow: 1 }}>
            {listLichChay.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={styles.touchable}
                onPress={() => renderInfo(item.id, item.TenLC)}
              >
                <Card>
                  <CardItem header>
                    <Text>{item.TenLC}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>
                        Giá: {item.Gia}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </React.Fragment>
      }
    </SafeAreaView>
  );
};

