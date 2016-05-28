require 'sendgrid-ruby'


sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

##################################################
# Create a Campaign #
# POST /campaigns #

data = JSON.parse('{
  "categories": [
    "spring line"
  ], 
  "custom_unsubscribe_url": "", 
  "html_content": "<html><head><title></title></head><body><p>Check out our spring line!</p></body></html>", 
  "ip_pool": "marketing", 
  "list_ids": [
    110, 
    124
  ], 
  "plain_content": "Check out our spring line!", 
  "segment_ids": [
    110
  ], 
  "sender_id": 124451, 
  "subject": "New Products for Spring!", 
  "suppression_group_id": 42, 
  "title": "March Newsletter"
}')
response = sg.client.campaigns.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Retrieve all Campaigns #
# GET /campaigns #

params = JSON.parse('{"limit": 0, "offset": 0}')
response = sg.client.campaigns.get(query_params: params)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Update a Campaign #
# PATCH /campaigns/{campaign_id} #

data = JSON.parse('{
  "categories": [
    "summer line"
  ], 
  "html_content": "<html><head><title></title></head><body><p>Check out our summer line!</p></body></html>", 
  "plain_content": "Check out our summer line!", 
  "subject": "New Products for Summer!", 
  "title": "May Newsletter"
}')
campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).patch(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Retrieve a single campaign #
# GET /campaigns/{campaign_id} #

campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Delete a Campaign #
# DELETE /campaigns/{campaign_id} #

campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).delete()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Update a Scheduled Campaign #
# PATCH /campaigns/{campaign_id}/schedules #

data = JSON.parse('{
  "send_at": 1489451436
}')
campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.patch(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Schedule a Campaign #
# POST /campaigns/{campaign_id}/schedules #

data = JSON.parse('{
  "send_at": 1489771528
}')
campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# View Scheduled Time of a Campaign #
# GET /campaigns/{campaign_id}/schedules #

campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.get()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Unschedule a Scheduled Campaign #
# DELETE /campaigns/{campaign_id}/schedules #

campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.delete()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Send a Campaign #
# POST /campaigns/{campaign_id}/schedules/now #

campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.now.post()
puts response.status_code
puts response.response_body
puts response.response_headers

##################################################
# Send a Test Campaign #
# POST /campaigns/{campaign_id}/schedules/test #

data = JSON.parse('{
  "to": "your.email@example.com"
}')
campaign_id = "test_url_param"
response = sg.client.campaigns._(campaign_id).schedules.test.post(request_body: data)
puts response.status_code
puts response.response_body
puts response.response_headers

