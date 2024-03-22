
import config from "../config/index"
import userLayout from "../layouts/userLayout"
import Login from "../pages/Login"
const PublicRoutes = [
    { path: config.userLogin, component: Login, layout: userLayout },
   
  ]
  
//   const PrivateRoutes = [
//     { path: config.album, component: Album },
//     { path: config.allAlbum, component: AllAlbum },
//     { path: config.allSinger, component: AllSinger },
//     { path: config.playList, component: PlayList },
  
//     { path: config.search, component: SearchFull },
  
//     { path: config.accoutInfor, component: Infor, layout: DefaultAccountLayout },
//     { path: config.accoutEdit, component: Edit, layout: DefaultAccountLayout },
//     {
//       path: config.accoutChange,
//       component: ChangePass,
//       layout: DefaultAccountLayout,
//     },
//     {
//       path: config.accoutChange,
//       component: ChangePass,
//       layout: DefaultAccountLayout,
//     },
//     {
//       path: config.upgrade,
//       component: Upgrade,
//       layout: DefaultUpgradeLayout,
//     },
//     {
//       path: config.history,
//       component: History,
//       layout: DefaultAccountLayout,
//     },
//   ]
  

  export { PublicRoutes, 
    // PrivateRoutes 
}