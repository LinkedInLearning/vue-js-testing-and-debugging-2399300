<template>
  
      <div class="container">
        
        <div class="row">
            <div class="col-md-8" id="banner-section">

            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="col-md-12">
                    <img src="/logo.gif" height="120" class="float-right" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="card mt-4">
                    <div class="card-header bg-primary text-white">
                      Login to your account
                    </div>

                    <div class="card-body">
                      <div v-if="showError" class="alert alert-danger" role="alert">
                        Please enter your email and password
                      </div>
                      <form>
                        <div>
                          <div class="form-group">
                            <input v-model="email" type="email" placeholder="Enter Email" class="form-control">
                          </div>
                          <div class="form-group">
                            <input v-model="password" type="password" placeholder="Enter Password" class="form-control">
                          </div>
                          <button type="button" class="btn btn-primary" @click="login()">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              
              
              
            </div>
        </div>

    
    </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      email : null,
      password : null,
      showError : false
    }
  },
  components: {
    
  },
  methods : {
    login(){
      if(this.email && this.password){
        this.$ruter.push({path : "profile"})
      }else{
        this.showError = true;
      }
      
    }
  }
}
</script>

<style scoped>
.container{
  padding: 0;
  margin: 0;
}


#banner-section{
  background-image: url("/home_page_back.jpg");
  padding: 0;
  margin: 0;
  height: 100vh;
}
</style>
