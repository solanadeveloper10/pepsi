import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <div className="spinner">
      <img src="/favicon.png" alt="Spinner" className='spinner-img' />
    </div>
    <video autoPlay muted loop id="bgVideo">
      <source src="/pepsi_bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className='wrapper'>
      <header className={'header loaded'}>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
