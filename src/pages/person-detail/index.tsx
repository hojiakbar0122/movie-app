import { useParams } from 'react-router-dom'
import { usePerson } from './service'
import { IMAGE_URL } from '../../shared/const'
import { memo } from 'react'
import { Image } from 'antd'

const Person = () => {
    const {id} = useParams()
    const {getPersonById, getPersonItems} =  usePerson()

    const {data} = getPersonById(id || "")
    const {data:imageData} = getPersonItems(id || "", "images")
  return (
    <div className='container'>
        <div className='grid md:grid-cols-2'>
            <div>
                <img src={IMAGE_URL+data?.profile_path} width={400} alt=""/>
            </div>
            <div>
                <h1 className='text-2xl'>{data?.name}</h1>
                <strong>{data?.birthday}</strong>
            <p>{data?.biography}</p>
            </div>
        </div>
        <div className='flex overflow-x-auto'>
            {
                imageData?.profiles?.map((item:any, index:number)=>(
                    <Image key={index} src={IMAGE_URL+item.file_path} className='min-w-[150px]' />
                )
                )
            }
        </div>
    </div>
  )
}

export default memo(Person)