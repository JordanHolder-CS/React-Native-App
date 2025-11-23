import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
// import ModuleUserScreen from "./src/components/screens/ModuleUserScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="Modules"
      component={UserListScreen}
      options={{ title: "User List" }}
    />
    {/* <Drawer.Screen
      name="Users"
      component={ModuleUserScreen}
      options={{ title: "User List" }}
    /> */}
  </Drawer.Navigator>
);

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerStyle: { backgroundColor: "rgba(0, 0, 0, 1)" },
          headerTintColor: "#ffffffff",
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Module" }}
        />
        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Module" }}
        />
        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
