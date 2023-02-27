import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Chat";
import HomeScr from "./HomeScr";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScr"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#090d30",
          },
          headerTintColor: "#e9e9e9",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "AI Chat Bot" }}
        />
        <Stack.Screen
          name="HomeScr"
          component={HomeScr}
          options={{
            title: "All Chats",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
