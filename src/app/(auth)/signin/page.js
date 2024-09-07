import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SigninPage from '@/components/template/SigninPage'



async function signin() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")

  return <SigninPage/>
}

export default signin