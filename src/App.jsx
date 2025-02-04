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
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/CH9B9m9ddfbxSvxRaYEB79zEKbz5eJAdkT8WswfrwgEV?t=1738668825481" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/a3bk2cN84ZfapR1vsnxa73phHVD3mi2rVBAgLTrRC6b" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=a3bk2cN84ZfapR1vsnxa73phHVD3mi2rVBAgLTrRC6b" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
