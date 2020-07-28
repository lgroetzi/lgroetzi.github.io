import { useMediaQuery } from 'react-responsive';

export function getResponsiveness() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return { isDesktop, isTablet, isMobile };
}

export function responsiveClasses(r) {
  let classes = [];
  if (r.isTablet)
    classes.push("tablet");
  if (r.isMobile)
    classes.push("mobile");
  return classes.join(" ");
}
