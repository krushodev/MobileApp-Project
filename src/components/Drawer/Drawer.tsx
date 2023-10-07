import { useState } from 'react';

import { Drawer as DrawerLayout } from 'react-native-drawer-layout';

interface DrawerProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  content: React.ReactNode;
  status?: boolean;
}

const Drawer = ({ children, position, content, status }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };

  const hideDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerLayout open={isOpen} onOpen={showDrawer} onClose={hideDrawer} drawerPosition={position} renderDrawerContent={() => content}>
      {children}
    </DrawerLayout>
  );
};

export default Drawer;
