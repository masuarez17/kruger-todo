export default {
	addTodo ({ commit }, todo) {
		commit('ADD_ITEM', todo)
	},
	removeTodo ({ commit }, index) {
		commit('REMOVE_ITEM', index)
	},
	editTodo ({ commit }, params) {
		commit('EDIT_ITEM', params)
	}
}
