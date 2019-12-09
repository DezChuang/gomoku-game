<template>
  <div class="pg-battle">
    <div class="pg-battle__game-region">
      <table class="pg-battle__raw-board">
        <tr class="row"
            :key="i"
            v-for="i in 14">
          <td class="column"
              :key="j"
              v-for="j in 14" />
        </tr>
      </table>
      <div class="pg-battle__play-board">
        <div class="row"
             :key="i"
             v-for="(row, i) in playData">
          <div class="column"
               :key="j"
               v-for="(column, j) in row">
            <div :style="getTransform(i, j)"
                 class="go"
                 :class="[{'black': column === 1}, {'white': column === 2}]"
                 @click="handleGo(i, j)" />
          </div>
        </div>
      </div>
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
      ],
      turn: 1
    }
  },
  methods: {
    getTransform(x, y) {
      return {
        transform: `translate(${-285 + 38 * x}px, ${-305 + 38 * y}px)`
      }
    },
    handleGo(x, y) {
      if (this.playData[x][y] !== 0) return
      const newRow = this.playData[x].slice(0)
      newRow[y] = this.turn
      this.$set(this.playData, x, newRow)
      this.turn = this.turn === 1 ? 2 : 1
      console.log(x)
      console.log(y)
      console.log('==')
      this.checkWinner()
    },
    checkWinner() {
      const data = this.playData
      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          if (i > 10 || j > 10) continue
          const winCase1 =
            (data[i][j] === data[i][j + 1] &&
              data[i][j] === data[i][j + 2] &&
              data[i][j] === data[i][j + 3] &&
              data[i][j] === data[i][j + 4]) ||
            (data[i][j] === data[i + 1][j] &&
              data[i][j] === data[i + 2][j] &&
              data[i][j] === data[i + 3][j] &&
              data[i][j] === data[i + 4][j]) ||
            (data[i][j] === data[i + 1][j + 1] &&
              data[i][j] === data[i + 2][j + 2] &&
              data[i][j] === data[i + 3][j + 3] &&
              data[i][j] === data[i + 4][j + 4])
          let winCase2 = false
          if (i > 3 && j < 11) {
            winCase2 =
              data[i][j] === data[i - 1][j + 1] &&
              data[i][j] === data[i - 2][j + 2] &&
              data[i][j] === data[i - 3][j + 3] &&
              data[i][j] === data[i - 4][j + 4]
          }
          if (!(winCase1 || winCase2)) continue
          if (data[i][j] === 1) {
            console.warn('black win!')
          } else if (data[i][j] === 2) {
            console.warn('white win!')
          }
        }
      }
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
        border: 2px solid transparent;
        margin-left: -2px;
        margin-bottom: -2px;
        position: absolute;
      }
      .black {
        background: -webkit-radial-gradient(30% 25%, circle closest-corner, #777, #222);
        box-shadow: inset 0 -2px 15px rgba(255, 255, 255, 0.3), inset -2px -1px 40px rgba(10, 10, 10, 0.4),
          0 0 2px rgba(0, 0, 0, 0.5);
        transform: scale(0.9);
      }
      .white {
        background: -webkit-radial-gradient(30% 25%, circle closest-corner, #eee, #bbb);
        box-shadow: inset 0 -2px 15px rgba(255, 255, 255, 0.3), inset -2px -1px 40px rgba(10, 10, 100, 0.4),
          0 0 2px rgba(0, 0, 0, 0.5);
        transform: scale(0.9);
      }
      .go {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 1000px;
        position: absolute;
        left: 0;
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