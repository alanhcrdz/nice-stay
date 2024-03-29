import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

// selectors
import { useSelector, useDispatch } from "react-redux";

// import actions
import { removePropertyFromFavorite } from "../../redux/actions";

const Favorites = () => {
  // access the state from store using selector
  const { favorites } = useSelector((state) => state.propertiesReducer);
  //dispatch an action using useDispatch
  const dispatch = useDispatch();

  // handle favorites
  const removeFromFavorites = (property) =>
    dispatch(removePropertyFromFavorite(property));

  const handleRemoveFavorite = (property) => {
    removeFromFavorites(property);
  };
  /* end of favorites */

  const decimalSeparator = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: 12,
          alignItems: "center",
        }}
      >
        {/* Image Cover */}
        <View style={{ overflow: "hidden" }}>
          <Image
            style={{ width: 350, height: 150, borderRadius: 18 }}
            source={{ uri: item.image_url }}
          />
          <View
            style={{
              padding: 6,
              alignItems: "flex-start",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* Title */}
            <View>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text style={{ color: "#6c757d" }}>{item.city}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleRemoveFavorite(item);
              }}
            >
              <FontAwesome name={"remove"} size={24} color={"#6c757d"} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: 6,
            }}
          >
            {/* Price */}
            <View>
              <Text style={{ color: "#6c757d" }}>
                ${decimalSeparator(item.monthly_rental_price)}
                /month
              </Text>
            </View>
            {/* Others */}
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="bed" size={24} color="#6c757d" />
              <Text style={{ marginHorizontal: 5, color: "#6c757d" }}>
                Beds: {item.beds}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="people" size={24} color="#6c757d" />
              <Text style={{ marginHorizontal: 5, color: "#6c757d" }}>
                Max Guests: {item.maxGuests}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 22 }}>Real Estate</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          {favorites.length === 0 ? (
            <Text style={{ color: "#64676D", fontSize: 18 }}>
              Add properties to favorites list.
            </Text>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
