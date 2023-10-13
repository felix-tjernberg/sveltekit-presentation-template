import { writable } from "svelte/store"

const SLIDE_TIME = 20

function createSlideTimer() {
    const { subscribe, set, update } = writable(SLIDE_TIME)

    let timerId: ReturnType<typeof setInterval> | null

    function stopInterval() {
        // @ts-ignore
        clearInterval(timerId)
        timerId = null
    }

    function start() {
        if (timerId) return
        timerId = setInterval(() => {
            update((previousValue) => {
                if (previousValue === 0) {
                    stopInterval()
                    return previousValue
                }
                return previousValue - 1
            })
        }, 100) // TODO remeber to change to second instead of 100ms
    }

    function reset() {
        set(SLIDE_TIME)
    }

    function stop() {
        stopInterval()
    }

    return {
        // Our methods
        reset,
        start,
        stop,

        // Svelte methods
        set,
        subscribe,
        update,
    }
}

export const slideTimer = createSlideTimer()
