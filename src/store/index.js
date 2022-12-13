import { createStore } from "vuex";

export default createStore({
    state: () => ({
        isMobile: false,
        burgerMenuVisible: false,
        scrollUpButtonVisible: false,
    }),
    mutations: {
        setMobile(state, newValue) {
            state.isMobile = newValue
        },
        setBurgerMenuVisible(state, newValue) {
            state.burgerMenuVisible = newValue
        },
        setScrollUpButtonVisible(state, newValue) {
            state.scrollUpButtonVisible = newValue
        }
    }
})