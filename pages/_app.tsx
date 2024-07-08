import '@styles/globals.css'
import '@styles/home.css'
import '@styles/navbar.css'
import '@styles/about.css'
import '@styles/blog.css'
import React from 'react'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
