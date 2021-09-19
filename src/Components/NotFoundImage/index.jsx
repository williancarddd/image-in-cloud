import notimg from "../../Assets/image-not-found-image.png"
import './style.css'
export function NotFoundImage(){
  return (
    <>
     <img src={notimg} alt="this id is not related to an img" className='imgnt'/>
    </>
  )
}