<template>
  <div class="p-grid p-nogutter">
    <span class="p-col p-px-3 label" :style="{ '--stat-color': color }">{{
      label
    }}</span>
    <span class="p-col p-px-3 value" :style="{ '--stat-color': color }">{{
      value
    }}</span>
  </div>
</template>

<script>
export default {
  name: "StatLabel",
  props: {
    label: String,
    value: Number,
    color: String
  }
};
</script>

<style scoped>
.label {
  background-color: var(--stat-color);
  color: var(--primary-color-text);
  display: inline-block;
  white-space: nowrap;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.value {
  border: 1px solid var(--stat-color);
  border-left-width: 0px;
  outline-color: var(--stat-color);
  color: var(--stat-color);
  display: inline-block;
  white-space: nowrap;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
