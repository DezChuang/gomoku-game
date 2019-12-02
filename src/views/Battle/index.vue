<template>
  <div class="pg-battle">
    <div class="pg-battle__game-region">
      <div class="pg-battle__play-board">
        <div class="row"
             :key="i"
             v-for="(row, i) in playData">
          <div class="column"
               :key="j"
               v-for="(column, j) in row" />
        </div>
      </div>
      <table class="pg-battle__raw-board">
        <tr class="row"
            :key="i"
            v-for="i in 14">
          <td class="column"
              :key="j"
              v-for="j in 14" />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Battle',
    data() {
      return {
        playData: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pg-battle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &__game-region {
      background: url('../../assets/images/wood.jpg');
      display: flex;
      justify-content: center;
      align-items: center;
      width: 640px;
      height: 640px;
      position: relative;
    }
    &__play-board {
      position: absolute;
      color: transparent;
      display: flex;
      .column {
        padding: 18px;
        border: 2px solid grey;
        margin-left: -2px;
        margin-bottom: -2px;
      }
    }
    &__raw-board {
      position: absolute;
      .column {
        padding: 18px;
        border: 2px solid #050505;
      }
    }
  }
</style>