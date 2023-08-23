import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { signUp } from 'next-auth-sanity/client'
import { useRouter } from 'next/navigation'

export default function SignUpForm () {
  const [Data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleSignUp = async e => {
    e.preventDefault()
    console.log(Data)
    try {
      const user = await signUp({
        email: Data.email,
        password: Data.password,
        name: Data.name
      })
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form>
        <input
          onChange={e => setData({ ...Data, email: e.target.value })}
          placeholder='email'
          type='email'
          value={Data.email}
        ></input>
        <input
          onChange={e => setData({ ...Data, name: e.target.value })}
          placeholder='name'
          type='text'
          value={Data.name}
        ></input>
        <input
          onChange={e => setData({ ...Data, password: e.target.value })}
          placeholder='password'
          type='password'
          value={Data.password}
        ></input>
        <button onClick={handleSignUp} type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  )
}
