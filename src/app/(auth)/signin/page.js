import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import SigninPage from '@/components/template/SigninPage'
import { redirect } from 'next/navigation'



async function signin() {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")

  return <SigninPage/>
}

export default signin