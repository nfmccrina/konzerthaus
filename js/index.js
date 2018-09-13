import m from 'mithril'
import HomePage from './components/homePage'

m.route(document.body, '/', {
    '/': HomePage
})