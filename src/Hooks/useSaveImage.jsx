import { storage } from '../firebase'
import { usesaveRefImage } from './useSaveRefImage'
import {v4} from 'uuid'

export async function usesaveFileFirebase (dataFile, stateProgress, urlImage) {
  const idIMage = v4()
  const uploadFile =  storage.ref().child('/image/'+idIMage+'-'+dataFile.name.replace(/[' ']/g, '')).put(dataFile)
  uploadFile.on('state_changed', (snapShot) => {
    stateProgress((snapShot.bytesTransferred/snapShot.totalBytes) * 100)
  },()=>{},
   async () => {
     //this callback get url of image
    await uploadFile.snapshot.ref.getDownloadURL().then((downloadURL)  => {
      urlImage(downloadURL)
      //only save the image after end upload and after the callback get  image url
      usesaveRefImage(downloadURL, idIMage)
    })
  })
  return idIMage
}


