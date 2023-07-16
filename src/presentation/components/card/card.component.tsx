import Gallery from "devextreme-react/gallery"

import { CardPropsType } from "./card.types"

import "./card.style.scss"

export const Card = (props: CardPropsType) => {
  const { title, pictures, description, more, edit, remove } = props

  return (
    <article>
      <div className="card">
        <Gallery 
        dataSource={pictures}
        height={300}
        swipeEnabled={true}
        showNavButtons={true}
        indicatorEnabled={true}
        showIndicator={true}
        animationDuration={400}
        animationEnabled={true}
        stretchImages={true}
        />
        <div className="card__body">
          <h2 className="body__title">{ title }</h2>
          <p className="body__description">{ description }</p>
          <div className="card__footer">
            { more && <button>View More</button> }
            { edit && <button>Edit</button> }
            { remove && <button>Delete</button> }
          </div>
        </div>
      </div>
    </article>
  )
}