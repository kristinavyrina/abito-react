import './Sidebar.css'

export const Sidebar = ({img, title, text}) => {
  return (
    <>
      <a className="sidebar__list-item">
        <img
        className="sidebar__list-item--img"
        src={img}
        alt="side-info"
        />
        <h5 className="sidebar__list-item--title">
        {title}
        </h5>
        <p className="sidebar__list-item--text">
        {text}
        </p>
      </a>
    </>
  )
}

