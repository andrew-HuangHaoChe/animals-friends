<template>
    <icon
        :class="svgClass"
        aria-hidden="true"
    >
        <use :xlink:href="iconName" />
    </icon>
</template>
<script>
export default {
    name: 'icon',
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        }
    },
    data () {
        return {
        }
    },
    computed: {
        iconName () {
            return `#icon-${this.iconClass}`
        },
        svgClass () {
            return this.className ? 'svg-icon' + this.className: 'svg-icon'
        }
    }
}
</script>
<style>
    .svg-icon {
        width: 1em;
        height: 1em;
        font-size: 1.2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
