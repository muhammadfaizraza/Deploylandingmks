import horse from '../../../assets/image 4.png'
import Counter from './Counter'

const Addington = () => {
  return (
    <>
      <div className="Addington">
        <div className='AddingtonStyle'>
          <img src={horse} alt='' />
          <p className='Addingtonname'>Addington</p>
          <p  className='Addingtontimer'>
            <Counter />
          </p>
        </div>
      </div>
    </>
  )
}
export default Addington