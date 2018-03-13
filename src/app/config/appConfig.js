// @flow weak

export const appConfig = {
  // dev mode to mock async data for instance
  DEV_MODE: true,

  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,

  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,

  APP_NAME: 'Chimera',

  DRAWER: {
    menus: [
      {id: 1, icon: 'Dashboard',     title: 'Home',            routeName: '/'},
      {id: 2, icon: 'GroupWork',     title: 'Your characters', routeName: 'characters'},
      {id: 3, icon: 'Face',          title: 'Faces',           routeName: 'faces'},
      {id: 4, icon: 'Accessibility', title: 'Bodies',          routeName: 'bodies'},
      {id: 5, icon: 'Help',          title: 'About',           routeName: 'about'}
    ]
  }
};
