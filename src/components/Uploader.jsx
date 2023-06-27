import './uploader.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'

const Uploader = ({fileName,setFileName,image,setImage}) => {

  return (
    <main>
        <form className='uploadForm' action=""
        onClick={()=>{ document.querySelector('.input-file').click()}}>
        
        <input type="file" accept="image/*" className='input-file' hidden
        onChange={({target: {files}})=>{
            files[0] && setFileName(files[0].name)
            if(files){
                const file = files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                setImage(reader.result);
                }
                // setImage(URL.createObjectURL(files[0]))
            }
        }}
        />
        
        {image ?
            <img src={image} width={150} height={150} alt={fileName} />
            :
            <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p>Select new file to upload</p>
            </>
            
        }
        </form>
        <section className='uploaded-row'>
            <AiFillFileImage color="#1475cf"/>
            <span className='upload-content'>
                {fileName}
                <MdDelete
                onClick={()=>{
                    setFileName("No Selected File")
                    setImage(null)
                }}/>
            </span>
        </section>
    </main>
  )
}

export default Uploader