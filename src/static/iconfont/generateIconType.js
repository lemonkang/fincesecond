
const fs =require('fs')
const fileName='./iconfont.js'
const iconNameTypePath ="./iconNameType.ts"
const readFile=(filePathName)=>{
    fs.readFile(filePathName,'utf-8',(error,data)=>{
        if (error) {
            throw error
        }
    //获取所有id="icon-Company"格式的正则
     const reg=/id="[a-zA-Z-]*"/g
    //id="icon-Company需要被替换正则
      const searchValueReg=/(id="icon-)|"/g 
    //   map(item=>item.replaceAll(searchValueReg,""))
    const idMatchArrs=  data.match(reg)
   const idArrs= idMatchArrs.map(item=>{
   const replactItem= item.replaceAll(searchValueReg,"")
   return `"${replactItem}"`
})
   const iconNameType=idArrs.join("|")
   console.log('====================================');
   console.log(iconNameType);
   console.log('====================================');
   fs.writeFile(iconNameTypePath,
    `export type iconNameType=${iconNameType}`,
    'utf8',(err)=>{
        if (err) {
            console.log('====================================');
            console.log("write",err);
            console.log('====================================');
        }

   })
    })
}
function generateIconType(){
    readFile(fileName)
}
generateIconType()