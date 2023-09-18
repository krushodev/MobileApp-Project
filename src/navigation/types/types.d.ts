export type ScreenNames = ["Home", "Chat", "Rooms"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
