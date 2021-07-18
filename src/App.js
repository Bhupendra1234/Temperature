import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
const App = () => {

  const [user, setuser] = useState('')
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) =>{ console.log(data,errors);

    let user_type = 'EMPLOYEE'
    user ? user_type = 'EMPLOYEE' : user_type = 'EMPLOYER'
    // dispatch(userRegistration(data))
  
  }
 

  return (
    <div className="account-entry"  style={{margin:'0 auto'}}>
      <div className="modal fade" id="exampleModalLong2" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><i data-feather="edit"></i>Registration</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* {authSuccess &&
              <div className="jy-alert success-alert">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>Success! {authMessage}</p>
              </div>}
            {!authSuccess && Object.keys(authData).length === 0 && authMessage &&
              <div className="jy-alert danger-alert">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <p>Danger!  {authMessage}</p>
              </div>} */}
            <div className="modal-body">
              <div className="account-type">
                <a href="#" className="candidate-acc active" onClick={() => setuser(!user)}><i data-feather="user"></i>Candidate</a>
                <a href="#" className="employer-acc" onClick={() => setuser(!user)} ><i data-feather="briefcase"></i>Employer</a>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group">
                  <input type="text" {...register('name', { required: true })}   placeholder={user ? "Candidate Name" : "Employer Name"} className="form-control" />
                  { errors.name && <p style={{ color: 'red' }}>please enter a name </p>}
                </div>

                <div className="form-group">
                  <input type="email"   {...register('email', { required: true })} placeholder="Email Address" className="form-control" />
                </div>
                {errors.email && <p style={{ color: 'red' }}>please enter email address </p>}
                <div className="form-group">
                  <input type="password"   {...register('password', { required: true })} placeholder="Password" className="form-control" />
                  {errors.password &&  <p style={{ color: 'red' }}>please enter a confirm password </p>}

                </div>
                <div className="form-group">
                  <input type="password"  {...register('confirm_passowrd', { required: true })} placeholder="Confirm Password" className="form-control" />
                  {errors.confirm_passowrd && <p style={{ color: 'red' }}>please enter a confirm password </p>}
                </div>

                <div className="more-option terms">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                    <label className="form-check-label" htmlFor="defaultCheck3">
                      I accept the <a href="#">terms & conditions</a>
                    </label>
                  </div>
                </div>
                <button  type="submit" className="button primary-bg btn-block">Register</button>
              </form>
              <div className="shortcut-login">
                <span>Or connect with</span>
                <div className="buttons">
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                  <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                </div>
                <p>Already have an account? <a href="#">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}



export default App
