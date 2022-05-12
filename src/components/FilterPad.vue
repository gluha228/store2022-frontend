<template>
    <div class="filter-pad">
        <table>
            <tr><td class="filter-title">Filters</td>
            <td class="filter" @click="sort('Year')">Year {{yearSorting}}</td></tr>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            yearSorting : ''
        }
    },
    methods: {
        sort(carac) {
            console.log(carac);
            switch (this.yearSorting) {
                case '':
                    this.yearSorting = '↓';
                break;
                case '↓':
                    this.yearSorting = '↑';
                break;
                case '↑':
                    this.yearSorting = '';
                break;
            }
            console.log(this.yearSorting);
        }
    }
}

</script>

<style scoped>
.filter-pad {
    border:rgb(184, 121, 4) solid 1px;
    width: 200px;
    background-color: #555;
}
.filter-pad .filter-title {
    border: none;
    color:rgb(184, 121, 4);
    font-weight: bold;
}
.filter-pad .filter {
    border:rgb(184, 121, 4) solid 1px;
    width: 100%;
    height: 80%;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}
.filter-pad .filter:hover {
    color: black;
    background-color: #888;
}

</style>