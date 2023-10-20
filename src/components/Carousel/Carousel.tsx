import { useEffect, useRef, useState } from 'react';

import PagerView from 'react-native-pager-view';

import styles from './Carousel.styles';

interface CarouselProps {
  data: any[];
  renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode;
  autoPlay?: boolean;
  intervalAutoPlay?: number;
  initialPage?: number;
}

const Carousel = ({ data, renderItem, autoPlay, intervalAutoPlay, initialPage }: CarouselProps) => {
  const [activePage, setActivePage] = useState(initialPage ?? 0);
  const viewPage = useRef<PagerView>(null);
  const limit = data.length - 1;

  const handleAutoPlay = () => {
    viewPage.current?.setPage(activePage);

    const interval = setInterval(() => {
      if (activePage === limit) {
        setActivePage(0);
      } else {
        const newPage = activePage + 1;
        setActivePage(newPage);
      }
    }, intervalAutoPlay ?? 5000);

    return interval;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = handleAutoPlay();
    }

    return () => clearInterval(interval);
  }, [activePage]);

  return (
    <PagerView ref={viewPage} initialPage={initialPage} scrollEnabled={true} style={styles.container}>
      {data.map((item, index) => renderItem({ item, index }))}
    </PagerView>
  );
};

export default Carousel;
