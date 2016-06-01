var sg = require('../lib/sendgrid.js').SendGrid(process.env.SENDGRID_API_KEY)

##################################################
# Retrieve all IP addresses #
# GET /ips #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.queryParams["subuser"] = 'test_string'
  request.queryParams["ip"] = 'test_string'
  request.queryParams["limit"] = '1'
  request.queryParams["exclude_whitelabels"] = 'true'
  request.queryParams["offset"] = '1'
request.method = 'GET'
request.path = '/v3/ips'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all assigned IPs #
# GET /ips/assigned #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/assigned'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Create an IP pool. #
# POST /ips/pools #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "name": "marketing"
};
request.method = 'POST'
request.path = '/v3/ips/pools'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all IP pools. #
# GET /ips/pools #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/pools'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update an IP pools name. #
# PUT /ips/pools/{pool_name} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "name": "new_pool_name"
};
request.method = 'PUT'
request.path = '/v3/ips/pools/{pool_name}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all IPs in a specified pool. #
# GET /ips/pools/{pool_name} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/pools/{pool_name}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Delete an IP pool. #
# DELETE /ips/pools/{pool_name} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'DELETE'
request.path = '/v3/ips/pools/{pool_name}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Add an IP address to a pool #
# POST /ips/pools/{pool_name}/ips #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "ip": "0.0.0.0"
};
request.method = 'POST'
request.path = '/v3/ips/pools/{pool_name}/ips'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Remove an IP address from a pool. #
# DELETE /ips/pools/{pool_name}/ips/{ip} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'DELETE'
request.path = '/v3/ips/pools/{pool_name}/ips/{ip}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Add an IP to warmup #
# POST /ips/warmup #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "ip": "0.0.0.0"
};
request.method = 'POST'
request.path = '/v3/ips/warmup'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all IPs currently in warmup #
# GET /ips/warmup #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/warmup'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve warmup status for a specific IP address #
# GET /ips/warmup/{ip_address} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/warmup/{ip_address}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Remove an IP from warmup #
# DELETE /ips/warmup/{ip_address} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'DELETE'
request.path = '/v3/ips/warmup/{ip_address}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all IP pools an IP address belongs to #
# GET /ips/{ip_address} #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/ips/{ip_address}'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

