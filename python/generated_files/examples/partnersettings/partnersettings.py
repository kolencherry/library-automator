import sendgrid
import json
import os

sg = sendgrid.SendGridAPIClient()

##################################################
# Returns a list of all partner settings. #
# GET /partner_settings #

params = {'limit': 0, 'offset': 0}
response = self.sg.client.partner_settings.get(query_params=params)
print(response.status_code)
print(response.response_body)
print(response.response_headers)

##################################################
# Updates New Relic partner settings. #
# PATCH /partner_settings/new_relic #

data = {'sample': 'data'}
response = self.sg.client.partner_settings.new_relic.patch(request_body=data)
print(response.status_code)
print(response.response_body)
print(response.response_headers)

##################################################
# Returns all New Relic partner settings. #
# GET /partner_settings/new_relic #

response = self.sg.client.partner_settings.new_relic.get()
print(response.status_code)
print(response.response_body)
print(response.response_headers)

##################################################
# Update SendWithUs Settings #
# PATCH /partner_settings/sendwithus #

data = {'sample': 'data'}
response = self.sg.client.partner_settings.sendwithus.patch(request_body=data)
print(response.status_code)
print(response.response_body)
print(response.response_headers)

##################################################
# Get SendWithUs Settings #
# GET /partner_settings/sendwithus #

response = self.sg.client.partner_settings.sendwithus.get()
print(response.status_code)
print(response.response_body)
print(response.response_headers)

