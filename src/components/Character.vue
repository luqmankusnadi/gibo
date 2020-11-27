<template>
  <pv-panel class="p-shadow-1" :toggleable="true">
    <template #header>
      <div>
        Header Content
        <pv-button>
          <span class="p-mr-3">Amber</span>
          <pv-button class="p-button-rounded p-p-0 p-m-0">
            <i class="pi pi-times" style="fontSize: 1rem"></i>
          </pv-button>
        </pv-button>
      </div>
    </template>
    <div class="p-grid p-nogutter p-fluid">
      <div class="p-p-0 p-mb-1 p-col-12 p-shadow-1">
        <pv-dropdown
          v-model="characterSelected"
          @change="loadCharacter($event)"
          :options="characterNameList"
          :showClear="true"
          placeholder="Select a Character"
        />
      </div>
      <div
        v-if="characterSelectedData"
        class="p-col-12 p-shadow-1 p-grid p-nogutter p-p-1"
      >
        <template
          v-for="(stat, index) in characterSelectedData.Stats[0]"
          :key="index"
        >
          <stat-label
            v-if="stat != 0"
            :label="statName[index]"
            :value="stat"
            :color="statColor[index]"
            class="p-m-1"
          />
        </template>
      </div>
    </div>
  </pv-panel>
</template>

<script>
//import AssetsLoader from "@/components/AssetsLoader.js";
import StatLabel from "@/components/StatLabel.vue";
import { StatName, StatColor } from "@/commons/constants.js";

export default {
  name: "Character",
  components: {
    StatLabel
  },
  props: {
    msg: String
  },
  data() {
    return {
      characterList: [],
      characterNameList: [],
      characterSelected: null,
      characterSelectedData: null,
      statName: StatName,
      statColor: StatColor
    };
  },
  mounted() {
    import("@/assets/characters/list.json").then(({ default: characters }) => {
      console.log("AL load char: ", characters);
      this.characterList = characters;
      this.characterNameList = Object.keys(characters);
    });
  },
  methods: {
    loadCharacter(event) {
      if (event.value) {
        import(
          "@/assets/characters/data/" +
            this.characterList[event.value] +
            ".json"
        ).then(({ default: character }) => {
          this.characterSelectedData = character;
          console.log(this.characterSelectedData);
        });
      } else {
        this.characterSelectedData = null;
      }
    }
  }
};
</script>
