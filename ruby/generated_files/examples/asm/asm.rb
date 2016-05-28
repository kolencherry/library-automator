require 'sendgrid-ruby'


sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

##################################################
# Create a Group #
# POST /asm/groups #

data = JSON.parse('{
  "description": "A group description", 
  "is_default": false, 
  "name": "A group name"
}')
response = sg.client.asm.groups.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Retrieve all suppression groups associated with the user. #
# GET /asm/groups #

response = sg.client.asm.groups.get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Update a suppression group. #
# PATCH /asm/groups/{group_id} #

data = JSON.parse('{
  "description": "Suggestions for items our users might like.", 
  "id": 103, 
  "name": "Item Suggestions"
}')
group_id = "test_url_param"
response = sg.client.asm.groups._(group_id).patch(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Get information on a single suppression group. #
# GET /asm/groups/{group_id} #

group_id = "test_url_param"
response = sg.client.asm.groups._(group_id).get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Delete a suppression group. #
# DELETE /asm/groups/{group_id} #

group_id = "test_url_param"
response = sg.client.asm.groups._(group_id).delete()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Add suppressions to a suppression group #
# POST /asm/groups/{group_id}/suppressions #

data = JSON.parse('{
  "recipient_emails": [
    "test1@example.com", 
    "test2@example.com"
  ]
}')
group_id = "test_url_param"
response = sg.client.asm.groups._(group_id).suppressions.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Retrieve all suppressions for a suppression group #
# GET /asm/groups/{group_id}/suppressions #

group_id = "test_url_param"
response = sg.client.asm.groups._(group_id).suppressions.get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Delete a suppression from a suppression group #
# DELETE /asm/groups/{group_id}/suppressions/{email} #

group_id = "test_url_param"
        email = "test_url_param"
response = sg.client.asm.groups._(group_id).suppressions._(email).delete()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Add recipient addresses to the global suppression group. #
# POST /asm/suppressions/global #

data = JSON.parse('{
  "recipient_emails": [
    "test1@example.com", 
    "test2@example.com"
  ]
}')
response = sg.client.asm.suppressions.global.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Retrieve a Global Suppression #
# GET /asm/suppressions/global/{email} #

email = "test_url_param"
response = sg.client.asm.suppressions.global._(email).get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Delete a Global Suppression #
# DELETE /asm/suppressions/global/{email} #

email = "test_url_param"
response = sg.client.asm.suppressions.global._(email).delete()
puts response.status_code
puts response.response_body
puts response.response_headers

