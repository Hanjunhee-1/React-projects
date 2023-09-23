function ToDoList(props: { toDoList: string[] }) {
    return (
        <div>
            {
                props.toDoList.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </div>
    )
}
export default ToDoList;