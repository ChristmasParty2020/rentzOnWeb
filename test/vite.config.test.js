import { createVueTestPlugin } from 'aria-vue'

export default  {
  plugins: [
    createVueTestPlugin({
      script: './test/plugins.js',
      watch: true
    })
  ]
}
