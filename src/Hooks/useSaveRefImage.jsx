import { database } from "../firebase";

export async function usesaveRefImage(urlImage, idImage){
  //save the image in a folder with name id, exemple images/idimg -> images/5c18eda3-a3d0-47ba-8d71-d7f2f5e2f01c
  const refFolderImagesDataBase = database.ref('images').child(idImage)
   refFolderImagesDataBase.push({
    id_image:idImage,
    url:urlImage,
    data_save: new Date().toDateString()
  })
}