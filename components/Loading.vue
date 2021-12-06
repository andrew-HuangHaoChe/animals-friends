<template>
    <div>
        <div class="loading"></div>
    </div>
</template>
<style lang="scss">
.loading {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    animation: loader-inner 2s infinite ease forwards;
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;
}

@keyframes loader-inner {
    0% {
        transform: scaleX(0);
        transform-origin: left;
    }

    25% {
        transform: scaleX(1);
    }

    49% {
        transform-origin: 0 0;
    }
    50% {
        transform: scaleX(0);
    }

    75% {
        transform: scaleX(0);
    }

    100% {
        transform: scaleX(0);
        transform-origin: right;
    }
}
</style>