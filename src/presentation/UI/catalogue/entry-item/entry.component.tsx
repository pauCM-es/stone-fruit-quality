import { Card } from "../../../components/card/card.component"

import { EntryPropsType } from "./entry.types"

import "./entry.style.scss"

const Entry = (props:EntryPropsType) => {
  const { title, pictures, description, more, edit, remove } = props
  return (
    <div className="entry">
      <Card 
        title={title}
        pictures={pictures}
        description={description}
        more= {more}
        edit= {edit}
        remove= {remove}
      />
    </div>
  )
}

export default Entry