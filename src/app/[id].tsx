import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "../components/ThemedText";
import { ThemedView } from "../components/ThemedView";

export default function ProductDetails() {
  const {id} = useLocalSearchParams();

  return (
    <ThemedView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <ThemedText>
        This is the product details page. You can see more details about the
        product here. 
      </ThemedText>
      <ThemedText style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
      Product details for id: {id}
      </ThemedText>
    </ThemedView>
  );
}
