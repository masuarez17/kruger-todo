<template>
	<div class="container-fluid mt-5 flex-fill">
		<div class="row d-none d-md-block"><br /></div>

		<div class="row d-none d-md-block"><br /></div>

		<div class="row justify-content-center">
			<div class="col-md-6 col-sm-8 col-lg-5">
				<div class="card-group d-flex shadow">
					<div class="card p-4 border border-dark">
						<div class="card-body">
							<form>
								<h2>Crear una cuenta</h2>

								<div class="input-group pt-3">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<SvgIcon type="mdi" :path="accountPath"/>
										</div>
									</div>
									<input type="text" class="form-control border" placeholder="Nombre de usuario"/>
								</div>

								<div class="input-group pt-3">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<SvgIcon type="mdi" :path="lockPath"/>
										</div>
									</div>
									<input type="password" class="form-control border" placeholder="Contraseña"/>
								</div>

								<div class="input-group pt-3">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<SvgIcon type="mdi" :path="lockPath"/>
										</div>
									</div>
									<input type="password" class="form-control border" placeholder="Repetir contraseña"/>
								</div>

								<div class="input-group pt-3">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<SvgIcon type="mdi" :path="atPath"/>
										</div>
									</div>
									<input type="text" class="form-control border" placeholder="Correo electrónico"/>
								</div>

								<div class="row"><br></div>

								<div class="row justify-content-center">
									<div class="text-left">
										<h5 class="text-muted text-justify">
											Al hacer click en "Registrarse" aceptas los <a href="https://github.com/masuarez17" class="pl-1"><b class="text-primary">términos y condiciones</b></a> del servicio.
										</h5>
									</div>
								</div>

								<div class="row"><br></div>

								<div class="row justify-content-sm-center justify-content-md-end">
									<button type="button" class="btn px-4 text-white bg-success border-0 btn-block">Registrarse</button>
								</div>

								<div class="row justify-content-sm-center justify-content-md-end pt-1">
									<button type="button" class="btn px-4 text-white bg-primary border-0 btn-block" @click="moveToLogin">Regresar</button>
								</div>

							</form>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="row d-none d-md-block"><br /></div>

		<div class="row d-none d-md-block"><br /></div>

		<div class="row"><br /></div>

		<div class="row align-bottom justify-content-center pt-2 pb-4">
			<Footer/>
		</div>

	</div>
</template>

<script>
import { mdiAccount, mdiLock, mdiAt } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import Footer from '../../components/Footer.vue'
import router from '../../router/index'

export default {
	data () {
		return {
			lockPath: mdiLock,
			accountPath: mdiAccount,
			atPath: mdiAt
		}
	},
	components: {
		SvgIcon,
		Footer
	},
	methods: {
		moveToLogin () {
			router.push('/')
		}
	}
}
</script>
