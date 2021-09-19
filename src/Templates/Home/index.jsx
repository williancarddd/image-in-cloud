import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Input
} from 'reactstrap'

import biglogo from '../../Assets/big-logo.png'
import './style.css'

import { useEffect, useState } from 'react'
import { Check } from '../../Components/Check'
import { usesaveFileFirebase } from '../../Hooks/useSaveImage'

export function Home() {
  const [errorType, setErrorType] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [stateProgress, setStateProgress] = useState(0)
  const [idimg, setIdImg] = useState('')


  
  async function handleDataFile(event){
    const infoFile  = event.target.files[0]
    const acceptsTypes = ['image/jpeg','image/png', 'image/gif', 'image/svg+xml']
    const possibleInput = acceptsTypes.find((type) => type === infoFile.type) === undefined ? false : true
    if(possibleInput){
      const idimg = await usesaveFileFirebase(infoFile, setStateProgress, setUrlImage)
      setIdImg(idimg)
    } else {
      setErrorType('type your file not possible for upload, only jpeg, png, gif and svg+xml.')
      setTimeout(() => {
        setErrorType('')
      }, 5000)
    }
    console.log(event.target.files[0])
  }


  return (
  <div>
    <Container className='container-main'>
      <Card style={{ width: '18rem' , border:'none', backgroundColor:'#dbdfe4', borderRadius: '20px'}} className='p-4 w-50 card-main'>
        <CardImg variant="top" src={biglogo}  />
          <CardBody>
            <CardTitle className='text-center h4' >Drop or select the image file</CardTitle>
            <div className='form-file'>
            <div className="button-wrapper">
                <span className="label">
                  Upload File
                </span>
                <Input  type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" onChange={(e) => handleDataFile(e)}/>
            </div>
            </div>
          </CardBody>
          <div className='containerFile'>
            <div className="statusUpload">
              {errorType.length === 0 ?
               (
                 stateProgress !== 100 
                 ? 
                 (
                  <progress className='progress-file' value={`${stateProgress}`} max='100'></progress>
                 )
                 :
                 (
                <div className="sucessup">
                  {/* eslint-disable */}
                  <p>{`${location.href}viewimage/${idimg}`}</p>
                  <Check  isRotate={true}/>
                 </div>
                 )
               )  
               :
               (<span className='error-type'>{errorType}</span>) 
               }
            </div>
          </div>
      </Card>
    </Container>
  </div>
  )
}

