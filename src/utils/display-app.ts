export const displayPageTitle = (pathname: string) => {
  switch (pathname) {
    case '/trending':
      return 'Trending Repos';
    case '/settings':
      return 'Settings Repos';
    default:
      return '';
  }
};