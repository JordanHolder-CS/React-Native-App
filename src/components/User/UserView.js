import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import Button, { ButtonTray } from "../UI/Button";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../UI/Icons";

export const UserView = ({ user, onDelete, onModify }) => {
  const handleDelete = () => onDelete(user);
  const requestDelete = () =>
    Alert.alert(
      "Warning!",
      `Are you sure that you want to remove ${user.UserFirstname} ${user.UserLastname}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );

  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: user?.UserImageURL }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {user.UserFirstname} {user.UserLastname}
        </Text>

        <Text style={styles.text}>{user.UserEmail} </Text>
        <Text style={styles.text}>{user.UserType}</Text>
        <Text style={styles.text}>{user.UserYear}</Text>

        <ButtonTray>
          <Button icon={<Icons.Edit />} label="Modify" onPress={onModify} />
          <Button
            icon={<Icons.Delete />}
            label="Delete"
            onPress={requestDelete}
          />
        </ButtonTray>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 10,
  },
  boldText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
  image: {
    borderRadius: 9,
  },
  container: {
    gap: 15,
    //paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default UserView;
