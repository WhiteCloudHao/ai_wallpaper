
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';
export const SetWallpapers = (imageSource: string, type) => {
    ManageWallpaper.setWallpaper(
        {
          // uri: "https://pbs.twimg.com/media/DLHyvP1VYAA4eCA.jpg",
          uri: imageSource,
        },
        (res : any)=> {
          console.warn('check', res.status, res.msg);
        },
        type,
      );
}