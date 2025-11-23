import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";
import Form from "../UI/Form.js";

const defaultUser = {
  UserID: Math.floor(100000 + Math.random() * 900000),
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL:
    "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg",
  UserType: null,
  UserYear: null,
};

const year = [
  { value: "2022-23", label: "2022-23" },
  { value: "2023-24", label: "2023-24" },
  { value: "2024-25", label: "2024-25" },
];

const userType = [
  { value: "Student", label: "Student" },
  { value: "Staff", label: "Staff" },
];

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  const [form, setForm] = useState(originalUser || defaultUser);
  const handleSubmit = () => onSubmit(form);
  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  return (
    <Form
      style={styles.formContainer}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={originalUser ? "Modify" : "Add"}
      Icons={originalUser ? <Icons.Edit /> : <Icons.Add />}
    >
      <Form.InputText
        label="User Firstname"
        value={form.UserFirstname}
        onChange={(value) => handleChange("UserFirstname", value)}
      />
      <Form.InputText
        label="User Lastname"
        value={form.UserLastname}
        onChange={(value) => handleChange("UserLastname", value)}
      />

      <Form.InputText
        label="User Email"
        value={form.UserEmail}
        onChange={(value) => handleChange("UserEmail", value)}
      />
      <Form.InputText
        label="Image URL"
        value={form.UserImageURL}
        onChange={(value) => handleChange("UserImageURL", value)}
      />
      <Form.InputSelect
        label="User Type"
        prompt="Select the type of user..."
        options={userType}
        value={form.UserType}
        onChange={(value) => handleChange("UserType", value)}
      />
      <Form.InputSelect
        label="Years of study"
        prompt="Select years of study..."
        options={year}
        value={form.UserYear}
        onChange={(value) => handleChange("UserYear", value)}
      />
    </Form>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
});

export default UserForm;
