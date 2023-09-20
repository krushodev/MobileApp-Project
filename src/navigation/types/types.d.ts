export type ScreenNames = ['HomeScreen', 'Chat', 'Rooms'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
