import { combineReducers } from "redux";

const blogState=[
    {   
        id:1,
        title:'YOU DESIGN IT, THEY DO IT',
        author:'Likhith Raju',
        date:'21-02-2022',
        category:'React',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa saepe quidem placeat magnam iste temporibus dignissimos inventore possimus labore unde eligendi consequuntur cumque ducimus, similique, reiciendis quos assumenda nisi! Tenetur ratione iusto voluptatum ducimus inventore, praesentium quia omnis, nihil ad mollitia odio ea dolorem non consequatur cupiditate ullam at obcaecati! Eius impedit perspiciatis in adipisci aliquid quia blanditiis similique!'
    },

    {   
        id:2,
        title:'Frontend Development',
        author:'Mayank',
        date:'21-02-2022',
        category:'',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa saepe quidem placeat magnam iste temporibus dignissimos inventore possimus labore unde eligendi consequuntur cumque ducimus, similique, reiciendis quos assumenda nisi! Tenetur ratione iusto voluptatum ducimus inventore, praesentium quia omnis, nihil ad mollitia odio ea dolorem non consequatur cupiditate ullam at obcaecati! Eius impedit perspiciatis in adipisci aliquid quia blanditiis similique!'
    }
]

export const blogReducer=(state=blogState, action)=>{
    switch(action.type){
        case 'ADD_ENTRY':
            let temp
            if(state.length===0)temp={
                id:1,
                title:action.title,
                author:action.author,
                date:action.date,
                category:action.category,
                content:action.content
            }
            else {
                const lastIndex = state[state.length-1].id
                console.log(lastIndex);
                temp={
                    id:lastIndex+1,
                    title:action.title,
                    author:action.author,
                    date:action.date,
                    category:action.category,
                    content:action.content
                }
            }
            return state=[...state,temp];
        default:
            return state
    }
}


let showCard = false;

export const showCardReducer=(state=showCard,action)=>{
    switch(action.type){
        case 'SHOW_STATE':
            console.log("Showing");
            return state=true;
        case 'CLOSE_STATE':
            return state=false
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    blogReducer:blogReducer,
    showCard:showCardReducer
})