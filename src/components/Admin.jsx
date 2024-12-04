import React, { useEffect, useState } from 'react'
import { renderToReadableStream } from 'react-dom/server'

const Admin = () => {
    
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(json => setData(json))
  },[])
  console.log(data)
  
  return (
    <>

        <div className='flex  flex-wrap  p-[100px] gap-5 bg-[#24292E] justify-center'>
          {
            data.map((item)=>{
                <h1 className='text-slate-900'>gen-z</h1>
              return(

            <div key={item.id} className="card w-[300px] p-5 border-2 border-[#5a5a5a] group">
                <div className="cardimg overflow-hidden w-[200px] h-[200px]  bg-gray-400 m-auto">
                  <img src={item.images} alt="image" className='group-hover:translate-xy-[1.1]'/>
                </div>
                <div className="user font-semibold pt-5">
                    {/* <h2 className='mt-3 text-white'>ID: {item.id}</h2> */}
                    <h2 className='mt-3 text-white'>{item.title}</h2>
                    <h2 className='mt-3 text-white'>PRICE: {item.price}$</h2>
                    <h2 className='mt-3 text-white'>UPDATEAT: {item.updatedAt}</h2>
                    <button className='mt-7 py-3 px-24 bg-lime-600 rounded-[10px] flex m-auto hover:bg-lime-800 transition-[.4s] '>ORDER</button>
                </div>
            
            </div>
          
           
              )


            })
          }
    </div>

    </>
  )
}

export default Admin