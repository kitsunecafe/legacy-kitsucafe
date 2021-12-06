import React from "react"
import Kofi from "../../components/Kofi"

export default function Bio({ author, kofiId }) {
  return (
    <>
      <p>- {author}</p>
      <p>if this helped you, consider buying me a coffee.</p>
      <Kofi id={kofiId} />
    </>
  )
}
