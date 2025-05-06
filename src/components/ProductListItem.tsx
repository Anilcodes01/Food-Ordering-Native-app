import { Product } from "../types";
import { ThemedText } from "@/src/components/ThemedText";
import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet, Platform, Pressable } from "react-native";
import { Link } from "expo-router";

interface ProductListProps {
    product: Product;
  }
  
export const defaultPizzaImage = "";
const ProductList: React.FC<ProductListProps> = ({ product }) => {
    return (
        <Link href={`/(tabs)/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
          {product && (
            <>
              {product.image && <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />}
              <ThemedText style={styles.title}>{product.name}</ThemedText>
              <ThemedText style={styles.price}>${product.price}</ThemedText>
            </>
          )}
      
        </Pressable>
        </Link>
    );
  };

  export default ProductList;


export  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
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
     link: {
        color: 'blue'
     }
  });
  