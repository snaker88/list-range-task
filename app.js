const App = {
    data() {
        return {
            requiredRanges: [
                { requiredRange: [null, 200], text: 'Up to 200' },
                { requiredRange: [100, 350], text: 'From 10 to 350' },
                { requiredRange: [200, null], text: 'From 200' }
            ],

            selectRange: [null, null],

            courses: [
                { name: "Courses in England", prices: [0, 100] },
                { name: "Courses in Germany", prices: [500, null] },
                { name: "Courses in Italy", prices: [100, 200] },
                { name: "Courses in Russia", prices: [null, 400] },
                { name: "Courses in China", prices: [50, 250] },
                { name: "Courses in USA", prices: [200, null] },
                { name: "Courses in Kazakhstan", prices: [56, 324] },
                { name: "Courses in France", prices: [null, null] },
            ],

        }

    },
    computed: {
        filteredCourses() {
            console.log(this.selectRange)
            if (this.selectRange[1] === null) {
                this.selectRange[1] = Infinity
            }
            return this.courses
                .map(cours => {
                    if (cours.prices[1] === null) {
                        cours.prices[1] = Infinity
                    }
                    return cours
                })
                .filter(n => n.prices[0] < this.selectRange[1] && n.prices[1] > this.selectRange[0])

        }

    }
}

Vue.createApp(App).mount('#app')