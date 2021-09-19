import './style.css'
export function PageNotFound(){
  return (
    <div className='container-error'>
      <span className='errorcode'>404</span>
      <span className='notfound'>
      Page Not Found =(
      </span>
    </div>
  )
}