import { useMediaQuery } from 'react-responsive';

export function getResponsiveness() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return { isDesktop, isMobile };
}

export function responsiveClasses(r) {
  let classes = [];
  if (r.isMobile)
    classes.push("mobile");
  return classes.join(" ");
}
