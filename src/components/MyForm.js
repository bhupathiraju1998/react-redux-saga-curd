import { Button, Container, Grid, Input } from "@mui/material";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/sagas/types";
import { useSelector ,useDispatch} from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
const MyForm  = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({...user,[prop]:event.target.value}))
    }

    const handleSubmit = () => {
        // user.id === 0 ? dispatch(addUserSlice({...user,id:nanoid(8)})) : dispatch(editUserSlice(user))
        user.id === 0 ? dispatch({type:CREATE_USER,user:{...user,id:nanoid(8)}}) : dispatch({type:UPDATE_USER_BY_ID,user})
        
        dispatch(setUserSlice({
                    id:0,
                    name:'',
                    email:'',
                    password:''
                }
        ))
    }


    return<h1>
        <Container>
         <Input value={user.id} fullWidth disabled/>  
         <Input value={user.name} onChange={handleChange('name')} placeholder="Enter Name"  fullWidth />  
         <Input value={user.email} onChange={handleChange('email')} placeholder="Enter Email"  fullWidth />  
         <Input value={user.password} onChange={handleChange('password')} placeholder="Enter Password"  fullWidth />  
         <Button onClick={()=>handleSubmit()}fullWidth variant="contained">Submit</Button> 
        </Container>
    </h1>
}

export default MyForm;