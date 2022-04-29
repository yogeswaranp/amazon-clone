export const initialState={
    basket:[],
    user:null,
};

const reducer = (state,action)=>{
    // console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket,action.item]
            };
            
        case 'REMOVE-FROM-BASKET':
            let newBasket=[...state.basket];
            const index= state.basket.findIndex(basketItem =>basketItem.id===action.id);

            if(index >=0 ){
             newBasket.splice(index,1)

            }else{
                console.warm(
                   "can't remove product " 
                )
            }
            return{
                ...state,
                basket:newBasket
            }
            
    
        default:
            return state;
    }
};
export default reducer;