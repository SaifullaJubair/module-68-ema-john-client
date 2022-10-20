import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../contexts/UserContext';
import './Login.css';


const Login = () => {
   const notify = () => toast('Successful Login')

   const { signIn } = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()
   const from = location?.state?.from?.pathname || '/'
   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then(res => {
            const user = res.user;
            console.log(user)
            form.reset()
            navigate(from, { replace: true })
         })
         .catch(error => console.error(error))
   }

   return (
      <div className='form-container'>
         <h2 className='form-title'>Login</h2>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder='Your Email' id="email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder='Your Password' id="password" required />
            </div>

            <input className='btn-submit' type="submit" onClick={notify} value="Log In" />
            <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light" />

         </form>
         <p>New to ema john <Link to='/signup'>Create a new Account</Link> </p>
      </div>
   );
};

export default Login;