import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
   const [error, setError] = useState(null);

   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      // console.log(email, confirm, password);

      // validate confrim password 
      if (password.length < 6) {
         setError('Password Should be 6 characters or more.')
      }
      if (password !== confirm) {
         setError('Yoru Password did not match');
      }
   }
   return (
      <div className='form-container'>
         <h2 className='form-title'>SignUp</h2>

         <form onSubmit={handleSubmit}  >
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" required />
            </div>
            <div className="form-control">
               <label htmlFor="confirm">Confirm Password</label>
               <input type="password" name="confirm" id="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
         </form>

         <p>Already have an Account? <Link to='/login'>Login</Link> </p>
         <p className='text-error'>{error} </p>
      </div>
   );
};

export default SignUp;