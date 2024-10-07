import { AppStackParamList } from "@/router/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const useTypedNavigation = () => useNavigation<StackNavigationProp<AppStackParamList>>();

export default useTypedNavigation;