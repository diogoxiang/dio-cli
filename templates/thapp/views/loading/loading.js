/**
 * Created 2017-4-1 11:01:46
 */
require(["vue", "common", "apiData", "dialog"], function(Vue, app, api, dialog) {
    let WIN = window,
        DOC = document;
    const HEIGTH = WIN.innerHeight;

    let vm = new Vue({
        el: "#app",
        data: {

        },
        mounted: function() {
            // do something
            console.log(api)
        },

        filters: {
            // 增加一个过滤方法
            // contrast: function(v, n) {
            //     console.log(v)
            // }

        },
        methods: {


        },
        computed: {}

    });




});