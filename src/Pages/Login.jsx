import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Login.css'


export default function Login(){

     {
        
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => console.log(data)
    return(
        
        <>
        <h2> Login </h2>
        <NavLink to ="/Login/Admin">Admin</NavLink>     |
       
        <NavLink to ="/Login/Faculty">Faculty</NavLink> |
        <NavLink to ="/Login/Student">Student</NavLink> 
 
 
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="username"{...register("exampleRequired", { required: false })} />
      {errors.exampleRequired && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="password"{...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
        </>
    )
}
}