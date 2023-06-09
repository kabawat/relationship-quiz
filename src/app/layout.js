import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz by Ms Rajputana',
  description: 'Quiz App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className="main">
          <div className="bgImage">
            <img className="desktop" src="/Registration-Page-Desktop.png" alt="" />
            <img className="mobile" src="/Registration-Page-Mobile.png" alt="" />
          </div>

          <div className="mainContainer">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
