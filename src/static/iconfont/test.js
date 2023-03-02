let treeArr = [
    { id: '01', lable: '项目经理', pid: '' },

    { id: '02', lable: '产品leader', pid: '01' },

    { id: '03', lable: 'UIleader', pid: '01' },

    { id: '04', lable: '技术leader', pid: '01' },

    { id: '05', lable: '测试leader', pid: '01' },

    { id: '06', lable: '运维leader', pid: '01' },

    { id: '07', lable: '产品经理', pid: '02' },

    { id: '08', lable: '产品经理', pid: '02' },

    { id: '09', lable: 'UI设计师', pid: '03' },

    { id: '10', lable: '前端工程师', pid: '04' },

    { id: '11', lable: '后端工程师', pid: '04' },

    { id: '12', lable: '后端工程师', pid: '04' },

    { id: '13', lable: '测试工程师', pid: '05' },

    { id: '14', lable: '测试工程师', pid: '05' },

    { id: '15', lable: '运维工程师', pid: '06' }
]
//将一个树转换成数组
const newArr=[]

const deep=(deepArr)=>{
    for (let index = 0; index < deepArr.length; index++) {
        const element = deepArr[index];
        const children= treeArr.filter((item)=>item.pid===element.id)     
        console.log('====================================');
        console.log('children',children);
        console.log('====================================');
        if (children.length !==0) {
            element["children"]=children 
            deep(children)
        }
        newArr.push(element) 
    }

}

const translate=()=>{
    const firstLevel=treeArr.filter(item=>!item.pid)
    deep(firstLevel)
  
}
translate()
console.log('====================================');
console.log(newArr);
console.log('====================================');