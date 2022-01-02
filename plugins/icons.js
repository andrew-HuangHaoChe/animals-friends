import Vue from 'vue'
import Icon from '@/components/Icon.vue'

Vue.component('Icon', Icon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons/svg', true, /\.svg$/)
requireAll(req)