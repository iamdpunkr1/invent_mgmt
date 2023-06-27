import React, { useState } from 'react'
import Sidemenu from '../components/Sidemenu'
import Uploader from '../components/Uploader'
import dslr from '../assets/dslr.jpg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const EditProduct = () => {

  const [fileName,setFileName] = useState('')
  const [image,setImage] = useState('')
  const [value, setValue] = useState('');

  return (
    <div className='flex w-full'>
    <div className='w-64 mr-2 '>
    <Sidemenu/>
    </div>

    <div className='  w-full h-full'>
        <div className='flex justify-between p-2'>
            <h1 className='text-xl font-bold mt-3'>Welcome, Adrija</h1>
            <button className="btn btn-warning ">Logout</button>
        </div>
        <hr/>
        <h1 className='text-xl font-bold mt-2'>Edit Product</h1>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
            
            <div className='flex'>
                <div className='w-1/2'>
                <Uploader image={image} setImage={setImage}
                          fileName={fileName} setFileName={setFileName} />
                </div>

             <figure className='w-1/2 flex flex-col'>
                <img src={dslr} alt="Shoes" />
                <h3 className='font-bold mt-3'>Previous Image</h3>
             </figure>
            </div>
            
            {/* <div className='flex m-2'>
                <p className='font-bold pl-2'>Product availability: </p>
                <p className='text-green-400 ml-2 font-bold'> In Stock</p> 
            </div> */}
            <hr />
            <div className="card-body">
                
                <div>
                <label className="label  pb-0 font-medium">
                    <span className="label-text ">Product Name :</span>
                </label>
                <input placeholder="Enter Product Name" type='email' className="max-w-xs input input-primary input-bordered mb-3" /> 

                <label className="label  pb-0 font-medium">
                    <span className="label-text">Product Category :</span>
                </label>
                <input placeholder="Enter Product Category" type='email' className="max-w-xs input input-primary input-bordered mb-3" /> 
                
                
                <label className="label  pb-0 font-medium">
                    <span className="label-text">Product Price :</span>
                </label>
                <input placeholder="Enter Product Price" type='email' className="max-w-xs input input-primary input-bordered mb-3" /> 
                

                <label className="label  pb-0 font-medium">
                    <span className="label-text">Product Quantity :</span>
                </label>
                <input placeholder="Enter Product Quantity" type='email' className="max-w-xs input input-primary input-bordered mb-3" /> 
                

                <label className="label  pb-0 font-medium">
                    <span className="label-text">Product Description :</span>
                </label>
                </div>

                <ReactQuill theme="snow" value={value} onChange={setValue}
                 modules={EditProduct.modules}
                 formats={EditProduct.formats}
                
                 />


                <div className="card-actions justify-center">
                <button className="btn btn-secondary">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}


EditProduct.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  EditProduct.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];
export default EditProduct