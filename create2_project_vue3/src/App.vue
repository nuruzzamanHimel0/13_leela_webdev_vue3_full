<template>
  <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
               <hellwWOrld>
             
              </hellwWOrld>

              <SinglePost></SinglePost>
              <hr>
              <div class="row">
                <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                            <userProfile>
                            <template  #header>
                                <h1  >This is a Header Section</h1>
                            </template>

                            <template v-slot:content >
                              <p>Theis is then content section</p>
                            </template>

                            <template v-slot:footer>
                              <div>
                                <h4>This is afooter seciton</h4>
                              </div>
                            </template>
                          </userProfile>
                      </div>
                    </div>
                </div>

                 <div class="col-md-4">
                    <div class="card">
                      <div class="card-title">
                        short hand slot
                      </div>
                      <div class="card-body">
                            <userProfile>
                            <template  #header>
                                <h1  >This is a Header Section</h1>
                            </template>

                            <template #content >
                              <p>Theis is then content section</p>
                            </template>

                            <template #footer>
                              <div>
                                <h4>This is afooter seciton</h4>
                              </div>
                            </template>
                          </userProfile>
                      </div>
                    </div>
                </div>
                 <div class="col-md-4">
                    <div class="card">
                      <div class="card-title">
                       Default slot
                      </div>
                      <div class="card-body">
                            <userProfile>
                              <template #content ></template>
                              <template #footer></template>
                          </userProfile>
                      </div>
                    </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    
     

  </div>
</template>

<script>

import hellwWOrld from './components/HelloWorld.vue'
import SinglePost from './components/SinglePost.vue'
import userProfile from './components/UserProfile.vue'

export default {
  data(){
    return {
      
    }
  },
 
  methods:{
    
    
  },
  components:{
    hellwWOrld,
    SinglePost,
    userProfile
   
  }

}
</script>