import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="container">
        <p className="title">{title}</p>
        <button className="button" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
