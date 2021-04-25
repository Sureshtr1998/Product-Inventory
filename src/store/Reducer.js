import * as Action from './Action'


const initialState = {
    registered: false,
    isAuthenticated: false,
    products: [],
    EditPro: [],
    jst: ' ',
    viewreg: [],
    comments:[]
}


const reducer = (state = initialState, action) => {



    if (Action.REGISTER === action.type) {
        return {
            ...state,
            registered: true,
            jst: action.val
        }
    }


    if (Action.LOGIN === action.type) {
        return {
            ...state,
            isAuthenticated: true,
            jst: action.val,
            
            viewreg: action.data

        }
    }

    if (Action.FAIL === action.type) {
        return {
            ...state,
            isAuthenticated: false,
            jst: action.val,

            registered: false
        }
    }


    if (Action.VIEW_PRODUCT_LIST === action.type) {
        return {
            ...state,
            products: action.data
        }
    }

    


    if (Action.EDIT_PRODUCT === action.type) {
        return {
            ...state,
            EditPro: action.val
        }
    }


    if(Action.LOGOUT === action.type){

        return {

            ...state,
            isAuthenticated: false
        }

    }



if(Action.FEEDBACK=== action.type){

    return {

        ...state,
        comments: action.val

        
    }
}

    return state;
}

export default reducer;