<script lang="ts">
    import Image from "./svelte.jpg"
</script>

<div class="grid-stack">
    <img src={Image} alt="Svelte religion" width="250px" />
    <img src={Image} alt="Svelte religion" width="250px" />
    <img src={Image} alt="Svelte religion" width="250px" />
    <img src={Image} alt="Svelte religion" width="300px" />
    <img src={Image} alt="Svelte religion" width="400px" />
</div>

<style>
    img {
        margin: 30px;
    }
    img:nth-child(1) {
        place-self: start start;
    }
    img:nth-child(2) {
        place-self: center center;
    }
    img:nth-child(3) {
        place-self: start end;
    }
    img:nth-child(4) {
        place-self: end start;
    }
    img:nth-child(5) {
        place-self: end end;
    }
</style>
