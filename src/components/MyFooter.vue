<template>
    <footer>
        <div><strong>my email: </strong><a href="mailto:alexander.glushcov@gmail.com">alexander.glushcov@gmail.com</a></div>
        <div>This site is made only for education, there are no items for sale </div>
        <div>© gluha228 2021</div>
    </footer>
</template>

<style scoped>
footer {
    position: fixed;
    bottom:0px;
    left:0px;
    height: 20px;
    width: 110%;
    vertical-align: center ;
    background-color: #444;
    color: #aaa;
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "a b c";
    grid-column-gap: 50px;
    border-top: rgb(184, 121, 4) 2px  solid;
}
footer div{
    text-align: center;
    vertical-align: center;
    margin: 5px;
    font-size: 10px;
}

</style>