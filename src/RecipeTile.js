import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile({food}) {
    return (
        food["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
         != null && <div className="recipeTile" onClick={() => {
             window.open(food["recipe"]["url"])
         }}>
            <img className="recipeTile-img" src={food["recipe"]["image"]} alt={food["recipe"]["label"]} />
            <p className="recipeTile-name">{food["recipe"]["label"]}</p>
        </div>
    )
}
