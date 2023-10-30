import Link from 'next/link'

export default function Contact({ className, href, children }) {
    return <Link className={ className } href={ href }>{ children }</Link>
}