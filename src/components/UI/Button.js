import { Pressable, Text, StyleSheet, View } from "react-native";

// Reusable base button with optional style overrides
const Button = ({ label, onPress, style, textStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 15,
  },

  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 8,
  },
  modify: {
    backgroundColor: "white",
  },
  delete: {
    backgroundColor: "#d32f2f",
    borderColor: "#000000ff",
  },
  label: {
    fontSize: 16,
  },
  deleteLabel: {
    color: "white",
    fontWeight: "600",
  },
});

export default Button;
