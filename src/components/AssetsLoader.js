export default {
  chars: [],
  loadCharactersList: function() {
    import("@/assets/characters/list.json").then(({ default: characters }) => {
      console.log("AL load char: ", characters);
      this.chars = Object.keys(characters);
    });
  }
};
