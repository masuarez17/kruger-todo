<template>
	<div class="container-fluid mt-5 flex-fill">
		<div class="row d-none d-md-block"><br /></div>

		<div class="row w-100 d-none d-md-block pb-3">
			<h1 class="display-1">Todo App</h1>
		</div>

		<div class="row justify-content-center w-100 h-100">
			<div class="col-md-6 col-sm-8 col-lg-5">
				<div class="card-group d-flex shadow">
					<div class="card p-0 border border-dark">
						<div class="container">
							<div class="row justify-content-center">
								<div class="input-group input-group-lg">
									<div class="input-group-prepend pl-4">
										<div class="input-group-text bg-white border-0">
											<SvgIcon :class="haveTodos ? '': 'text-white'" type="mdi" :path="arrowPath"/>
										</div>
									</div>
									<input
										type="text"
										class="form-control ml-3 font-italic border-0"
										ref="addTodo"
										@keypress.enter="addTodo"
										v-model="toDoInput"
										placeholder="What needs to be done?"
									/>
								</div>
							</div>
						</div>

						<div v-if="haveTodos" class="card-body mb-n5">
							<div v-for="(todo, index) in todoItems" :key="todo.name" ref="items" @mouseover="todo.hover = true" @mouseleave="todo.hover = false">
								<div class="container" >
									<div class="row mb-4 justify-content-end">
										<div class="col-2 justify-content-lg-start">
											<input class="form-control form-check-inline" type="checkbox" v-model="todo.done">
										</div>

										<div class="col-10 justify-content-end">
											<input
												v-show="todo.edit"
												type="text"
												v-model="editInput"
												ref="editInput"
												class="form-control bg-white btn-sm border-0"
												@blur="todo.edit = false"
												@keypress.enter="saveChanges(index)"
											/>
											<h3 @dblclick="activateEdit(todo, index)" class="form-control user-select-none text-left border-0" v-show="!todo.edit">{{ todo.name }}</h3>
										</div>
										<div class="col-2 position-absolute">
											<div v-show="todo.hover">
												<button type="button" class="close text-danger" @click="removeTodo(index)" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div v-if="haveTodos" class="container mt-4 pb-2">
							<div class="row">
								<div class="col-3 col-xs-12 align-content-end">
									<button type="button" disabled class="bg-white btn-sm border-0">
										{{ todoItems.length }} items left
									</button>
								</div>

								<div class="col-6 col-xs-12 justify-content-center mt-n2">
									<div class="btn-group btn-group-toggle" data-toggle="buttons">
										<label @click="filter = 'All'" :class="filter === 'All' ? 'btn border' : 'btn btn-white'">
											<input type="radio" name="options" id="option1" autocomplete="off" checked> All
										</label>
										<label @click="filter = 'Unfinished'" :class="filter === 'Unfinished' ? 'btn border' : 'btn btn-white'">
											<input type="radio" name="options" id="option2" autocomplete="off"> Active
										</label>
										<label @click="filter = 'Done'" :class="filter === 'Done' ? 'btn border' : 'btn btn-white'">
											<input type="radio" name="options" id="option3" autocomplete="off"> Completed
										</label>
									</div>
								</div>

								<div class="col-3 d-none d-md-none d-lg-block d-sm-none col-xs-12">
									<button
										v-if="completedTodosExist"
										type="button"
										class="text-nowrap bg-white btn-sm border-0 btn-link text-black-50"
										@click="removeCompletedTodos"
									>
										Clear completed
									</button>
								</div>
								<div class="col-3 d-md-block d-lg-none">
									<button
										v-if="completedTodosExist"
										type="button"
										class="bg-white btn-sm border-0 btn-link text-black-50"
										@click="removeCompletedTodos"
									>
										Clear completed
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row d-none d-md-block"><br /></div>

		<div class="row d-none d-md-block"><br /></div>

		<div class="row"><br /></div>

	</div>
</template>

<script>
import { mdiChevronDown, mdiLock, mdiAt } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import router from '../../router/index'

export default {
	data () {
		return {
			// Icons Paths
			lockPath: mdiLock,
			arrowPath: mdiChevronDown,
			atPath: mdiAt,

			// ToDo Filter
			filter: 'All',

			// ToDo Inputs
			toDoInput: '',
			editInput: ''
		}
	},
	components: {
		SvgIcon
	},
	computed: {
		todoItems () {
			if (this.filter === 'All') {
				return this.$store.getters.getAllTodos
			} else if (this.filter === 'Done') {
				return this.$store.getters.getCompleteTodos
			} else {
				console.log('UNFINISHED')
				return this.$store.getters.getUnfinishiedTodos
			}
		},
		haveTodos () {
			return this.$store.getters.getAllTodos.length > 0
		},
		completedTodosExist () {
			let exist = false
			this.todoItems.forEach(todo => {
				if (todo.done) {
					console.log('DONE EXIST')
					exist = true
				}
			})
			return exist
		}
	},
	methods: {
		moveToLogin () {
			router.push('/')
		},
		addTodo () {
			const todo = {
				name: this.toDoInput,
				done: false,
				edit: false,
				hover: false
			}
			this.$store.dispatch('addTodo', todo)
			this.toDoInput = ''
			this.$refs.addTodo.blur()
		},
		activateEdit (todo, index) {
			this.editInput = todo.name
			todo.edit = true
			this.$nextTick(() => this.$refs.editInput[index].focus())
		},
		saveChanges (index) {
			this.$store.dispatch('editTodo', { index: index, text: this.editInput })
		},
		removeTodo (index) {
			this.$store.dispatch('removeTodo', index)
		},
		removeCompletedTodos () {
			this.todoItems.forEach(todo => {
				console.log('TODO: ', todo)
				if (todo.done) {
					console.log('REMOVING: ', todo)
					this.$store.dispatch('removeTodo', todo)
				}
			})
			if (this.completedTodosExist) {
				this.removeCompletedTodos()
			}
		}
	},
	mounted () {
		console.log('TODOS: ', this.todoItems)
	}
}
</script>
