<template>
   <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-12">
                  <div class="row align-items-center">
                     <div class="col-lg-6">
                        <h2 class="mb-2">Sign Up</h2>
                        <p>Enter your personal details and start journey with us.</p>
                        <form @submit.prevent="onSubmit()">
                           <div class="row">
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Full Name</label>
                                    <input class="form-control" type="text" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Last Name</label>
                                    <input class="form-control" type="text" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Email</label>
                                    <input class="form-control" type="email" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Phone No.</label>
                                    <input class="form-control" type="text" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Password</label>
                                    <input class="form-control" type="password" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="form-group">
                                    <label class="mb-0">Confirm Password</label>
                                    <input class="form-control" type="password" placeholder=" ">
                                    
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                           <p class="mt-3">
                              Already have an Account <router-link :to="{name: 'auth.login'}" class="text-primary">Sign In</router-link>
                           </p>
                        </form>
                     </div>
                     <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                        <img src="@/assets/images/01.png" class="img-fluid w-60" style="width:80%;" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
export default {
    name:'SignUp',
    layout: "auth",

     methods: {
      onSubmit () {
         this.$router.push({name: 'auth.login'})
      }
  }
}
</script>

<style scoped>

</style>