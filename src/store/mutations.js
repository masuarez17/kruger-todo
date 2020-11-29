export default {
	SET_ITEMS (state, items) {
		state.todoItems = items
	},
	CLEAR_ITEMS (state) {
		state.todoItems = []
	},
	ADD_ITEM (state, item) {
		state.todoItems.push(item)
	},
	REMOVE_ITEM (state, index) {
		state.todoItems.splice(index, 1)
	},
	EDIT_ITEM (state, { index, text }) {
		state.todoItems[index].name = text
	}
}
