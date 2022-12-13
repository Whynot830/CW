import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import components from './components'
import store from './store'

import "@fontsource/nunito/400.css"
import "@fontsource/nunito/500.css"
import "@fontsource/nunito/600.css"
import "@fontsource/nunito/700.css"

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#wrap')
