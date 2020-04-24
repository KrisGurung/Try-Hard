const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3Jpc2d1cnVuZyIsImEiOiJjazhnMGUwNXAwN3RrM21scWdpajJpM3RzIn0.80JeDzcGLNMqrF85BDSxFw'

    request({url, json: true}, (error, {body}) => {
        if(error) 
            callback('No network connection', undefined)
        else if(body.features.length == 0)
            callback("The place doesn't exist", undefined)
        else    
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
    })
}

module.exports = geocode