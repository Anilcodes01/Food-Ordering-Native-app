import { Product } from "../types";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Colors } from "@/src/constants/Colors";
import products from "@/assets/data/products";
import { Image, StyleSheet, Platform } from "react-native";

interface ProductListProps {
    product: Product;
  }
  

const ProductList: React.FC<ProductListProps> = ({ product }) => {
    return (
      
        <ThemedView style={styles.container}>
          {product && (
            <>
              {product.image && <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />}
              <ThemedText style={styles.title}>{product.name}</ThemedText>
              <ThemedText style={styles.price}>${product.price}</ThemedText>
            </>
          )}
        </ThemedView>

    );
  };

  export default ProductList;


export  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
 
        flex: 1,
      maxWidth: '50%',
      },
    
      image: {
        width: '100%',
        aspectRatio: 1,
      },
    
      title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
      },
      price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
      },
  });
  