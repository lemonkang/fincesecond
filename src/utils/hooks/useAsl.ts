import { useRequest } from 'ahooks'
import { message } from 'antd'
import { AxiosHeaders } from 'axios'
import { set } from 'immer/dist/internal'
import {useCallback, useEffect, useState} from 'react'
import { axiosGet } from '../../api'
import { PaginationType } from '../../api/requestType'
type Props={
  url:string  
}
type queryParamType={
    pageSize:number
    pageNum:number
    [key:string]:any
}
const useAml=<T>(url:string)=>{
    const [lists, setLists] = useState<T[]>([])
    const [queryParam, setQueryParam] = useState<queryParamType>({pageSize:10,pageNum:1})
    const [next, setNext] = useState<boolean>(true)
    const [total, setTotal] = useState<number>(0)
    const fetchData=useCallback(async ()=>{    
        try {
         const result=  await axiosGet<PaginationType<T>>({url,params:queryParam})
         return result
        } catch (error) {
           throw  error
        } 
    },[]) 
    const {loading  } = useRequest(fetchData,{
        manual: false,
        onSuccess: (result, params) => {
            const {total,items,next}=result.data
            setLists(lists=>([...lists,...items]))
            setTotal(total)
            setNext(next)
          },
          onError: (error) => {
            message.error(error.message);
          },
          refreshDeps: [url,queryParam],
          debounceWait: 1000,
    })
    const initialList=()=>{
       setLists([]);
       setNext(true);
       setTotal(0); 
    }


    const query=(params:{
        pageSize?:number
        pageNum?:number
        [key:string]:any
    })=>{
        if (!params.pageNum) {
        initialList() 
        }
        setQueryParam(queryParam=>({...queryParam,...{pageSize:10,pageNum:1},...params}))
    }

    const loadMore=()=>{
        if (next) {
            setQueryParam(queryParam=>({...queryParam,pageNum:queryParam.pageNum+1})) 
        }
    }
    // const resetQuery=()=>{
    //     setQueryParam({pageSize:10,pageNum:1})
    // }

    
    return {lists,next,total,loading,query,loadMore}
}
export default useAml