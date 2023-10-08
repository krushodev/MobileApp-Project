export type RootStackParamList<S extends string[]> = Record<S[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
export type BottomNavigation = BottomNavigationProps<RootStackParamList>;
