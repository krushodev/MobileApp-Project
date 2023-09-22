export type ScreenNames = ['HomeScreen', 'ChatScreen', 'RoomsScreen'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
