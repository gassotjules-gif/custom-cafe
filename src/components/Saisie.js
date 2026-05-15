'use client'
import { useState } from 'react'
import { MENU } from '../data/menu'
import styles from './Saisie.module.css'

const CAT_LABELS = { plat: 'Plat', dessert: 'Dessert', boisson: 'Boisson' }
const CAT_CLASS  = { plat: styles.tagPlat, dessert: styles.tagDessert, boisson: styles.tagBoisson }

export default function Saisie({ quantities, setQty, changeQty }) {
  const [filter, setFilter] = useState('tout')

  const items = filter === 'tout' ? MENU : MENU.filter(m => m.cat === filter)

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <h1>Saisie</h1>
        <p>Sélectionnez les plats commandés par les clients.</p>
      </div>

      <div className={styles.filterBar}>
        {['tout', 'plat', 'dessert', 'boisson'].map(cat => (
          <button
            key={cat}
            className={`${styles.filterTab} ${filter === cat ? styles.active : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'tout' ? 'Tout' : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {items.map(item => {
          const q = quantities[item.id]
          return (
            <div
              key={item.id}
              className={`${styles.card} ${q > 0 ? styles.hasQty : ''}`}
            >
              <div>
                <div className={`${styles.tag} ${CAT_CLASS[item.cat]}`}>
                  {CAT_LABELS[item.cat]}
                </div>
                <div className={styles.name}>{item.name}</div>
              </div>
              <div className={styles.qtyCtrl}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => changeQty(item.id, -1)}
                >
                  −
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min="0"
                  max="99999"
                  className={`${styles.qtyInput} ${q > 0 ? styles.nonzero : ''}`}
                  value={q === 0 ? '' : q}
                  placeholder="0"
                  onChange={e => setQty(item.id, e.target.value)}
                  onBlur={e => {
                    if (e.target.value === '' || parseInt(e.target.value) < 0) {
                      setQty(item.id, 0)
                    }
                  }}
                />
                <button
                  className={styles.qtyBtn}
                  onClick={() => changeQty(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
