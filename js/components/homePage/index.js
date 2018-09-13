import m from 'mithril'
import TrackList from '../trackList'

export default class HomePage {
    view () {
        return m('div', m(TrackList))
    }
}