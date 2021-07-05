import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Authentic</span>
              <span>Jamaica</span>
            </h1>
            <h2>Spread The Joy <br/>
            Call or SMS to place your order today <br/>
             <h3>(700964819) or (0722874311)</h3>
            </h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Authentic Jamaica <br/>
         <h3>Call today to place an order : <br/>
         (700964819) or (0722874311)</h3>
        </p>
      </footer>
    </div>
  )
}