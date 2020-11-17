<template>
  <div class="p-d-inline-flex p-flex-column p-p-1 p-shadow-1">
    <pv-panel class="p-shadow-1" :toggleable="true">
      <template #header>
        <div>
          Header Content
        </div>
      </template>
      <div class="p-grid p-nogutter">
        <div class="p-p-0 p-mb-1 p-col-12 p-shadow-1">Item 1</div>
        <div class="p-mb-1 p-mr-1 p-col-fixed p-shadow-1" style="width:100px">
          Item 2
        </div>
        <div class="p-mb-1 p-col p-shadow-1">Item 3</div>
        <div class="p-col-12 p-shadow-1 p-grid p-nogutter p-p-1">
          <div class="p-col-12 p-text-left">Item</div>
          <div class="p-col-12 p-grid p-nogutter">
            <div class="p-inputgroup p-col-12">
              <span class="p-inputgroup-addon" style="width:100px">
                Stat
              </span>
              <div
                class="p-inputgroup-addon p-inputtext p-component"
                style="background:#FFF"
              >
                woi
              </div>
            </div>
            <div class="p-inputgroup p-col-12">
              <span class="p-inputgroup-addon" style="width:100px">
                Stat
              </span>
              <div
                class="p-inputgroup-addon p-inputtext p-component"
                style="background:#FFF"
              >
                woi
              </div>
            </div>
          </div>
        </div>
      </div>
    </pv-panel>
    <div class="p-mb-2 p-shadow-1">Item 2</div>
    <div class="p-mb-2 p-shadow-1">Item 3</div>
  </div>
</template>
<script>
export default {
  data() {
    return { value3: ["woi", "wui"] };
  }
};
</script>
