// @flow weak

// Icons
//import GroupWork from 'material-ui/svg-icons/action/group-work';


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
      {id: 1, title: 'Your characters', routeName: '/'},
      {id: 2, title: 'Faces', routeName: 'about'},
      {id: 3, title: 'Bodies', routeName: 'about'}
    ]
  }

};
