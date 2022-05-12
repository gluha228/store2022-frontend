<template>
<div class = "main-content-items">
    <div class="items" id = 'items'>
        <div class="collection-item" v-for="(item, index) in items" :key="index">
            <img :src="require(`../assets/images/watches/${item.photoUrl}.jpg`)" alt="watch">
            <table>
                <caption>
                    <h3>{{item.title}}</h3>
                </caption>
                <tbody>
                    <tr><td>Manufacturer</td><td>{{ item.manufacturer }}</td></tr>
                    <tr><td>Production year</td><td>{{ item.productionYear }}</td></tr>
                    <tr><td>Type</td><td>{{ item.type }}</td></tr>
                    <tr><td>Caliber</td><td>'{{ item.caliber }}</td></tr>
                    <tr><td>Brand</td><td>'{{ item.brand }}</td></tr>
                    <tr><td>Escapement</td><td>{{ item.escapement }}</td></tr>
                    <tr><td>Winding</td><td>{{ item.winding }}</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
//computed watch
<script>
import ItemService from '../ItemService'

export default {
    name : 'ItemsList',
    data() {
        return {
            items : []
        }
    },
    methods: {
        getItems(){
            ItemService
            .getItems()
            .then((response) => {this.items = response.data})
        }
    },
    created() {
        this.getItems();
        console.log(this.items)
    }
}
</script>

<style scoped>
.items {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
}
.collection-item {
    background-color: #555;
    padding: 2%;
    margin: 10px;
    color: #ccc;
    font-size: 80%;
    height: 200px;
    width: 500px;
    display:grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 5px;
    border-left:rgb(184, 121, 4) solid 1px;
    border-right:rgb(184, 121, 4) solid 1px;
}
.collection-item img {
    height: 100%;
    width: 100%;
}
.collection-item table, tr, td {
    border: #ccc 2px solid;
    border-collapse: collapse;
}

.collection-item tr {
    height: 80%;
}
.collection-item h3 {
    font-size: 160%;
    text-decoration: underline rgb(184, 121, 4);
    cursor: pointer;
}
.collection-item h3:hover {
    text-decoration: underline rgb(204, 141, 44);
    color: rgb(204, 141, 44);
}

</style>