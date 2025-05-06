import { FlatList, StyleSheet } from "react-native";
import { ThemedText } from "../components/ThemedText";
import { useCart } from "../providers/ContextProvider";
import CartListItem from "../components/CartListItem";

export default function CartScreen() {
  const { items } = useCart();

  return (
    <FlatList

      data={items}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      contentContainerStyle={{padding: 10, gap: 10}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
