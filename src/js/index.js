// style
import '../sass/style.scss'

// React
import { createRoot } from 'react-dom/client';



import Chart from './components/app'

function render() {
    const container = document.querySelector('.outer-container')
    const root = createRoot(container)
    root.render(<Chart />)
}

render()