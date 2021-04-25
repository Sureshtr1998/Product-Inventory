import axios from 'axios'
export const FAIL = 'FAIL';
export const INITIALIZE = 'INITIALIZE';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const VIEW_PRODUCT_LIST = 'VIEW_PRODUCT_LIST';
export const VIEW_PRODUCT_DETAIL = 'VIEW_PRODUCT_DETAIL';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const LOGOUT = 'LOGOUT';
export const CHART = 'CHART';
export const FEEDBACK = 'FEEDBACK';



export const register = (res, jst) => {

    return {
        type: REGISTER,
        data: res,
        val:  jst
    }
}


export const register_func = (data, jst) => {

return dispatch => {


       axios.post('http://localhost:5000/register',data)
       .then(res =>
        {
            console.log(res.data.length)
        if(res.data.length > 2 ){
            console.log("REG FAIL")
            dispatch(fail(jst))
        
        }

        else {
            dispatch(register(res,  jst))

        }
       
        })
    }
    
}
    
   


export const fail = (jst) => {

    return {
        type: FAIL,
        val: jst
    }
}







export const login = (res, jst) => {

    return {
        type: LOGIN,
        data: res,
        val:jst
    }
}


export const login_func = (info, jst) => {
//Use post for login and send emailid and pwd so that in node it can verify better
    return dispatch => {

        axios.post('http://localhost:5000/login/',info)

        

            .then(res=>
              //  dispatch(login(res.data.EmailID, jst))
                {
                // console.log(res.data[0])
               console.log(res.data)
               if(res.data.EmailID)
              {
                    localStorage.setItem('token', res.data.token)
                        dispatch(login(res.data, jst))
              }
              
              else {
                 console.log("ELse part")

                dispatch(fail(jst))
              }
                      
                })
            .catch(err =>
               
                
                dispatch(fail(jst)))

        }
    }


export const Product = info => {


    return {

        type: VIEW_PRODUCT_LIST,
        data: info
    }
}

    

export const Product_det = () => {

    return dispatch => {

        axios.get('http://localhost:5000/products')

            .then(res=> {
                    console.log(res)
                    if(res.data){
                dispatch(Product(res.data))
                    }
                    else{

                        dispatch(fail())
                    }
            })
            .catch(err =>
                
                console.log("Pro FAIL"))
              //   dispatch(fail()))

        }
    }



    export const addp = (data) => {

return {

    type: ADD_PRODUCT,
    val: data
}
    }


    export const Addprod = (data) => {


        return dispatch => {
          // Use this only when you r using node and auth token
          //  axios.defaults.headers.common['auth-token'] = localStorage.getItem('token');
          axios.defaults.headers.common['auth-token'] = localStorage.getItem('token');
            axios.post('http://localhost:5000/products', data)
        
            .then(res => dispatch(addp(res)))
            .catch(err =>  dispatch(fail))
        
        
        }

    }


    export const onDel = data => {


        return dispatch => {

             // Use this only when you r using node and auth token
          //  axios.defaults.headers.common['auth-token'] = localStorage.getItem('token');

            axios.delete('http://localhost:5000/products/'+ data)

                .then(res => dispatch(Product_det()))
                .catch(console.log('Deleted Fail'))

    
    }
    }





    
    export const edload = (data) => {

        return {
        
            type: EDIT_PRODUCT,
            val: data
        }
            }

   


    
    export const EditSub = (id, data) => {


        return dispatch => {

             // Use this only when you r using node and auth token
            axios.defaults.headers.common['auth-token'] = localStorage.getItem('token');

            axios.put('http://localhost:5000/products/'+ id, data)

                .then(res => dispatch(edload(res.data)))
                .catch(console.log('Edited Fail'))

    
    }
    }


export const onLogout = () => {
    localStorage.setItem('token', ' ')
    return {

        type: LOGOUT
    }
}


export const Chart = (Data) => {

  

        return dispatch => {

            axios.defaults.headers.common['auth-token'] = localStorage.getItem('token');

           // axios.post('http://localhost:5000/products/'+ Data._id,{...Data, Count: Cnt })
            axios.post('http://localhost:5000/products/'+ Data)

                .then(res =>dispatch(edload(res.data)))

                .catch(console.log('Edited Fail'))

    
    }
}

export const feedback = (data) => {

  

    return dispatch => {

        axios.post('http://localhost:5000/feedback', data)
    
        .then(res=> console.log(res))
        .catch(err => console.log(fail))
    
    
    }
}


export const Feedback = (data) => {

    return {

        type: FEEDBACK,
        val: data
    }
}

export const feedinit = () => {

    return dispatch => {

        axios.get('http://localhost:5000/feedback')

        .then(res=> {
                
            dispatch(Feedback(res.data))
        })
        .catch(err => console.log(err))

    
    }


}







    