import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import { useHistory } from 'react-router-dom'

const App = () => {
  const [videocall, setVideocall] = useState(true)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [username, setUsername] = useState('')
  const history =useHistory()
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Pettamo Teleconsultation</h1>
        {videocall ? (<>
          <div style={styles.nav}>
            {/* <p style={{ fontSize: 20, width: 200 }}>You're {isHost ? 'a host' : 'an audience'}</p>
            <p style={styles.btn} onClick={() => setHost(!isHost)}>Change Role</p>
            <p style={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p> */}
          </div>
          <AgoraUIKit
            rtcProps={{
              appId: '2a68b3b9275842f49f3b9fcbd6786585',
              channel: 'test',
              token: null, //add your token if using app in secured mode
              role: isHost ? 'host' : 'audience',
              layout: isPinned ? layout.pin : layout.grid
            }}
            rtmProps={{username: username || 'user', displayUsername: true}}
            callbacks={{
              EndCall: () => history.goBack(),
            }} /></>
        ) : (
          <div style={styles.nav}>
              <input style={styles.input} placeholder='nickname' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>Start Call</h3>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
  heading: { textAlign: 'center',  marginBottom: 0 },
  videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 },
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: '4px 8px', color: '#ffffff', fontSize: 20 },
  input: {display: 'flex', height: 24, alignSelf: 'center'}
}

export default App