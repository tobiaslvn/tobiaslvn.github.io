import { createRoot } from 'react-dom/client'
import { Agentation } from 'agentation'

const el = document.createElement('div')
document.body.appendChild(el)
createRoot(el).render(<Agentation />)
