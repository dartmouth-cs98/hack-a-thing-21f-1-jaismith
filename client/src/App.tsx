import { QRCode } from 'react-qrcode-logo';
import './App.css';
import { getFirestore, collection, doc, setDoc, addDoc, deleteDoc, DocumentReference, DocumentData, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

const QR_LOGO_HEIGHT = 100;

function App() {
  const db = getFirestore();

  const [qrcodeDoc, setQrcodeDoc] = useState<DocumentReference<DocumentData> | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  const { search } = useLocation();
  const { id } = parse(search);

  useEffect(() => {
    if (!qrcodeDoc && !id) {
      addDoc(collection(db, 'qrcodes'), {
        scanned: false
      }).then((ref) => {
        setQrcodeDoc(ref);

        // todo - unsubscribe
        onSnapshot(doc(db, 'qrcodes', ref.id), (snapshotRef) => {
          const data = snapshotRef.data();
          const { scanned } = data || {};
          if (scanned) {
            setScanned(scanned);
            deleteDoc(doc(db, 'qrcodes', ref.id));
          }
        });
      });
    }
  }, [db, qrcodeDoc, id]);
  
  if (id) {
    setDoc(doc(db, 'qrcodes', id as string), {
      scanned: true
    });

    return (
      <div className="App">
        <header className="App-header">
          {id}
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {qrcodeDoc
          ? (
            <>
              Scan me! ({scanned ? 'scanned!' : 'not scanned'})
              <QRCode
                value={`https://cs98-hackathing-1.web.app?id=${qrcodeDoc.id}`}
                qrStyle="dots"
                eyeRadius={4}
                bgColor="transparent"
                fgColor="white"
                logoImage="lone-pine.png"
                logoWidth={QR_LOGO_HEIGHT*.5673}
                logoHeight={QR_LOGO_HEIGHT}
                logoOpacity={0.2}
                quietZone={20}
              />
            </>
          ) : 'loading...'
        }
      </header>
    </div>
  );
}

export default App;
