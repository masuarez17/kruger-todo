export default {
	getAllTodos (state) {
		return state.todoItems
	},
	getCompleteTodos (state) {
		return state.todoItems.filter(toDo => toDo.done)
	},
	getUnfinishiedTodos (state) {
		return state.todoItems.filter(toDo => !toDo.done)
	}
}
