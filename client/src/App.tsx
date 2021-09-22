import { QRCode } from 'react-qrcode-logo';
import './App.css';

const QR_LOGO_HEIGHT = 100;

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        Scan me!
        <QRCode
          value="https://google.com"
          qrStyle="dots"
          eyeRadius={4}
          bgColor="transparent"
          fgColor="white"
          logoImage="lone-pine.png"
          logoWidth={QR_LOGO_HEIGHT*.5673}
          logoHeight={QR_LOGO_HEIGHT}
          logoOpacity={0.4}
          quietZone={20}
        />
      </header>
    </div>
  );
}

export default App;
