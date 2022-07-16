<template>
  <div class="blue merida">
    <div ref="board" class="cg-board-wrap"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { Chessground as ChessgroundApi } from 'chessground';
import type { Api } from 'chessground/api';
import type { Config } from 'chessground/config';
import type { DrawShape } from 'chessground/draw';

interface Props {
  size?: string;
  config?: Partial<Config>;
  arrows?: DrawShape[];
}

const props = withDefaults(defineProps<Props>(), {
  size: '512px',
  config: {} as never,
});

const board = ref<HTMLElement | null>(null);
const cg = ref<Api | null>(null);

onUpdated(() => {
  cg.value = ChessgroundApi(board.value!, props.config);

  if (props.arrows) {
    cg.value.setShapes(props.arrows);
  }
});

onMounted(() => {
  cg.value = ChessgroundApi(board.value!, props.config);

  if (props.arrows) {
    cg.value.setShapes(props.arrows);
  }
});
</script>

<style>
@import '../../assets/themes.css';

.blue.merida {
  height: v-bind(size);
  width: v-bind(size);
}
</style>
