<script lang="ts">
    import Image from "./svelte.jpg"
</script>

<div>
    <img src={Image} alt="Svelte religion" width="250px" />
    <img src={Image} alt="Svelte religion" width="300px" />
    <img src={Image} alt="Svelte religion" width="400px" />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    img {
        margin: 10%;
    }
    img:nth-child(1) {
        place-self: center center;
    }
    img:nth-child(2) {
        place-self: end center;
    }
    img:nth-child(3) {
        place-self: start center;
    }
</style>
