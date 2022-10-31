export const addEntry=(title,author,date,category,content,image)=>{
    return {
        type:'ADD_ENTRY',
        title,
        author,
        date,
        category,
        content,
        image
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