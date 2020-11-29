<template>
  <div class="container-fluid mt-4 flex-fill">
    <div class="row"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="card-group d-flex shadow">
          <div class="card p-4">
            <div class="card-body">
              <form>
                <h2>Iniciar sesión</h2>
                <p class="text-muted">Ingresa con tu nombre de usuario y contraseña</p>

                <div class="input-group pt-4">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <SvgIcon type="mdi" :path="accountPath"/>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control border"
                    placeholder="Nombre de usuario"
                  />
                </div>

                <div class="input-group pt-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <SvgIcon type="mdi" :path="lockPath"/>
                    </div>
                  </div>
                  <input
                    type="password"
                    class="form-control border"
                    placeholder="Contraseña"
                  />
                </div>
                <div class="row"><br /></div>

                <div class="row pt-4">
                  <div class="text-left col-8">
                    <button type="button" class="bg-white border-0 btn-link">
                      Olvidáste tu contraseña?
                    </button>
                  </div>

                  <div class="text-right col-4">
                    <button type="button" class="btn btn-primary border-0" @click="moveToToDo">
                      Acceder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            class="card text-center p-4 col d-none d-md-block bg-primary text-white"
          >
            <div class="card-body">
              <div class="card-body">
                <h2 class="pb-3 pt-3">Regístrate</h2>
                <p class="pt-2 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  type="button"
                  @click="moveToRegister"
                  class="btn bg-primary text-white border-light btn-lg"
                >
                  Regístrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row d-none d-md-block"><br /></div>

    <div class="row"><br /></div>

    <div class="row align-bottom justify-content-center pb-3">
      <Footer/>
    </div>

  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiLock } from '@mdi/js'
import router from '../../router/index'

export default {
	data () {
		return {
			accountPath: mdiAccount,
			lockPath: mdiLock
		}
	},
	components: {
		Footer,
		SvgIcon
	},
	methods: {
		moveToRegister () {
			console.log('Moving to register')
			router.push('/register')
		},
		moveToToDo () {
			console.log('Moving to ToDo Page')
			router.push('/todo')
		}
	}
}
</script>

<style>
.topPadding {
  position: absolute;
  top: 15%; /* IMPORTANT */
  display: block;
}
</style>
