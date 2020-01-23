import Vue from 'vue'
import SvgIcon from '@/components/common/svgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => {
    console.log(requireContext);
    return requireContext.keys().map(requireContext);
}
requireAll(req)