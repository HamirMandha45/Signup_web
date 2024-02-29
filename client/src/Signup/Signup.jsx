import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const[error,setError] = useState(false);
  const[loading,setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/v1/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      if(data.error){
        setError(true);
        return ;
      }
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }
  return (
    <div className=' p-7 max-w-lg mx-auto flex flex-col justify-center'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Sign-up</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
        <input type='text'
          placeholder='Name'
          id='name'
          className=' bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        ></input>
        <input type='email'
          placeholder='Email'
          id='email'
          className=' bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        ></input>
        <input type='password'
          placeholder='password'
          id='password'
          className=' bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        ></input>
        <button disabled={loading} className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...':'Sign Up' }</button>
      </form>
      {
        error && <p className=' text-red-500 text-center'>something gone wrong</p>
      }
      <p></p>
      <div className=' flex gap-4 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className=' text-blue-500'>Sign-in</span>
        </Link>
      </div>

    </div>
  )
}

export default Signup