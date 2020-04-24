const request = require('request')

const forecast = (a, b, callback) => {
    const url = 'https://api.darksky.net/forecast/eb4b402607daeac9c8c70786b9a32d63/' + a +',' + b 

    request({url, json: true}, (error, {body})=> {
        if(error)
            callback('No internet connection', undefined)
        else if(body.error)
            callback('Wrong coordinates', undefined)
        else    
            callback(undefined, {
                summary: body.hourly.summary
            })
    })
}

module.exports = forecast