import {mount} from '@vue/test-utils'
import LandingPage from '../src/components/LandingPage.vue'

describe('LandingPage.vue', () => {
  it('renders', async () => {
    const wrapper = mount(LandingPage, { attachTo: '#root' })
    expect(wrapper.html()).to.contain('Play online')
    expect(wrapper.html()).to.contain('Accounting only')
  })
})
