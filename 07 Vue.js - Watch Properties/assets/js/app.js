var vue = new Vue({
    el: '#app',
    data: {
        show: true,
        message: 'Hello World!',
        message2: 'Hello Vue!',
        int1: 1,
        int2: 2,
        result: null,
        kilometers: 0,
        meters: 0
    },
    computed: {
        sum: function () {
            return this.int1 + this.int2;
        }
    },
    methods: {
        sumProcess: function (int3) {
            return this.result = this.int1 + this.int2 + int3;
        }
    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000
        },
        meters: function (val) {
            this.meters = val;
            this.kilometers = val / 1000;
        }
    }
})