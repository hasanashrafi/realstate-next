import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import SignupPage from '@/components/template/SignupPage'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'


async function SignUp() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
    
  return <SignupPage/>
}

export default SignUp