import { Redirect } from "expo-router";
export default function Index() {
  //prevents expo from choosing the wrong initial screen
  return <Redirect href="/home" />;
}
