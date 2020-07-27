import { useMediaQuery } from 'react-responsive';

export function getResponsiveness() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return { isDesktop, isTablet, isMobile };
}
