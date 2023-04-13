export type ResultType<T>={
    code:number,
    success:boolean,
    message:string,
    data:T
}
export type PaginationType<T>={
    total:number,
    items:T[]
    next:boolean
}