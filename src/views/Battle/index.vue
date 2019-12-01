<template>
  <div class="pg-battle">
    <div class="pg-battle__board-container">
      <table class="pg-battle__board">
        <tr :key="i"
            v-for="i in 14"
            class="row">
          <td :key="j"
              v-for="j in 14"
              class="column" />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Battle'
  }
</script>

<style lang="scss" scoped>
  .pg-battle {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;
    &__board-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 640px;
      min-height: 640px;
      background: url('../../assets/images/wood.jpg');
    }
    &__board {
      .column {
        border: 2px solid black;
        padding: 18px;
      }
    }
  }
</style>