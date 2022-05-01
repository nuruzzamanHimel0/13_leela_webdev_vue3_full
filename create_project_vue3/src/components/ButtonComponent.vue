<template>
  <div >
      <div class="my-2">
        <button class="btn btn-warning" >
          <slot name="user2"></slot>
          <slot name="data"></slot>
          <slot name="hellow"></slot>
          <slot name="user"></slot>
        </button>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return {}
    }
}
</script>

