import { Image, StyleSheet, Platform } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import products from "@/assets/data/products";

interface Product {
  image: string;
  name: string;
  price: number;
}

interface ProductListProps {
  product?: Product;
}

const ProductList: React.FC<ProductListProps> = ({ product }) => {
  console.log("ProductList", product);
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={styles.container}>
        {product && (
          <>
            <Image source={{ uri: product.image }} style={styles.image} />
            <ThemedText style={styles.title}>{product.name}</ThemedText>
            <ThemedText style={styles.price}>${product.price}</ThemedText>
          </>
        )}
      </ThemedView>
    </ThemedView>
  );
};

export default function HomeScreen() {
  return (
    <ThemedView style={styles.stepContainer}>
      <ProductList product={products[0]}/>
      <ProductList product={products[1]} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    flex: 1,
 
   gap: '40',
    backgroundColor: "whhite",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.light.tint,
    backgroundColor: "white"
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "blue",
   backgroundColor: 'white',
   marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,

    backgroundColor: "white"
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,

  }
});
