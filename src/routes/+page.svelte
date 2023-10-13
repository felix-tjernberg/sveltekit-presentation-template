<script lang="ts">
    let paused = true
    let volume = 0.1
</script>

<audio bind:paused bind:volume src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast.mp3" />
<main class="height-100p">
    <div>
        <h1>Erudize 2023-10-17(eller 18)</h1>
        <a href="/slide/1">start slides</a>
        <button on:click={() => (paused = !paused)}>toggle elevator music</button>
        <input type="range" bind:value={volume} max="0.5" step="0.001" />
    </div>
</main>

<style>
    main {
        display: grid;
        place-items: center;
        text-align: center;
    }
</style>
