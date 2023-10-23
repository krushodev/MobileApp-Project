import Toast from 'react-native-root-toast';

import toastColors from '../global/toastColors';

import type { ToastProps } from '../types';

export const showToast = (props: ToastProps) => {
  const colors = toastColors[props.type];

  Toast.show(props.message, {
    duration: props.duration || 2100,
    position: props.position || Toast.positions.TOP,
    delay: 0,
    animation: true,
    shadow: true,
    hideOnPress: true,
    backgroundColor: colors.background,
    textColor: colors.text,
    containerStyle: {
      padding: 15
    }
  });
};
