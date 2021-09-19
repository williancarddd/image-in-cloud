import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loading } from '../../Components/Loading'
import { NotFoundImage } from '../../Components/NotFoundImage'
import {database} from '../../firebase'
import './style.css'

export function ViewImage(){
  const { idimg } = useParams()
  const [dataImage, setDataImage] = useState({})
  useEffect(() => {
    function getImage(idimage){
      const refGetDatabase = database.ref(`images/${idimage}`)
      refGetDatabase.get().then(snapshot => setDataImage(snapshot.val()))
     
    }
    getImage(idimg)
  }, [idimg])

  return (
    <div>
      <div className="container-image">
        {
          dataImage === null || dataImage === undefined
          ? 
          (
         <div className='not-have'>
          <NotFoundImage />
          <span className='not-have'>this id is not related to an image</span>
         </div>
          )
          :
          (Object.keys(dataImage).length < 1 ? <Loading /> : <img src={dataImage[Object.keys(dataImage)[0]].url } alt="img" className="img-content" />
          )
        }
      </div>
    </div>
  )
}