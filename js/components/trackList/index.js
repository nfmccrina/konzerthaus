import m from 'mithril'
import trackListService from '../../services/trackListService'
import TrackListService from '../../services/trackListService';

var model = {
    tracks: []
}

var svc = new TrackListService()

export default class TrackList {
    oninit() {
        svc.getTracks()
            .then(data => {
                model.tracks = data
            })
            .then(() => m.redraw())
    }
    view() {
        return m('table', [
            m('tr', [
                m('th', 'SequenceNumber'),
                m('th', 'Movement'),
                m('th', 'Work'),
                m('th', 'Catalog #'),
                m('th', 'Composer'),
                m('th', 'Ensemble'),
                m('th', 'Conductor'),
                m('th', 'Soloists')
            ])
        ].concat(model.tracks.map((track) => m('tr', [
            m('td', track.sequenceNumber || ''),
            m('td', (track.movements && track.movements.join(' - ')) || ''),
            m('td', track.work || ''),
            m('td', track.catalogNumber || ''),
            m('td', track.composer || ''),
            m('td', track.ensemble || ''),
            m('td', track.conductor || ''),
            m('td', (track.soloists && track.soloists.join(', ')) || '')
        ]))))
    }
}