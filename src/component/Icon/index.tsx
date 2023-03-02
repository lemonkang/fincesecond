 import { CSSProperties } from 'react'
import { iconNameType } from '../../static/iconfont/iconNameType'
import Style from './index.module.scss'
 interface Props{
    fontSize?:number,
    className?:string,
    style?:CSSProperties,
    iconName:iconNameType
    color?:string
 }
   const Icon = (props:Props) => {
    const {fontSize,className,style,iconName,color}=props
    const wrapperStyle={...style,fontSize:fontSize+'px',color}
    return (
        <div className={className} style={wrapperStyle}>
          <svg className={Style.icon} aria-hidden="true">
            <use xlinkHref={`#icon-${iconName}`}></use>
          </svg>
        </div>
    )
}
export default Icon