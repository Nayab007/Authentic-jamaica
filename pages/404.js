
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function NotFound ()  {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops!  page cannot be found </h2>
      <p>Redirecting to <Link href="/">Authentic Jamaica</Link>Spread The Joy</p>

      <style jsx>{`
        .not-found {
          background: #b1f2ff;
          padding: 10px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
}
 
