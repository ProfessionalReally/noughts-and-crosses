import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/main.scss'
import App from './App.tsx'
import {GameProvider} from "./context/GameContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GameProvider>
            <App/>
        </GameProvider>
    </StrictMode>,
)
