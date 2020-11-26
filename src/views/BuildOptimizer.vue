<template>
  <div class="p-d-inline-flex p-flex-column p-p-1 p-shadow-1">
    <character />
    <div class="p-mb-2 p-shadow-1">Item 2</div>
    <div class="p-mb-2 p-shadow-1">Item 3</div>
  </div>
</template>
<script>
import Character from "../components/Character.vue";

export default {
  data: function() {
    return {
      baseStat: null
    };
  },
  components: { Character }
};

var tes = {};
tes.name = "luqman";
tes.stat = [];
tes.stat[0] = 0;
tes.stat[1] = 1;
tes.stat[10] = 10;
tes.stat2 = tes.stat;
tes.stat[10] = 11;
console.log(tes.woi + 1);
console.log(JSON.stringify(tes));
</script>
