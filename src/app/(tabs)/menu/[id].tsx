import { Stack, useLocalSearchParams } from "expo-router";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import products from "@/assets/data/products";
import { Image, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((product) => product.id.toString() === id);

  const addToCart = () => {
    console.warn("Add to cart", {
      id: product?.id,
      name: product?.name,
      size: selectedSize,
    });
  }

  if (!product) {
    return <ThemedText>Product not found</ThemedText>;
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{ title: product.name, headerTitleAlign: "center" }}
      />
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText style={{ fontSize: 20, marginBottom: 10 }}>
        Select your size
      </ThemedText>

      <ThemedView style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "#f2f2f2" : "white",
              },
            ]}
          >
            <ThemedText
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? "black" : "#636363",
                },
              ]}
              key={size}
            >
              {size}
            </ThemedText>
          </Pressable>
        ))}
      </ThemedView>
      <ThemedText style={styles.price}>$ {product.price}</ThemedText>
      <Button onPress={addToCart} text="Add to cart" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",

    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
  sizeText: {
    fontSize: 20,

    padding: 5,
  },
});
