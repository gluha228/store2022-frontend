<template>
<div>
<div class="header-logo">
    <img src="../assets/images/menu-icon.png" alt="sidebar" class="menu-button" @click="showHideMenu()">
    WatchWiki
</div>
</div>
<div v-if="sidebarPresent" class="sidebar">
    <div class="article">Main page>
        <a href="#"><div class="subarticle">Introduction</div></a>
        <a href="#"><div class="subarticle">Clock structure</div></a>
        <a href="#"><div class="subarticle">Classification</div></a>
    </div>
    <div class="article">History>
        <a href="#"><div class="subarticle">First watch</div></a>
        <a href="#"><div class="subarticle">Inventions</div></a>
        <a href="#"><div class="subarticle">Prevalence</div></a>
    </div>
    <div class="article">Directory></div>
    <div class="article">Collection></div>
</div>
</template>

<script>

export default {
    data() {
        return {
            yearSorting : '',
            sidebarPresent : false
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
        },
        showHideMenu() {
            this.sidebarPresent = !this.sidebarPresent;
            console.log(this.sidebarPresent);
        }
    }
}

</script>

<style>
.header-logo {
    font-size: 50px;
    font-weight: 1000;
    color: #111;
    background: url("../assets/images/header-background.jpg") fixed;
    width: 100%;
    height: 50px;
    margin: 0;
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-column-gap: 10px;
    
}
.menu-button {
    height: 50px;
    width: 50px;
    display: grid;
    padding: 0px;
    border: 0px;
    cursor: pointer;
}
.menu-button:hover {
    background-color: rgba(120,120,120, 0.5);
}

.article {
    background-color: #444;
    color: #999;
    font-size: 20px;
    cursor: pointer;
    border-top: rgb(184, 121, 4) 1px solid;
}
.article:hover {
    font-size: 22px
} 
.subarticle {
    background-color: #555;
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
    color: #aaa;
    width: 100%;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    border: 0;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
}
.subarticle:hover {
    font-size: 17px;
}
</style>