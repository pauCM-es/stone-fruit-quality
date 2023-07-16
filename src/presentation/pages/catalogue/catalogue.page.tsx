import { useEffect, useState } from "react"

import Entry from "../../UI/catalogue/entry-item/entry.component"
import ToolbarCatalogue from "../../components/toolbar/toolbar.component"

import { DefectType } from "../../UI/catalogue/catalogue.types"

import "./catalogue.style.scss"



export const CataloguePage = () => {
  const [entries, setEntries] = useState<DefectType[]>([])

  useEffect(() => {
    fetch("public/dummies/entries.catalogue.json")
      .then(res => {
        res.json()
          .then(result => setEntries(result)
          );
      })
  }, [])

  useEffect(() => {
    console.log(entries);
    
  },[entries])


  return (
    <section className="catalogue">
      <ToolbarCatalogue />
      <header><h1>Catalogue Page</h1></header>
      <main className="catalogue__content">
        { entries && entries.map(entry => (
          <Entry
            key={ entry.id }
            title={ entry.title }
            description={ entry.description }
            pictures={ entry.pictures }
            more={true}
            edit={true}
            remove={true}
          />
        )) }

      </main>
    </section>
  )
}
