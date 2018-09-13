export default class TrackListService {
    getTracks() {
        return Promise.resolve([{
            sequenceNumber: 1,
            movements: [
                'test'
            ],
            work: 'test',
            catalogNumber: 'K626',
            composer: 'test',
            ensemble: 'Nashville Symphony Orchestra',
            conductor: 'test',
            soloists: [
                'test'
            ]
        }])
    }
}