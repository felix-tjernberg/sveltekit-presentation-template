<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { slideTimer } from "$lib/utilities/stores/slideTimer"
    import { onDestroy, onMount } from "svelte"

    const MIN_SLIDE_NUMBER = 1
    const MAX_SLIDE_NUMBER = 20

    $: slideNumber = Number($page.params.slideNumber)
    $: allowPreviousSlide = !(slideNumber <= MIN_SLIDE_NUMBER)
    $: allowNextSlide = !(slideNumber >= MAX_SLIDE_NUMBER)
    $: previousSlideUrl = `/slide/${slideNumber - 1}`
    $: nextSlideUrl = `/slide/${slideNumber + 1}`

    $: if ($slideTimer === 0 && allowNextSlide) {
        goto(nextSlideUrl)
        slideTimer.reset()
    }

    onMount(() => {
        slideTimer.start()
    })
    onDestroy(() => {
        slideTimer.stop()
        slideTimer.reset()
    })
</script>

<svelte:body
    on:keydown={(event) => {
        const { key } = event
        switch (key) {
            case "ArrowLeft":
                if (allowPreviousSlide) return goto(previousSlideUrl)
                break
            case "ArrowRight":
                if (allowNextSlide) return goto(nextSlideUrl)
                break
        }
    }} />

<div class="height-100p grid-stack">
    <slot />
    <span id="slide-timer">{$slideTimer}</span>
    <span id="slide-number">{slideNumber}</span>
    <div id="hover-container">
        <div>
            <button on:click={slideTimer.reset}>reset</button>
            <button on:click={slideTimer.start}>start</button>
            <button on:click={slideTimer.stop}>stop</button>
        </div>
        <div>
            {#if allowPreviousSlide}
                <a href={previousSlideUrl}>Previous</a>
            {/if}
            {#if allowNextSlide}
                <a href={nextSlideUrl}>Next</a>
            {/if}
        </div>
    </div>
</div>

<style>
    #hover-container {
        place-self: start center;
        gap: 1em;
    }
    #hover-container > div {
        display: flex;
        gap: 1em;
        place-content: center;
        scale: 0;
        transition: scale 0.2s ease-in-out;
    }
    #hover-container:hover > div {
        scale: 1;
    }

    #slide-timer {
        place-self: start start;
        animation: rotate 20s linear infinite reverse;
    }
    #slide-number {
        place-self: start end;
        animation: rotate 20s linear infinite;
    }
    #slide-timer,
    #slide-number {
        opacity: 0.3;
        margin: 1em;
    }
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
