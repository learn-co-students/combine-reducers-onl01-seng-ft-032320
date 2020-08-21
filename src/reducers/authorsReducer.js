export const authorsReducer = (state = [] ,action)=>{
      
  switch(action.type){
     case "ADD_AUTHOR":
     return{
         ...state,
         authors: [...state.authors,action.author]
     }
    
  }

  
}