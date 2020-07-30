const request = require('request')

const forecast = ((latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=784df8347b5aafe9d80d74e3a9a9818a&query=' + longitude +',' + latitude + '&units=f'

request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
    

})

module.exports = forecast