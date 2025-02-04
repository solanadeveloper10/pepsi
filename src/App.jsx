import Contract from './Contract'

import './App.css'

function App() {
  return <>
    <video autoPlay muted loop id="bgVideo">
      <source src="/pepsi_bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className='wrapper'>
      <header className={'header loaded'}>
        <a href="https://x.com/DeepCommunizm" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/DeepCommunizm" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/FeB9v9sio2oVRwCjFSyPti4PenYK7cAPoq1dYY97cLAv?t=1737997474072" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      {/* <div className='image-wrapper'>
        <img src="/nintendo_bg.webp" alt="Nintendo DeepSeek." className='image' />
        <video autoPlay muted loop id="screenVideo">
          <source src="/screen_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <Contract />
    </div>

  </>
}

export default App
