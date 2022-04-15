<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Child COmpenent Modal</h1>
          <a href="" @click.prevent="openModal()" class="btn btn-success">Open Modal</a>
          <teleport to='body'>
               <div v-if="isOpenModal">
                <MyModalComponent @closemodal="isOpenModal = $event" > </MyModalComponent>
              </div>
          </teleport>
         
         
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
            <button class="btn my-4" v-for="(value, key) in menus" :key="key"
            :class="[value == 'Home' ? 'btn-primary' :'', value == 'Contact' ? 'btn-success': '', value == 'About' ? 'btn-warning': '', value == 'Posts' ? 'btn-danger': '' ]"
            @click.prevent="changeMenu(value)"
             >
              {{ value }}
            </button>
        </div>
        <div class="col-md-12">
          <keep-alive>
            <component :is="hasComponent"></component>
          </keep-alive>
        </div>

      </div>
    </div>

    <!-- @@@@@ Design IN HTML CSS @@@@ -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Custom Modal in css</h1>
          <a href="#open-modal">MOdal Open Css</a>

          <div class="window-modal" id="open-modal">
            <div class="modal-inner">
              <a href="#" title="close" class="modal-close" >Close</a>
              <h1>Normal Modal Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id ratione possimus aperiam tempora, totam suscipit voluptatibus quasi inventore hic earum quae optio, saepe asperiores! Magni quidem mollitia ratione eveniet?</p>
            </div>
          </div>

        </div>
      </div>
    </div>
   
  </div>
</template>

<script>

  import HomeComponent from './components/HomeComponent.vue'
  import AboutComponent from './components/AboutComponent.vue'
  import PostsComponent from './components/PostsComponent.vue'
  import ContactComponent from './components/ContactComponent.vue'

  import MyModalComponent from '@/components/MyModal.vue'

  export default {
    data(){
      return {
          menus:['Home', 'Contact', 'About', 'Posts'],
          selectComponent: 'HomeComponent',
          isOpenModal:false,
      }
    },
    computed:{
      hasComponent(){
        return this.selectComponent;
      }
    },

    methods:{
        changeMenu(value){
          this.selectComponent = value+"Component";
          console.log(value);
        },
        openModal(){
          this.isOpenModal = true;
        },
        onCloseModal(){
          alert('close');
        }
      
    },
    components:{
      HomeComponent,AboutComponent,PostsComponent,ContactComponent,
      MyModalComponent
    }

  }
</script>

<style scoped>
  .window-modal{
    position: fixed;
    inset: 0px;
    width: 100%;
    height: 100%;
    --darkreader-inline-bgcolor: rgba(32, 35, 36, 0.58);
    --darkreader-inline-bgimage: none;
    background: rgba(44, 42, 42, 0.58) none repeat scroll 0% 0%;
      background-color: rgba(44, 42, 42, 0.58);
      background-image: none;
    transition: all 2s;
    visibility: hidden;
    opacity: 0;
  }
  .window-modal:target{
    visibility: visible;
    opacity:1;
  }

  .modal-inner{
    position: absolute;
    background: #fff;
    background-color: rgb(255, 255, 255);
    background-image: none;
    width: 515px;
    border-radius: 9px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 15px;
    --darkreader-inline-bgcolor: #181a1b;
    --darkreader-inline-bgimage: none;
  }
  .modal-close{
    position: absolute;
    right: 13px;
    font-size: 19px;
    border: 1px solid rgb(51, 162, 255);
    padding: 3px;
    border-radius: 5px;
  
  }
  .modal-close:hover{
    background: red;
    color: #fff;
    text-decoration: navajowhite;
  }
  .modal-close:target{
     visibility: hidden;
    opacity: 0;
    transition:all .3s;
        transition-delay: 4s;
  }
</style>