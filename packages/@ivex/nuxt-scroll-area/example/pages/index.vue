<template>
  <div>
    <div class="container">
      <ScrollArea>
        <div class="long-content">
          Works!
          <div
            v-for="n in 100"
            :key="n"
          >
            {{ n }}
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
