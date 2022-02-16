export const userLocalData={
    setLocal:(data)=>{
        return localStorage.setItem(data.key,data.value)
    },
    getLocal:(key)=>{
        return localStorage.getItem(key)
    },
    removeLocal:(key)=>{
        return localStorage.removeItem(key)
    }
}