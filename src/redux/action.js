export const addEntry=(title,author,date,category,content)=>{
    return {
        type:'ADD_ENTRY',
        title,
        author,
        date,
        category,
        content
    }
}

export const setshowCard=()=>{
    return{
        type:'SHOW_STATE'
    }
}

export const resetshowCard=()=>{
    return{
        type:'CLOSE_STATE'
    }
}