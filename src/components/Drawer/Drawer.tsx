import { useDispatch, useSelector } from 'react-redux';
import { Drawer as DrawerLayout } from 'react-native-drawer-layout';

import { type DrawerStateProps, hideDrawer, showDrawer } from '../../store/slices/drawerSlice';

import type { IRootState } from '../../store';

interface DrawerProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  content: React.ReactNode;
}

const Drawer = ({ children, position, content }: DrawerProps) => {
  const dispatch = useDispatch();
  const drawer = useSelector<IRootState>(state => state.drawer) as DrawerStateProps;

  return (
    <DrawerLayout
      open={drawer.isOpen}
      onOpen={() => dispatch(showDrawer())}
      onClose={() => dispatch(hideDrawer())}
      drawerPosition={position}
      renderDrawerContent={() => content}
    >
      {children}
    </DrawerLayout>
  );
};

export default Drawer;
