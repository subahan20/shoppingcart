const INIT_STATE = {
    carts : []
};

export const cartreducer = (state = INIT_STATE , action) => {
    switch(action.type){
        case "ADD_CART" :
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if(IteamIndex >= 0){
                state.carts[IteamIndex].qnty += 1
            } else {
                const temp = {...action.payload,qnty:1}
                return {
                ...state,
                carts : [...state.carts , temp]
            }
            }
            case "RMV_CART" :
                const data = state.carts.filter((el)=>el.id !== action.payload)
                return {
                    ...state,
                    carts : data
                }
            case "RMV_ONE":
                const iteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
                if(state.carts[iteamIndex_dec].qnty >= 1){
                    const dltIteam = state.carts[iteamIndex_dec].qnty -= 1
                    console.log([...state.carts,dltIteam]);

                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                } else if(state.carts[iteamIndex_dec].qnty === 1){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
                }
            default :
            return state
    }
}