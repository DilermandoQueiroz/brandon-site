import Navigation from '@/components/Navigation'
import Avatar2 from '@/components/Avatar2'
import Contact from '@/components/Contact'
import Link from 'next/link'


export default function ContactPage() {
  return (
    <>
      <Navigation/>
      <Link href="https://www.instagram.com/bfredericotattoos/">
        <Avatar2/>
        <Contact/>
      </Link>
    </>
  )
}