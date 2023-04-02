# Let's Play with CO2signal API

## Introduction

The [CO2signal API](https://www.co2signal.com/) gives you the instantaneous _Carbon Intensity_ in kgCO2eq/kWh of the grid from a specific country/zone. It is a free small subset of the API behind the [Electricity Maps App](https://app.electricitymaps.com/map), which is only for non-commercial use! The complete [Electricity Maps API](https://static.electricitymaps.com/api/docs/index.html) is not for free as you can see on their [Product Catalog](https://api-portal.electricitymaps.com/).

> ***Warning.*** The API has a rate limit of 30 requests per hour and maximum 1 request per second.

## Authentication

The CO2signal API uses a simple _API key_ to allow access. You can get your **personal (and secret)** _API key_ by giving your email address on the [CO2signal API home page](https://www.co2signal.com/). You will simply receive your personal _API key_ after a few seconds within an email. Then, you just need to pass your _API key_ along with all your requests using the `auth-token` HTTP header.

## API Endpoint

You can get the instantaneous - hourly updated - _Carbon Intensity_ in kgCO2eq/kWh of the grid from a specific country/zone by giving its two-letter ISO country code as input. In some countries, the _Carbon Intensity_ can be determined at a more granular level called _zone_; you can find all the code from all the available zones at <https://api.electricitymap.org/v3/zones>.

```text
set API_KEY=...copy-paste your API key here...
set ZONE=BE
curl "https://api.co2signal.com/v1/latest?countryCode=%ZONE%" -H "auth-token: %API_KEY%"
```

```json
{"_disclaimer":"This data is the exclusive property of Electricity Maps and/or related parties. If you're in doubt about your rights to use this data, please contact api@co2signal.com","status":"ok","countryCode":"BE","data":{"datetime":"2023-04-01T14:00:00.000Z","carbonIntensity":59,"fossilFuelPercentage":7.519999999999999},"units":{"carbonIntensity":"gCO2eq/kWh"}}
```

(...)

```text
node index
```

```json
{
  "_disclaimer": "This data is the exclusive property of Electricity Maps and/or related parties. If you're in doubt about your rights to use this data, please contact api@co2signal.com",
  "status": "ok",
  "countryCode": "BE",
  "data": {
    "datetime": "2023-04-02T10:00:00.000Z",
    "carbonIntensity": 54,
    "fossilFuelPercentage": 5.43
  },
  "units": {
    "carbonIntensity": "gCO2eq/kWh"
  }
}
```
