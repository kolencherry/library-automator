var sg = require('../lib/sendgrid.js').SendGrid(process.env.SENDGRID_API_KEY)

##################################################
# Retrieve all mail settings #
# GET /mail_settings #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.queryParams["limit"] = '1'
  request.queryParams["offset"] = '1'
request.method = 'GET'
request.path = '/v3/mail_settings'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update address whitelist mail settings #
# PATCH /mail_settings/address_whitelist #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": true, 
  "list": [
    "email1@example.com", 
    "example.com"
  ]
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/address_whitelist'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve address whitelist mail settings #
# GET /mail_settings/address_whitelist #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/address_whitelist'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update BCC mail settings #
# PATCH /mail_settings/bcc #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "email": "email@example.com", 
  "enabled": false
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/bcc'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve all BCC mail settings #
# GET /mail_settings/bcc #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/bcc'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update bounce purge mail settings #
# PATCH /mail_settings/bounce_purge #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": true, 
  "hard_bounces": 5, 
  "soft_bounces": 5
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/bounce_purge'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve bounce purge mail settings #
# GET /mail_settings/bounce_purge #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/bounce_purge'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update footer mail settings #
# PATCH /mail_settings/footer #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": true, 
  "html_content": "...", 
  "plain_content": "..."
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/footer'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve footer mail settings #
# GET /mail_settings/footer #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/footer'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update forward bounce mail settings #
# PATCH /mail_settings/forward_bounce #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "email": "example@example.com", 
  "enabled": true
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/forward_bounce'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve forward bounce mail settings #
# GET /mail_settings/forward_bounce #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/forward_bounce'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update forward spam mail settings #
# PATCH /mail_settings/forward_spam #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "email": "", 
  "enabled": false
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/forward_spam'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve forward spam mail settings #
# GET /mail_settings/forward_spam #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/forward_spam'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update plain content mail settings #
# PATCH /mail_settings/plain_content #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": false
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/plain_content'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve plain content mail settings #
# GET /mail_settings/plain_content #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/plain_content'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update spam check mail settings #
# PATCH /mail_settings/spam_check #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": true, 
  "max_score": 5, 
  "url": "url"
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/spam_check'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve spam check mail settings #
# GET /mail_settings/spam_check #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/spam_check'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Update template mail settings #
# PATCH /mail_settings/template #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.requestBody = {
  "enabled": true, 
  "html_content": "<% body %>"
};
request.method = 'PATCH'
request.path = '/v3/mail_settings/template'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

##################################################
# Retrieve legacy template mail settings #
# GET /mail_settings/template #

var emptyRequest = require('sendgrid-rest').request
var request = JSON.parse(JSON.stringify(emptyRequest))
request.method = 'GET'
request.path = '/v3/mail_settings/template'
sg.API(request, function (response) {
  console.log(response.statusCode)
  console.log(response.responseBody)
  console.log(response.responseHeaders)
})

