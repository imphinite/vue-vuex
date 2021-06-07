<template>
    <div class="flex w-full justify-center">
        <div class="flex flex-col mt-16">
            <div class="font-display uppercase font-bold text-5xl text-gray-800 text-center">
                Vuex
            </div>

            <span class="m-4 text-center">count: {{ count }}</span>
            <div class="flex">
                <button
                    class="
                        uppercase
                        font-bold
                        focus:outline-none
                        bg-green-500
                        text-white
                        rounded
                        px-4
                        py-1
                        pt-1.5
                        mx-2
                        hover:bg-green-50 hover:text-green-500
                        transition
                        text-center
                    "
                    @click="increment"
                >
                    increment
                </button>
                <button
                    class="
                        uppercase
                        font-bold
                        focus:outline-none
                        bg-red-500
                        text-white
                        rounded
                        px-4
                        py-1
                        pt-1.5
                        mx-2
                        hover:bg-red-50 hover:text-red-500
                        transition
                        text-center
                    "
                    @click="decrement"
                >
                    decrement
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    methods: {
        increment() {
            this.$store.commit('INCREMENT')
        },
        decrement() {
            this.$store.commit('DECREMENT')
        },
    },
}
</script>
