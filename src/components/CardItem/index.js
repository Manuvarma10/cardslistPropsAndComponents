import './index.css'

const CardItem = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails

  return (
    <div className="card-container">
      <li className={className}>
        <h1 className="heading">{title}</h1>
        <p className="discription">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </li>
    </div>
  )
}

export default CardItem
