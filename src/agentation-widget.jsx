import { createRoot } from 'react-dom/client'
import { Agentation } from 'agentation'

const el = document.getElementById('agentation-root')
if (el) {
  createRoot(el).render(<Agentation />)
}
