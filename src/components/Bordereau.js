'use client'
import { useMemo } from 'react'
import { MENU } from '../data/menu'
import styles from './Bordereau.module.css'

export default function Bordereau({ quantities, loss, setLoss }) {
  const ordered = MENU.filter(m => quantities[m.id] > 0)
  const lossFactor = loss / 100

  const suppliers = useMemo(() => {
    const sup = {}
    ordered.forEach(item => {
      const portions = quantities[item.id]
      item.ingredients.forEach(ing => {
        if (!sup[ing.supplier]) sup[ing.supplier] = {}
        if (!sup[ing.supplier][ing.name]) sup[ing.supplier][ing.name] = { base: 0 }
        sup[ing.supplier][ing.name].base += ing.qty * portions
      })
    })
    // Apply loss per ingredient after aggregation
    Object.keys(sup).forEach(s => {
      Object.keys(sup[s]).forEach(i => {
        sup[s][i].withLoss = Math.round(sup[s][i].base * (1 + lossFactor))
        sup[s][i].extra = sup[s][i].withLoss - sup[s][i].base
      })
    })
    return sup
  }, [quantities, lossFactor])

  const grandTotal = Object.values(suppliers)
    .flatMap(s => Object.values(s))
    .reduce((acc, d) => acc + d.withLoss, 0)

  const supNames = Object.keys(suppliers).sort()

  return (
    <div className={styles.screen}>
      <div className={styles.layout}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.title}>Bordereau d'Achats</h1>

          {ordered.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>☕</div>
              <p>Aucune commande saisie.<br />Retournez à la Saisie pour ajouter des plats.</p>
            </div>
          ) : (
            supNames.map(sup => {
              const ings = suppliers[sup]
              const ingNames = Object.keys(ings).sort()
              const subTotal = ingNames.reduce((s, i) => s + ings[i].withLoss, 0)
              return (
                <div key={sup} className={styles.supplierBlock}>
                  <div className={styles.supplierHead}>{sup}</div>
                  {ingNames.map(ing => (
                    <div key={ing} className={styles.ingRow}>
                      <span className={styles.ingQty}>{ings[ing].withLoss}×</span>
                      <span className={styles.ingName}>{ing}</span>
                      <div className={styles.ingDetail}>
                        <span className={styles.ingBase}>base {ings[ing].base}</span>
                        <span className={styles.ingExtra}>+{ings[ing].extra}</span>
                      </div>
                    </div>
                  ))}
                  <div className={styles.subTotal}>SOUS-TOTAL : {subTotal} unités</div>
                </div>
              )
            })
          )}
        </div>

        {/* SIDEBAR */}
        <div className={styles.sidebar}>
          <div className={styles.sideCard}>
            <div className={styles.sideLabel}>Marge de perte</div>
            <div className={styles.lossRow}>
              <input
                type="range"
                min="5" max="10" step="1"
                value={loss}
                onChange={e => setLoss(Number(e.target.value))}
                className={styles.slider}
              />
              <span className={styles.lossVal}>{loss}%</span>
            </div>
            <div className={styles.lossNote}>Appliquée individuellement sur chaque ingrédient</div>

            <div className={styles.divider} />

            <div className={styles.sideLabel}>Récapitulatif</div>
            <div className={styles.resumeList}>
              {ordered.length === 0 ? (
                <div className={styles.noOrder}>Aucune commande</div>
              ) : (
                ordered.map(item => (
                  <div key={item.id} className={styles.resumeRow}>
                    <span className={styles.resumeName}>{item.name}</span>
                    <span className={styles.resumeQty}>{quantities[item.id]}</span>
                  </div>
                ))
              )}
            </div>

            <div className={styles.divider} />

            <div className={styles.totalLabel}>Total unités à commander</div>
            <div className={styles.totalVal}>{grandTotal.toLocaleString('fr-FR')}</div>
            <div className={styles.totalSub}>
              {loss}% de perte incluse — {ordered.length} recette{ordered.length > 1 ? 's' : ''}
            </div>

            <button className={styles.btnFull} onClick={() => window.print()}>
              🖨 Imprimer / Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
