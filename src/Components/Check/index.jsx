import  check from '../../Assets/check.png'
import './style.css'
export function Check({isRotate}){
  return (
    <>
      <img src={check} alt="imgconfirm upload"  className={(isRotate ? 'rotate ' : '') + 'img'}/>
    </>
  )
}