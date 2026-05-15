'use client'
import { useState, useCallback } from 'react'
import { MENU } from '../data/menu'
import Saisie from './Saisie'
import Bordereau from './Bordereau'
import styles from './App.module.css'

export default function App() {
  const [screen, setScreen] = useState('saisie')
  const [quantities, setQuantities] = useState(() => {
    const q = {}
    MENU.forEach(m => q[m.id] = 0)
    return q
  })
  const [loss, setLoss] = useState(7)

  const totalOrders = Object.values(quantities).reduce((s, v) => s + v, 0)

  const setQty = useCallback((id, val) => {
    const n = Math.max(0, parseInt(val) || 0)
    setQuantities(prev => ({ ...prev, [id]: n }))
  }, [])

  const changeQty = useCallback((id, delta) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }))
  }, [])

  const clearAll = useCallback(() => {
    setQuantities(prev => {
      const q = {}
      Object.keys(prev).forEach(k => q[k] = 0)
      return q
    })
  }, [])

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          ☕ <span>La</span> Cuisine
        </div>
        <div className={styles.navTabs}>
          <button
            className={`${styles.navTab} ${screen === 'saisie' ? styles.active : ''}`}
            onClick={() => setScreen('saisie')}
          >
            Saisie
          </button>
          <button
            className={`${styles.navTab} ${screen === 'bordereau' ? styles.active : ''}`}
            onClick={() => setScreen('bordereau')}
          >
            Bordereau d'Achats
            {totalOrders > 0 && (
              <span className={styles.badge}>{totalOrders}</span>
            )}
          </button>
        </div>
        <div className={styles.navActions}>
          <button className={styles.btnClear} onClick={clearAll}>
            Vider la grille
          </button>
          <button className={styles.btnPrimary} onClick={() => setScreen('bordereau')}>
            Voir le bordereau →
          </button>
        </div>
      </nav>

      {screen === 'saisie' && (
        <Saisie quantities={quantities} setQty={setQty} changeQty={changeQty} />
      )}
      {screen === 'bordereau' && (
        <Bordereau quantities={quantities} loss={loss} setLoss={setLoss} />
      )}
    </div>
  )
}
