# INITIALIZATION

```
sendgrid_api_key = os.environ.get('SENDGRID_API_KEY')
host = os.environ.get('HOST') # e.g. https://api.sendgrid.com/v3
sg = sendgrid.SendGridAPIClient(self.sendgrid_api_key, host=self.host)
```

# APIKEYS

## Create API keys

This will create a new random API Key for the user. A JSON request body containing a "name" property is required. If number of maximum keys is reached, HTTP 403 will be returned.

There is a limit of 100 API Keys on your account.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

See the [API Key Permissions List](https://sendgrid.com/docs/API_Reference/Web_API_v3/API_Keys/api_key_permissions_list.html) for a list of all available scopes.

### POST /api_keys

```
data = {'sample': 'data'}
response = self.sg.client.api_keys.post(data=data)
print response.status_code
print response.text
```

## List all API Keys belonging to the authenticated user

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

### GET /api_keys

```
response = self.sg.client.api_keys.get()
print response.status_code
print response.text
```

## Update the name & scopes of an API Key

A JSON request body with a "name" property is required.
Most provide the list of all the scopes an api key should have.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| Param   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are updating.|

### PUT /api_keys/{api_key_id}

```
data = {'sample': 'data'}
api_key_id = "test_url_param"
response = self.sg.client.api_keys._(api_key_id).put(data=data)
print response.status_code
print response.text
```

## Update API keys

**Update the name of an existing API Key**

A JSON request body with a "name" property is required.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are updating.|

### PATCH /api_keys/{api_key_id}

```
data = {'sample': 'data'}
api_key_id = "test_url_param"
response = self.sg.client.api_keys._(api_key_id).patch(data=data)
print response.status_code
print response.text
```

## Get an existing API Key

Retrieve a single api key.
If the API Key ID does not exist an HTTP 404 will be returned.

## URI Parameters

| Param   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key for which you are requesting information.|

### GET /api_keys/{api_key_id}

```
api_key_id = "test_url_param"
response = self.sg.client.api_keys._(api_key_id).get()
print response.status_code
print response.text
```

## Delete API keys

**Revoke an existing API Key**

Authentications using this API Key will fail after this request is made, with some small propogation delay.If the API Key ID does not exist an HTTP 404 will be returned.

The API Keys feature allows customers to be able to generate an API Key credential which can be used for authentication with the SendGrid v3 Web API or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html).

## URI Parameters

| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
|api_key_id |string | required | The ID of the API Key you are deleting.|

### DELETE /api_keys/{api_key_id}

```
api_key_id = "test_url_param"
response = self.sg.client.api_keys._(api_key_id).delete()
print response.status_code
print response.text
```

# ASM

## Create a Group

Groups are specific types of email you would like your recipients to be able to unsubscribe from or subscribe to. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the Group will be visible by recipients when they are managing their subscriptions.

### POST /asm/groups

```
data = {'sample': 'data'}
response = self.sg.client.asm.groups.post(data=data)
print response.status_code
print response.text
```

## Retrieve all suppression groups associated with the user.

Groups are specific types of email you would like your recipients to be able to unsubscribe from or subscribe to. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the Group will be visible by recipients when they are managing their subscriptions.

### GET /asm/groups

```
response = self.sg.client.asm.groups.get()
print response.status_code
print response.text
```

## Get information on a single suppression group.

Groups are specific types of email you would like your recipients to be able to unsubscribe from or subscribe to. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the Group will be visible by recipients when they are managing their subscriptions.

### GET /asm/groups/{group_id}

```
group_id = "test_url_param"
response = self.sg.client.asm.groups._(group_id).get()
print response.status_code
print response.text
```

## Delete a suppression group.

Groups are specific types of email you would like your recipients to be able to unsubscribe from or subscribe to. For example: Daily Newsletters, Invoices, System Alerts.

The **name** and **description** of the Group will be visible by recipients when they are managing their subscriptions.

### DELETE /asm/groups/{group_id}

```
group_id = "test_url_param"
response = self.sg.client.asm.groups._(group_id).delete()
print response.status_code
print response.text
```

## Add Suppressions to a Group

Suppressions are email addresses that can be added to [groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html) to prevent certain types of emails from being delivered to those addresses.

### POST /asm/groups/{group_id}/suppressions

```
data = {'sample': 'data'}
group_id = "test_url_param"
response = self.sg.client.asm.groups._(group_id).suppressions.post(data=data)
print response.status_code
print response.text
```

## Get suppressed addresses for a given group.

Suppressions are email addresses that can be added to [groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html) to prevent certain types of emails from being delivered to those addresses.

### GET /asm/groups/{group_id}/suppressions

```
group_id = "test_url_param"
response = self.sg.client.asm.groups._(group_id).suppressions.get()
print response.status_code
print response.text
```

## Delete a Suppression from a Group

Suppressions are email addresses that can be added to [groups](https://sendgrid.com/docs/API_Reference/Web_API_v3/Suppression_Management/groups.html) to prevent certain types of emails from being delivered to those addresses.

### DELETE /asm/groups/{group_id}/suppressions/{email}

```
group_id = "test_url_param"
        email = "test_url_param"
response = self.sg.client.asm.groups._(group_id).suppressions._(email).delete()
print response.status_code
print response.text
```

## Update unsubscribe groups



### PATCH /asm/groups/{unsubscribe_group_id}

```
data = {'sample': 'data'}
unsubscribe_group_id = "test_url_param"
response = self.sg.client.asm.groups._(unsubscribe_group_id).patch(data=data)
print response.status_code
print response.text
```

## Add recipient addresses to the global suppression group.

Global Suppressions are email addresses that will not receive any emails.

### POST /asm/suppressions/global

```
data = {'sample': 'data'}
response = self.sg.client.asm.suppressions._("global").post(data=data)
print response.status_code
print response.text
```

## Check if a recipient address is in the global suppressions group.

Global Suppressions are email addresses that will not receive any emails.

### GET /asm/suppressions/global/{email_address}

```
email_address = "test_url_param"
response = self.sg.client.asm.suppressions._("global")._(email_address).get()
print response.status_code
print response.text
```

## Retrieve a Global Suppression



### GET /asm/suppressions/{email}

```
email = "test_url_param"
response = self.sg.client.asm.suppressions._(email).get()
print response.status_code
print response.text
```

## Delete a Global Suppression



### DELETE /asm/suppressions/{email}

```
email = "test_url_param"
response = self.sg.client.asm.suppressions._(email).delete()
print response.status_code
print response.text
```

# BROWSERS

## Gets email statistics by browser. 



### GET /browsers/stats

```
params = {'aggregated_by': 'test_string', 'limit': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string', 'offset': 'test_string'}
response = self.sg.client.browsers.stats.get(, params=params)
print response.status_code
print response.text
```

# CAMPAIGNS

## Create a Campaign

Our Marketing Campaigns API lets you create, manage, send, and schedule campaigns.


Note: In order to send or schedule the campaign, you will be required to provide a subject, sender ID, content (we suggest both html and plain text), and at least one list or segment ID. This information is not required when you create a campaign.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### POST /campaigns

```
data = {'sample': 'data'}
response = self.sg.client.campaigns.post(data=data)
print response.status_code
print response.text
```

## Get all Campaigns

Returns campaigns in reverse order they were created (newest first).

Returns an empty array if no campaigns exist.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### GET /campaigns

```
params = {'limit': 0, 'offset': 0}
response = self.sg.client.campaigns.get(, params=params)
print response.status_code
print response.text
```

## Update a Campaign

Update a campaign. This is especially useful if you only set up the campaign using POST /campaigns, but didn't set many of the parameters.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### PATCH /campaigns/{campaign_id}

```
data = {'sample': 'data'}
params = {'campaign_id': 'test_string'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).patch(data=data, params=params)
print response.status_code
print response.text
```

## Get a single campaign

This is a place for notes and extra information about this endpoint. It is written
in Markdown - more info in the [documentation](/docs/designer#markdown).

There are several special markdown helpers that automatically build tables
and html off of your endpoint definition. You can find some examples in this content.

Click the "Open Editor" button above to start editing this content.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### GET /campaigns/{campaign_id}

```
params = {'campaign_id': 0}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a Campaign

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### DELETE /campaigns/{campaign_id}

```
params = {'campaign_id': 'test_string'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).delete(, params=params)
print response.status_code
print response.text
```

## Update a Scheduled Campaign

Changes the send_at time for the specified campaign.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### PATCH /campaigns/{campaign_id}/schedules

```
data = {'sample': 'data'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.patch(data=data)
print response.status_code
print response.text
```

## Schedule a Campaign

Send your campaign at a specific date and time.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### POST /campaigns/{campaign_id}/schedules

```
data = {'sample': 'data'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.post(data=data)
print response.status_code
print response.text
```

## View Scheduled Time of a Campaign

View the time that this campaign is scheduled to be sent. 

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### GET /campaigns/{campaign_id}/schedules

```
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.get()
print response.status_code
print response.text
```

## Unschedule a Scheduled Campaign

A successful unschedule will return a 204.
If the specified campaign is in the process of being sent, the only option is to cancel (a different method).

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### DELETE /campaigns/{campaign_id}/schedules

```
params = {'campaign_id': 'test_string'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.delete(, params=params)
print response.status_code
print response.text
```

## Send a Campaign

Send your campaign right now. Normally a POST would have a request body, but since this endpoint is telling us to send a resource that is already created, we don't need a body.

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### POST /campaigns/{campaign_id}/schedules/now

```
data = {'sample': 'data'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.now.post(data=data)
print response.status_code
print response.text
```

## Send a Test Campaign

To send to multiple addresses, use an array for the JSON "to" value ["one@address","two@address"]

For more information:

* [User Guide > Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html)

### POST /campaigns/{campaign_id}/schedules/test

```
data = {'sample': 'data'}
params = {'campaign_id': 'test_string'}
campaign_id = "test_url_param"
response = self.sg.client.campaigns._(campaign_id).schedules.test.post(data=data, params=params)
print response.status_code
print response.text
```

# CATEGORIES

## Get categories



### GET /categories

```
params = {'limit': 'test_string', 'order': 'test_string', 'sort_by': 'test_string'}
response = self.sg.client.categories.get(, params=params)
print response.status_code
print response.text
```

## Category Stats provide all of your users email statistics for your categories.



### GET /categories/stats

```
params = {'end_date': 'test_string', 'aggregated_by': 'test_string', 'limit': 'test_string', 'offset': 'test_string', 'start_date': 'test_string', 'categories': 'test_string'}
response = self.sg.client.categories.stats.get(, params=params)
print response.status_code
print response.text
```

## Get sums of a category's stats [Needs: Stats object defined, has category ID?]



### GET /categories/stats/sums

```
params = {'end_date': 'test_string', 'aggregated_by': 'test_string', 'limit': 'test_string', 'sort_by_metric': 'test_string', 'offset': 'test_string', 'start_date': 'test_string', 'sort_by_direction': 'test_string'}
response = self.sg.client.categories.stats.sums.get(, params=params)
print response.status_code
print response.text
```

# CLIENTS

## Retrieve stats by client type

Gets email statistics by client type.

### GET /clients/stats

```
params = {'aggregated_by': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string'}
response = self.sg.client.clients.stats.get(, params=params)
print response.status_code
print response.text
```

## Retrieve stats by a specific client type

Gets email statistics by a single client type.

### GET /clients/{client_type}/stats

```
params = {'aggregated_by': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string'}
client_type = "test_url_param"
response = self.sg.client.clients._(client_type).stats.get(, params=params)
print response.status_code
print response.text
```

# CONTACTDB

## Create a Custom Field

Create a custom field.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/custom_fields

```
data = {'sample': 'data'}
response = self.sg.client.contactdb.custom_fields.post(data=data)
print response.status_code
print response.text
```

## List All Custom Fields

Get all custom fields. 

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/custom_fields

```
response = self.sg.client.contactdb.custom_fields.get()
print response.status_code
print response.text
```

## Get a Custom Field

Get a custom field by ID.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/custom_fields/{custom_field_id}

```
params = {'custom_field_id': 0}
custom_field_id = "test_url_param"
response = self.sg.client.contactdb.custom_fields._(custom_field_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a Custom Field

Delete a custom field by ID.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/custom_fields/{custom_field_id}

```
custom_field_id = "test_url_param"
response = self.sg.client.contactdb.custom_fields._(custom_field_id).delete()
print response.status_code
print response.text
```

## Create a List

Create a list for your recipients.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/lists

```
data = {'sample': 'data'}
response = self.sg.client.contactdb.lists.post(data=data)
print response.status_code
print response.text
```

## List All Lists

Returns an empty list if you GET and no lists exist on your account.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/lists

```
response = self.sg.client.contactdb.lists.get()
print response.status_code
print response.text
```

## Delete Multiple lists

Delete multiple lists.


The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/lists

```
response = self.sg.client.contactdb.lists.delete()
print response.status_code
print response.text
```

## Update a List

Update the name of a list.


The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### PATCH /contactdb/lists/{list_id}

```
data = {'sample': 'data'}
params = {'list_id': 0}
list_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).patch(data=data, params=params)
print response.status_code
print response.text
```

## Get a single list.

Get a single list. 

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/lists/{list_id}

```
params = {'list_id': 0}
list_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a List

Delete a list by ID.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/lists/{list_id}

```
params = {'delete_contacts': 0}
list_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).delete(, params=params)
print response.status_code
print response.text
```

## Add Multiple Recipients to a List

Adds existing recipients to a list, passing in the recipient IDs to add. Recipient IDs should be passed exactly as they are returned from recipient endpoints.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/lists/{list_id}/recipients

```
data = {'sample': 'data'}
params = {'list_id': 0}
list_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).recipients.post(data=data, params=params)
print response.status_code
print response.text
```

## List Recipients on a List

List all the recipients currently on a specific list.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/lists/{list_id}/recipients

```
params = {'page': 0, 'page_size': 0, 'list_id': 0}
list_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).recipients.get(, params=params)
print response.status_code
print response.text
```

## Add a Single Recipient to a List

Add a recipient to a list.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/lists/{list_id}/recipients/{recipient_id}

```
data = {'sample': 'data'}
params = {'recipient_id': 'test_string', 'list_id': 0}
list_id = "test_url_param"
        recipient_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).recipients._(recipient_id).post(data=data, params=params)
print response.status_code
print response.text
```

## Delete a Single Recipient from a Single List

Delete a single recipient from a list.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/lists/{list_id}/recipients/{recipient_id}

```
params = {'recipient_id': 0, 'list_id': 0}
list_id = "test_url_param"
        recipient_id = "test_url_param"
response = self.sg.client.contactdb.lists._(list_id).recipients._(recipient_id).delete(, params=params)
print response.status_code
print response.text
```

## Update Recipient

Updates one or more recipients. The body is an array of recipient objects.

It is of note that you can add custom field data as parameters on recipient objects. We have provided an example using some of the default custom fields SendGrid provides.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### PATCH /contactdb/recipients

```
data = {'sample': 'data'}
response = self.sg.client.contactdb.recipients.patch(data=data)
print response.status_code
print response.text
```

## Add recipients

Add a recipient to your contactdb. It is of note that you can add custom field data as a parameter on this endpoint. We have provided an example using some of the default custom fields SendGrid provides.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/recipients

```
data = {'sample': 'data'}
response = self.sg.client.contactdb.recipients.post(data=data)
print response.status_code
print response.text
```

## List Recipients [waiting on Bryan Adamson's response]

Batch deletion of a page makes it possible to receive an empty page of recipients before reaching the end of
the list of recipients. To avoid this issue; iterate over pages until a 404 is retrieved.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients

```
params = {'page': 0, 'page_size': 0}
response = self.sg.client.contactdb.recipients.get(, params=params)
print response.status_code
print response.text
```

## Delete Recipient

Deletes one or more recipients. The body is a list of recipient ids to delete.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/recipients

```
response = self.sg.client.contactdb.recipients.delete()
print response.status_code
print response.text
```

## Get the count of billable recipients

You are billed for marketing campaigns based on the highest number of recipients you have had in your account at one time. This endpoint will allow you to know the current billable count value.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients/billable_count

```
response = self.sg.client.contactdb.recipients.billable_count.get()
print response.status_code
print response.text
```

## Get a Count of Recipients

Get a count of the current number of recipients in your contact database.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients/count

```
response = self.sg.client.contactdb.recipients.count.get()
print response.status_code
print response.text
```

## Get Recipients Matching Search Criteria

Search the recipients in your contactdb.

field_name:

* is a variable that is substituted for your actual custom field name from your recipient.
* Text fields must be url-encoded. Date fields are searchable only by unix timestamp (e.g. 2/2/2015 becomes 1422835200)
* If field_name is a 'reserved' date field, such as created_at or updated_at, the system will internally convert
your epoch time to a date range encompassing the entire day. For example, an epoch time of 1422835600 converts to
Mon, 02 Feb 2015 00:06:40 GMT, but internally the system will search from Mon, 02 Feb 2015 00:00:00 GMT through
Mon, 02 Feb 2015 23:59:59 GMT.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients/search

```
params = {'{field_name}': 'test_string'}
response = self.sg.client.contactdb.recipients.search.get(, params=params)
print response.status_code
print response.text
```

## Retrieve a single recipient

Retrieve a single recipient by ID from your contact database.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients/{recipient_id}

```
params = {'recipient_id': 'test_string'}
recipient_id = "test_url_param"
response = self.sg.client.contactdb.recipients._(recipient_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a Recipient

Delete a single recipient from your contact database, by ID.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/recipients/{recipient_id}

```
params = {'recipient_id': 'test_string'}
recipient_id = "test_url_param"
response = self.sg.client.contactdb.recipients._(recipient_id).delete(, params=params)
print response.status_code
print response.text
```

## Get the Lists the Recipient Is On

Each recipient can be on many lists. This endpoint gives you the lists this recipient is associated to.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/recipients/{recipient_id}/lists

```
params = {'recipient_id': 'test_string'}
recipient_id = "test_url_param"
response = self.sg.client.contactdb.recipients._(recipient_id).lists.get(, params=params)
print response.status_code
print response.text
```

## Get reserved custom fields fields.

List fields that are reserved and can't be used for custom field names. [GET]

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/reserved_fields

```
response = self.sg.client.contactdb.reserved_fields.get()
print response.status_code
print response.text
```

## Create a Segment

Create a segment. All recipients in your contactdb will be added or removed automatically depending on whether they match the criteria for this segment.

List Id:

* Send this to segment from an existing list
* Don't send this in order to segment from your entire contactdb.

Valid operators for create and update depend on the type of the field you are segmenting: 

* **Dates:** "eq", "ne", "lt" (before), "gt" (after) 
* **Text:** "contains", "eq" (is - matches the full field), "ne" (is not - matches any field where the entire field is not the condition value) 
* **Numbers:** "eq", "lt", "gt" 
* **Email Clicks and Opens:** "eq" (opened), "ne" (not opened) 

Segment conditions using "eq" or "ne" for email clicks and opens should provide a "field" of either *clicks.campaign_identifier* or *opens.campaign_identifier*. The condition value should be a string containing the id of a completed campaign. 

Segments may contain multiple condtions, joined by an "and" or "or" in the "and_or" field. The first condition in the conditions list must have an empty "and_or", and subsequent conditions must all specify an "and_or".

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### POST /contactdb/segments

```
data = {'sample': 'data'}
response = self.sg.client.contactdb.segments.post(data=data)
print response.status_code
print response.text
```

## List All Segments

Get all your segments.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/segments

```
response = self.sg.client.contactdb.segments.get()
print response.status_code
print response.text
```

## Update a segment

Update a segment.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### PATCH /contactdb/segments/{segment_id}

```
data = {'sample': 'data'}
params = {'segment_id': 'test_string'}
segment_id = "test_url_param"
response = self.sg.client.contactdb.segments._(segment_id).patch(data=data, params=params)
print response.status_code
print response.text
```

## Retrieve a Segment

Get a single segment by ID.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/segments/{segment_id}

```
params = {'segment_id': 0}
segment_id = "test_url_param"
response = self.sg.client.contactdb.segments._(segment_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a Segment

Delete a segment from your contactdb. You also have the option to delete all the contacts from your contactdb who were in this segment.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### DELETE /contactdb/segments/{segment_id}

```
params = {'delete_contacts': 0}
segment_id = "test_url_param"
response = self.sg.client.contactdb.segments._(segment_id).delete(, params=params)
print response.status_code
print response.text
```

## List Recipients On a Segment

List all of the recipients in a segment.

The contactdb is a database of your contacts for [SendGrid Marketing Campaigns](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/index.html).

### GET /contactdb/segments/{segment_id}/recipients

```
params = {'page': 'test_string', 'page_size': 'test_string'}
segment_id = "test_url_param"
response = self.sg.client.contactdb.segments._(segment_id).recipients.get(, params=params)
print response.status_code
print response.text
```

# DEVICES

## Gets email statistics by device type.



### GET /devices/stats

```
params = {'aggregated_by': 'test_string', 'limit': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string', 'offset': 'test_string'}
response = self.sg.client.devices.stats.get(, params=params)
print response.status_code
print response.text
```

# GEO

## Gets email statistics by country and state/province.



### GET /geo/stats

```
params = {'end_date': 'test_string', 'country': 'test_string', 'aggregated_by': 'test_string', 'limit': 'test_string', 'offset': 'test_string', 'start_date': 'test_string'}
response = self.sg.client.geo.stats.get(, params=params)
print response.status_code
print response.text
```

# IPS

## List all IPs

See a list of all assigned and unassigned IPs.
Response includes warm up status, pools, assigned subusers, and whitelabel info.
The start_date field corresponds to when warmup started for that IP.

### GET /ips

```
params = {'subuser': 'test_string', 'ip': 'test_string', 'limit': 'test_string', 'exclude_whitelabels': 'test_string', 'offset': 'test_string'}
response = self.sg.client.ips.get(, params=params)
print response.status_code
print response.text
```

## List all assigned IPs

Retrieve a list of your IP addresses.

### GET /ips/assigned

```
response = self.sg.client.ips.assigned.get()
print response.status_code
print response.text
```

## Create an IP pool.



### POST /ips/pools

```
data = {'sample': 'data'}
response = self.sg.client.ips.pools.post(data=data)
print response.status_code
print response.text
```

## List all IP pools.



### GET /ips/pools

```
response = self.sg.client.ips.pools.get()
print response.status_code
print response.text
```

## Update an IP pools name.



### PUT /ips/pools/{pool_name}

```
data = {'sample': 'data'}
pool_name = "test_url_param"
response = self.sg.client.ips.pools._(pool_name).put(data=data)
print response.status_code
print response.text
```

## List the IPs in a specified pool.



### GET /ips/pools/{pool_name}

```
pool_name = "test_url_param"
response = self.sg.client.ips.pools._(pool_name).get()
print response.status_code
print response.text
```

## Delete an IP pool.



### DELETE /ips/pools/{pool_name}

```
pool_name = "test_url_param"
response = self.sg.client.ips.pools._(pool_name).delete()
print response.status_code
print response.text
```

## Assign an IP to a pool



### POST /ips/pools/{pool_name}/ips

```
data = {'sample': 'data'}
pool_name = "test_url_param"
response = self.sg.client.ips.pools._(pool_name).ips.post(data=data)
print response.status_code
print response.text
```

## Remove an IP address from a pool.



### DELETE /ips/pools/{pool_name}/ips/{ip}

```
pool_name = "test_url_param"
        ip = "test_url_param"
response = self.sg.client.ips.pools._(pool_name).ips._(ip).delete()
print response.status_code
print response.text
```

## Add an IP to warmup.



### POST /ips/warmup

```
data = {'sample': 'data'}
response = self.sg.client.ips.warmup.post(data=data)
print response.status_code
print response.text
```

## Get all IPs that are currently warming up.



### GET /ips/warmup

```
response = self.sg.client.ips.warmup.get()
print response.status_code
print response.text
```

## Get warmup status for a particular IP.



### GET /ips/warmup/{ip_address}

```
ip_address = "test_url_param"
response = self.sg.client.ips.warmup._(ip_address).get()
print response.status_code
print response.text
```

## Remove an IP from warmup.



### DELETE /ips/warmup/{ip_address}

```
ip_address = "test_url_param"
response = self.sg.client.ips.warmup._(ip_address).delete()
print response.status_code
print response.text
```

## See which pools an IP address belongs to.



### GET /ips/{ip_address}

```
ip_address = "test_url_param"
response = self.sg.client.ips._(ip_address).get()
print response.status_code
print response.text
```

# MAIL

## Create a batch ID

Generate a new Batch ID to associate with scheduled sends via the mail/send endpoint.

If you set the SMTPAPI header batch_id, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)

### POST /mail/batch

```
data = {'sample': 'data'}
response = self.sg.client.mail.batch.post(data=data)
print response.status_code
print response.text
```

## Validate batch ID

Validate whether or not a batch id is valid.

If you set the SMTPAPI header batch_id, it allows you to then associate multiple scheduled mail/send requests together with the same ID. Then at anytime up to 10 minutes before the schedule date, you can cancel all of the mail/send requests that have this batch ID by calling the Cancel Scheduled Send endpoint. 

More Information:

* [Scheduling Parameters > Batch ID](https://sendgrid.com/docs/API_Reference/SMTP_API/scheduling_parameters.html)

### GET /mail/batch/{batch_id}

```
params = {'batch_id': 'test_string'}
batch_id = "test_url_param"
response = self.sg.client.mail.batch._(batch_id).get(, params=params)
print response.status_code
print response.text
```

# MAILSETTINGS

## Get all mail settings



### GET /mail_settings

```
params = {'limit': 'test_string', 'offset': 'test_string'}
response = self.sg.client.mail_settings.get(, params=params)
print response.status_code
print response.text
```

## Update address whitelist mail settings



### PATCH /mail_settings/address_whitelist

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.address_whitelist.patch(data=data)
print response.status_code
print response.text
```

## Get address whitelist mail settings



### GET /mail_settings/address_whitelist

```
response = self.sg.client.mail_settings.address_whitelist.get()
print response.status_code
print response.text
```

## Update BCC mail settings



### PATCH /mail_settings/bcc

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.bcc.patch(data=data)
print response.status_code
print response.text
```

## Get BCC mail settings



### GET /mail_settings/bcc

```
response = self.sg.client.mail_settings.bcc.get()
print response.status_code
print response.text
```

## Update bounce purge mail settings



### PATCH /mail_settings/bounce_purge

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.bounce_purge.patch(data=data)
print response.status_code
print response.text
```

## Get bounce purge mail settings



### GET /mail_settings/bounce_purge

```
response = self.sg.client.mail_settings.bounce_purge.get()
print response.status_code
print response.text
```

## Update footer mail settings



### PATCH /mail_settings/footer

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.footer.patch(data=data)
print response.status_code
print response.text
```

## Get footer mail settings [params can be null?]



### GET /mail_settings/footer

```
response = self.sg.client.mail_settings.footer.get()
print response.status_code
print response.text
```

## Update forward bounce mail settings



### PATCH /mail_settings/forward_bounce

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.forward_bounce.patch(data=data)
print response.status_code
print response.text
```

## Get forward bounce mail settings



### GET /mail_settings/forward_bounce

```
response = self.sg.client.mail_settings.forward_bounce.get()
print response.status_code
print response.text
```

## Update forward spam mail settings



### PATCH /mail_settings/forward_spam

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.forward_spam.patch(data=data)
print response.status_code
print response.text
```

## Get forward spam mail settings



### GET /mail_settings/forward_spam

```
response = self.sg.client.mail_settings.forward_spam.get()
print response.status_code
print response.text
```

## Update plain content mail settings



### PATCH /mail_settings/plain_content

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.plain_content.patch(data=data)
print response.status_code
print response.text
```

## Get plain content mail settings



### GET /mail_settings/plain_content

```
response = self.sg.client.mail_settings.plain_content.get()
print response.status_code
print response.text
```

## Update spam check mail settings



### PATCH /mail_settings/spam_check

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.spam_check.patch(data=data)
print response.status_code
print response.text
```

## Get spam check mail settings



### GET /mail_settings/spam_check

```
response = self.sg.client.mail_settings.spam_check.get()
print response.status_code
print response.text
```

## Update template mail settings



### PATCH /mail_settings/template

```
data = {'sample': 'data'}
response = self.sg.client.mail_settings.template.patch(data=data)
print response.status_code
print response.text
```

## Get template mail settings



### GET /mail_settings/template

```
response = self.sg.client.mail_settings.template.get()
print response.status_code
print response.text
```

# MAILBOXPROVIDERS

## Gets email statistics by mailbox provider.



### GET /mailbox_providers/stats

```
params = {'aggregated_by': 'test_string', 'limit': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string', 'offset': 'test_string'}
response = self.sg.client.mailbox_providers.stats.get(, params=params)
print response.status_code
print response.text
```

# PARTNERSETTINGS

## Returns a list of all partner settings.

**This endpoint allows you to retrieve a list of all partner settings that you can enable.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

### GET /partner_settings

```
params = {'limit': 0, 'offset': 0}
response = self.sg.client.partner_settings.get(, params=params)
print response.status_code
print response.text
```

## Updates New Relic partner settings.

**This endpoint allows you to update or change your New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).

### PATCH /partner_settings/new_relic

```
data = {'sample': 'data'}
response = self.sg.client.partner_settings.new_relic.patch(data=data)
print response.status_code
print response.text
```

## Returns all New Relic partner settings.

**This endpoint allows you to retrieve your current New Relic partner settings.**

Our partner settings allow you to integrate your SendGrid account with our partners to increase your SendGrid experience and functionality. For more information about our partners, and how you can begin integrating with them, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/partners.html).

By integrating with New Relic, you can send your SendGrid email statistics to your New Relic Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You will need your New Relic License Key to enable this setting. For more information, please see our [Classroom](https://sendgrid.com/docs/Classroom/Track/Collecting_Data/new_relic.html).

### GET /partner_settings/new_relic

```
response = self.sg.client.partner_settings.new_relic.get()
print response.status_code
print response.text
```

## Update SendWithUs Settings



### PATCH /partner_settings/sendwithus

```
data = {'sample': 'data'}
response = self.sg.client.partner_settings.sendwithus.patch(data=data)
print response.status_code
print response.text
```

## Get SendWithUs Settings



### GET /partner_settings/sendwithus

```
response = self.sg.client.partner_settings.sendwithus.get()
print response.status_code
print response.text
```

# SCOPES

## Returns a list of scopes for which that user has access.

**This endpoint returns a list of all scopes that this user has access to.**

API Keys can be used to authenticate the use of [SendGrids v3 Web API](https://sendgrid.com/docs/API_Reference/Web_API_v3/index.html), or the [Mail API Endpoint](https://sendgrid.com/docs/API_Reference/Web_API/mail.html). API Keys may be assigned certain permissions, or scopes, that limit which API endpoints they are able to access. For a more detailed explanation of how you can use API Key permissios, please visit our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/api_keys.html#-API-Key-Permissions) or [Classroom](https://sendgrid.com/docs/Classroom/Basics/API/api_key_permissions.html). 

### GET /scopes

```
response = self.sg.client.scopes.get()
print response.status_code
print response.text
```

# STATS

## Global Stats provide all of your users email statistics for a given date range.

Global Stats provide all of your users email statistics for a given date range.

### GET /stats

```
params = {'aggregated_by': 'test_string', 'limit': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string', 'offset': 'test_string'}
response = self.sg.client.stats.get(, params=params)
print response.status_code
print response.text
```

# SUBUSERS

## Create Subuser

This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### POST /subusers

```
data = {'sample': 'data'}
response = self.sg.client.subusers.post(data=data)
print response.status_code
print response.text
```

## List all Subusers

This endpoint allows you to retrieve a list of all of your subusers. You can choose to retrieve specific subusers as well as limit the results that come back from the API.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### GET /subusers

```
params = {'username': 'test_string', 'limit': 0, 'offset': 0}
response = self.sg.client.subusers.get(, params=params)
print response.status_code
print response.text
```

## Retrieve Subuser Reputations

Subuser sender reputations give a good idea how well a sender is doing with regards to how recipients and recipient servers react to the mail that is being received. When a bounce, spam report, or other negative action happens on a sent email, it will effect your sender rating.

This endpoint allows you to request the reputations for your subusers.

### GET /subusers/reputations

```
params = {'subuser_name': 'test_string'}
response = self.sg.client.subusers.reputations.get(, params=params)
print response.status_code
print response.text
```

## Subuser Stats provide all of your users email statistics for your subuser accounts.



### GET /subusers/stats

```
params = {'end_date': 'test_string', 'aggregated_by': 'test_string', 'limit': 'test_string', 'offset': 'test_string', 'start_date': 'test_string', 'subusers': 'test_string'}
response = self.sg.client.subusers.stats.get(, params=params)
print response.status_code
print response.text
```

##  Gets the total sums of each email statistic metric for all subusers over the given date range.



### GET /subusers/stats/sums

```
params = {'end_date': 'test_string', 'aggregated_by': 'test_string', 'limit': 'test_string', 'sort_by_metric': 'test_string', 'offset': 'test_string', 'start_date': 'test_string', 'sort_by_direction': 'test_string'}
response = self.sg.client.subusers.stats.sums.get(, params=params)
print response.status_code
print response.text
```

## Enable/disable a subuser

This endpoint allows you to enable or disable a subuser.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### PATCH /subusers/{subuser_name}

```
data = {'sample': 'data'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).patch(data=data)
print response.status_code
print response.text
```

## Delete a subuser

This endpoint allows you to delete a subuser. This is a permanent action, once deleted a subuser cannot be retrieved.

For more information about Subusers:

* [User Guide > Subusers](https://sendgrid.com/docs/User_Guide/Settings/Subusers/index.html)
* [Classroom > How do I add more subusers to my account?](https://sendgrid.com/docs/Classroom/Basics/Account/how_do_i_add_more_subusers_to_my_account.html)

### DELETE /subusers/{subuser_name}

```
params = {'subuser_name': 'test_string'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).delete(, params=params)
print response.status_code
print response.text
```

## Update IPs assigned to a subuser

Each subuser should be assigned to an IP address, from which all of this subuser's mail will be sent. Often, this is the same IP as the parent account, but each subuser can have their own, or multiple, IP addresses as well. 

More information:

* [How to request more IPs](https://sendgrid.com/docs/Classroom/Basics/Account/adding_an_additional_dedicated_ip_to_your_account.html)
* [IPs can be whitelabeled](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/ips.html)

### PUT /subusers/{subuser_name}/ips

```
data = {'sample': 'data'}
params = {'subuser_name': 'test_string'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).ips.put(data=data, params=params)
print response.status_code
print response.text
```

## Update Monitor Settings for a subuser

Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### PUT /subusers/{subuser_name}/monitor

```
data = {'sample': 'data'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).monitor.put(data=data)
print response.status_code
print response.text
```

## Create monitor settings

Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### POST /subusers/{subuser_name}/monitor

```
data = {'sample': 'data'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).monitor.post(data=data)
print response.status_code
print response.text
```

## Retrieve monitor settings for a subuser

Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### GET /subusers/{subuser_name}/monitor

```
params = {'subuser_name': 'test_string'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).monitor.get(, params=params)
print response.status_code
print response.text
```

## Delete monitor settings

Subuser monitor settings allow you to receive a sample of an outgoing message by a specific customer at a specific frequency of emails.

### DELETE /subusers/{subuser_name}/monitor

```
params = {'subuser_name': 'test_string'}
subuser_name = "test_url_param"
response = self.sg.client.subusers._(subuser_name).monitor.delete(, params=params)
print response.status_code
print response.text
```

# SUPPRESSION

## List all bounces

Bounces are messages that are returned to the server that sent it. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)

### GET /suppression/bounces

```
params = {'start_time': 0, 'end_time': 0}
response = self.sg.client.suppression.bounces.get(, params=params)
print response.status_code
print response.text
```

## Delete bounces

Bounces are messages that are returned to the server that sent it. This endpoint allows you to delete email addresses from your bounce list. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

Note: the 'delete_all' and 'emails' parameters should be used independently of each other as they have different purposes.

### DELETE /suppression/bounces

```
response = self.sg.client.suppression.bounces.delete()
print response.status_code
print response.text
```

## Get a Bounce



### GET /suppression/bounces/{email}

```
email = "test_url_param"
response = self.sg.client.suppression.bounces._(email).get()
print response.status_code
print response.text
```

## Delete a bounce

Bounces are messages that are returned to the server that sent it. This endpoint allows you to delete a single email addresses from your bounce list. 

For more information see: 

* [User Guide > Bounces](https://sendgrid.com/docs/User_Guide/Suppressions/bounces.html) for more information
* [Glossary > Bounces](https://sendgrid.com/docs/Glossary/Bounces.html)
* [Classroom > List Scrubbing Guide](https://sendgrid.com/docs/Classroom/Deliver/list_scrubbing.html)

### DELETE /suppression/bounces/{email}

```
params = {'email_address': 'test_string'}
email = "test_url_param"
response = self.sg.client.suppression.bounces._(email).delete(, params=params)
print response.status_code
print response.text
```

# TEMPLATES

## Create a transactional template.

**This endpoint allows you to create a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

### POST /templates

```
data = {'sample': 'data'}
response = self.sg.client.templates.post(data=data)
print response.status_code
print response.text
```

## Retrieve all transactional templates.

**This endpoint allows you to retrieve all transactional templates.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

### GET /templates

```
response = self.sg.client.templates.get()
print response.status_code
print response.text
```

## Edit a transactional template.

**This endpoint allows you to edit a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| id| string | The id of the transactional template you want to edit. |

### PATCH /templates/{template_id}

```
data = {'sample': 'data'}
template_id = "test_url_param"
response = self.sg.client.templates._(template_id).patch(data=data)
print response.status_code
print response.text
```

## Retrieve a single transactional template.

**This endpoint allows you to retrieve a single transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| id| string | The id of the transactional template you want to retrieve. |

### GET /templates/{template_id}

```
template_id = "test_url_param"
response = self.sg.client.templates._(template_id).get()
print response.status_code
print response.text
```

## Delete a template.

**This endpoint allows you to delete a transactional template.**

Each user can create up to 300 different transactional templates. Transactional templates are specific to accounts and subusers. Templates created on a parent account will not be accessible from the subuser accounts.

Transactional templates are templates created specifically for transactional email and are not to be confused with [Marketing Campaigns templates](https://sendgrid.com/docs/User_Guide/Marketing_Campaigns/templates.html). For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| template_id| string | The id of the transactional template you want to delete. |

### DELETE /templates/{template_id}

```
template_id = "test_url_param"
response = self.sg.client.templates._(template_id).delete()
print response.status_code
print response.text
```

## Create a new transactional template version.

**This endpoint allows you to create a new version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).


### POST /templates/{template_id}/versions

```
data = {'sample': 'data'}
template_id = "test_url_param"
response = self.sg.client.templates._(template_id).versions.post(data=data)
print response.status_code
print response.text
```

## Edit a transactional template version.

**This endpoint allows you to edit a version of one of your transactional templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |

### PATCH /templates/{template_id}/versions/{version_id}

```
data = {'sample': 'data'}
template_id = "test_url_param"
        version_id = "test_url_param"
response = self.sg.client.templates._(template_id).versions._(version_id).patch(data=data)
print response.status_code
print response.text
```

## Retrieve a specific transactional template version.

**This endpoint allows you to retrieve a specific version of a template.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |

### GET /templates/{template_id}/versions/{version_id}

```
template_id = "test_url_param"
        version_id = "test_url_param"
response = self.sg.client.templates._(template_id).versions._(version_id).get()
print response.status_code
print response.text
```

## Delete a transactional template version.

**This endpoint allows you to delete one of your transactional template versions.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.

For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string | The ID of the template version |

### DELETE /templates/{template_id}/versions/{version_id}

```
template_id = "test_url_param"
        version_id = "test_url_param"
response = self.sg.client.templates._(template_id).versions._(version_id).delete()
print response.status_code
print response.text
```

## Activate a transactional template version.

**This endpoint allows you to activate a version of one of your templates.**

Each transactional template can have multiple versions, each version with its own subject and content. Each user can have up to 300 versions across across all templates.


For more information about transactional templates, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Transactional_Templates/index.html).

## URI Parameters
| URI Parameter | Type | Description |
|---|---|---|
| template_id | string | The ID of the original template |
| version_id | string |  The ID of the template version |

### POST /templates/{template_id}/versions/{version_id}/activate

```
data = {'sample': 'data'}
template_id = "test_url_param"
        version_id = "test_url_param"
response = self.sg.client.templates._(template_id).versions._(version_id).activate.post(data=data)
print response.status_code
print response.text
```

# TRACKINGSETTINGS

## Get Tracking Settings



### GET /tracking_settings

```
params = {'limit': 'test_string', 'offset': 'test_string'}
response = self.sg.client.tracking_settings.get(, params=params)
print response.status_code
print response.text
```

## Update Click Tracking Settings



### PATCH /tracking_settings/click

```
data = {'sample': 'data'}
response = self.sg.client.tracking_settings.click.patch(data=data)
print response.status_code
print response.text
```

## Get Click Track Settings



### GET /tracking_settings/click

```
response = self.sg.client.tracking_settings.click.get()
print response.status_code
print response.text
```

## Update Google Analytics Settings



### PATCH /tracking_settings/google_analytics

```
data = {'sample': 'data'}
response = self.sg.client.tracking_settings.google_analytics.patch(data=data)
print response.status_code
print response.text
```

## Get Google Analytics Settings



### GET /tracking_settings/google_analytics

```
response = self.sg.client.tracking_settings.google_analytics.get()
print response.status_code
print response.text
```

## Update Open Tracking Settings



### PATCH /tracking_settings/open

```
data = {'sample': 'data'}
response = self.sg.client.tracking_settings.open.patch(data=data)
print response.status_code
print response.text
```

## Get Open Tracking Settings



### GET /tracking_settings/open

```
response = self.sg.client.tracking_settings.open.get()
print response.status_code
print response.text
```

## Update Subscription Tracking Settings



### PATCH /tracking_settings/subscription

```
data = {'sample': 'data'}
response = self.sg.client.tracking_settings.subscription.patch(data=data)
print response.status_code
print response.text
```

## Get Subscription Tracking Settings



### GET /tracking_settings/subscription

```
response = self.sg.client.tracking_settings.subscription.get()
print response.status_code
print response.text
```

# USER

## Get a user's account information.

Your user's account information includes the user's account type and reputation.

### GET /user/account

```
response = self.sg.client.user.account.get()
print response.status_code
print response.text
```

## Update a user's profile

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

It should be noted that any one or more of the parameters can be updated via the PATCH /user/profile endpoint. The only requirement is that you include at least one when you PATCH.

### PATCH /user/profile

```
data = {'sample': 'data'}
response = self.sg.client.user.profile.patch(data=data)
print response.status_code
print response.text
```

## Get a user's profile

Keeping your user profile up to date is important. This will help SendGrid to verify who you are as well as contact you should we need to.

For more information about your user profile:

* [SendGrid Account Settings](https://sendgrid.com/docs/User_Guide/Settings/account.html)

### GET /user/profile

```
response = self.sg.client.user.profile.get()
print response.status_code
print response.text
```

## Cancel or pause a scheduled send

Cancel or pause a scheduled send. If the maximum number of cancellations/pauses are added, HTTP 400 will
be returned.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### POST /user/scheduled_sends

```
data = {'sample': 'data'}
response = self.sg.client.user.scheduled_sends.post(data=data)
print response.status_code
print response.text
```

## Get all scheduled sends

Get all cancel/paused scheduled send information.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### GET /user/scheduled_sends

```
response = self.sg.client.user.scheduled_sends.get()
print response.status_code
print response.text
```

## Update user scheduled send information

Update the status of a scheduled send.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### PATCH /user/scheduled_sends/{batch_id}

```
data = {'sample': 'data'}
batch_id = "test_url_param"
response = self.sg.client.user.scheduled_sends._(batch_id).patch(data=data)
print response.status_code
print response.text
```

## Retrieve scheduled send

Get cancel/paused scheduled send information for a specific batch_id.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### GET /user/scheduled_sends/{batch_id}

```
params = {'batch_id': 'test_string'}
batch_id = "test_url_param"
response = self.sg.client.user.scheduled_sends._(batch_id).get(, params=params)
print response.status_code
print response.text
```

## Delete a cancellation or pause of a scheduled send

Delete the cancellation/pause of a scheduled send.

The Cancel Scheduled Sends feature allows the customer to cancel a scheduled send based on a Batch ID included in the SMTPAPI header.Scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.

### DELETE /user/scheduled_sends/{batch_id}

```
params = {'batch_id': 'test_string'}
batch_id = "test_url_param"
response = self.sg.client.user.scheduled_sends._(batch_id).delete(, params=params)
print response.status_code
print response.text
```

## Change the Enforced TLS settings



### PATCH /user/settings/enforced_tls

```
data = {'sample': 'data'}
response = self.sg.client.user.settings.enforced_tls.patch(data=data)
print response.status_code
print response.text
```

## Get the current Enforced TLS settings.



### GET /user/settings/enforced_tls

```
response = self.sg.client.user.settings.enforced_tls.get()
print response.status_code
print response.text
```

## Gets statistics for Parse Webhook usage.



### GET /user/webhooks/parse/stats

```
params = {'aggregated_by': 'test_string', 'limit': 'test_string', 'start_date': 'test_string', 'end_date': 'test_string', 'offset': 'test_string'}
response = self.sg.client.user.webhooks.parse.stats.get(, params=params)
print response.status_code
print response.text
```

# WHITELABEL

## Create a domain whitelabel.

**This endpoint allows you to create a whitelabel for one of your domains.**

If you are creating a domain whitelabel that you would like a subuser to use, you have two options:
1. Use the "username" parameter. This allows you to create a whitelabel on behalf of your subuser. This means the subuser is able to see and modify the created whitelabel.
2. Use the Association workflow (see Associate Domain section). This allows you to assign a whitelabel created by the parent to a subuser. This means the subuser will default to the assigned whitelabel, but will not be able to see or modify that whitelabel. However, if the subuser creates their own whitelabel it will overwrite the assigned whitelabel.

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### POST /whitelabel/domains

```
data = {'sample': 'data'}
response = self.sg.client.whitelabel.domains.post(data=data)
print response.status_code
print response.text
```

## List all domain whitelabels.

**This endpoint allows you to retrieve a list of all domain whitelabels you have created.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


### GET /whitelabel/domains

```
params = {'username': 'test_string', 'domain': 'test_string', 'exclude_subusers': 0, 'limit': 0, 'offset': 0}
response = self.sg.client.whitelabel.domains.get(, params=params)
print response.status_code
print response.text
```

## Get the default domain whitelabel.

**This endpoint allows you to retrieve the default whitelabel for a domain.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain | string  |The domain to find a default domain whitelabel for. |

### GET /whitelabel/domains/default

```
response = self.sg.client.whitelabel.domains.default.get()
print response.status_code
print response.text
```

## List the domain whitelabel associated with the given user.

**This endpoint allows you to retrieve all of the whitelabels that have been assigned to a specific subuser.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| username | string  | Username of the subuser to find associated whitelabels for. |

### GET /whitelabel/domains/subuser

```
response = self.sg.client.whitelabel.domains.subuser.get()
print response.status_code
print response.text
```

## Disassociate a domain whitelabel from a given user.

**This endpoint allows you to disassociate a specific whitelabel from a subuser.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Required?  | Description  |
|---|---|---|---|
| username | string  | required  | Username for the subuser to find associated whitelabels for. |

### DELETE /whitelabel/domains/subuser

```
response = self.sg.client.whitelabel.domains.subuser.delete()
print response.status_code
print response.text
```

## Update a domain whitelabel.

**This endpoint allows you to update the settings for a domain whitelabel.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### PATCH /whitelabel/domains/{domain_id}

```
data = {'sample': 'data'}
domain_id = "test_url_param"
response = self.sg.client.whitelabel.domains._(domain_id).patch(data=data)
print response.status_code
print response.text
```

## Retrieve a domain whitelabel.

**This endpoint allows you to retrieve a specific domain whitelabel.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)


### GET /whitelabel/domains/{domain_id}

```
domain_id = "test_url_param"
response = self.sg.client.whitelabel.domains._(domain_id).get()
print response.status_code
print response.text
```

## Delete a domain whitelabel.

**This endpoint allows you to delete a domain whitelabel.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

### DELETE /whitelabel/domains/{domain_id}

```
domain_id = "test_url_param"
response = self.sg.client.whitelabel.domains._(domain_id).delete()
print response.status_code
print response.text
```

## Associate a domain whitelabel with a given user.

**This endpoint allows you to associate a specific domain whitelabel with a subuser.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

Domain whitelabels can be associated with (i.e. assigned to) subusers from a parent account. This functionality allows subusers to send mail using their parent's whitelabels. To associate a whitelabel with a subuser, the parent account must first create the whitelabel and validate it. The the parent may then associate the whitelabel via the subuser management tools.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| domain_id | integer   | ID of the domain whitelabel to associate with the subuser. |

### POST /whitelabel/domains/{domain_id}/subuser

```
data = {'sample': 'data'}
domain_id = "test_url_param"
response = self.sg.client.whitelabel.domains._(domain_id).subuser.post(data=data)
print response.status_code
print response.text
```

## Add an IP to a domain whitelabel.

**This endpoint allows you to add an IP address to a domain whitelabel.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  |  Description  |
|---|---|---|
| id | integer  | ID of the domain to which you are adding an IP |

### POST /whitelabel/domains/{id}/ips

```
data = {'sample': 'data'}
id = "test_url_param"
response = self.sg.client.whitelabel.domains._(id).ips.post(data=data)
print response.status_code
print response.text
```

## Remove an IP from a domain whitelabel.

**This endpoint allows you to remove a domain's IP address from that domain's whitelabel.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type  | Description  |
|---|---|---|
| id | integer  | ID of the domain whitelabel to delete the IP from. |
| ip | string | IP to remove from the domain whitelabel. |

### DELETE /whitelabel/domains/{id}/ips/{ip}

```
id = "test_url_param"
        ip = "test_url_param"
response = self.sg.client.whitelabel.domains._(id).ips._(ip).delete()
print response.status_code
print response.text
```

## Validate a domain whitelabel.

**This endpoint allows you to validate a domain whitelabel. If it fails, it will return an error message describing why the whitelabel could not be validated.**

A domain whitelabel allows you to remove the via or sent on behalf of message that your recipients see when they read your emails. Whitelabeling a domain allows you to replace sendgrid.net with your personal sending domain. You will be required to create a subdomain so that SendGrid can generate the DNS records which you must give to your host provider. If you choose to use Automated Security, SendGrid will provide you with 3 CNAME records. If you turn Automated Security off, you will be given 2 TXT records and 1 MX record.

For more information on whitelabeling, please see our [User Guide](https://sendgrid.com/docs/User_Guide/Settings/Whitelabel/index.html)

## URI Parameters
| URI Parameter   | Type   | Description  |
|---|---|---|
| id | integer  |ID of the domain whitelabel to validate. |

### POST /whitelabel/domains/{id}/validate

```
data = {'sample': 'data'}
id = "test_url_param"
response = self.sg.client.whitelabel.domains._(id).validate.post(data=data)
print response.status_code
print response.text
```

## Create an IP



### POST /whitelabel/ips

```
data = {'sample': 'data'}
response = self.sg.client.whitelabel.ips.post(data=data)
print response.status_code
print response.text
```

## List all IPs



### GET /whitelabel/ips

```
params = {'limit': 'test_string'}
response = self.sg.client.whitelabel.ips.get(, params=params)
print response.status_code
print response.text
```

## Retrieve an IP



### GET /whitelabel/ips/{id}

```
id = "test_url_param"
response = self.sg.client.whitelabel.ips._(id).get()
print response.status_code
print response.text
```

## Delete an IP



### DELETE /whitelabel/ips/{id}

```
id = "test_url_param"
response = self.sg.client.whitelabel.ips._(id).delete()
print response.status_code
print response.text
```

## Validate an IP



### POST /whitelabel/ips/{id}/validate

```
data = {'sample': 'data'}
id = "test_url_param"
response = self.sg.client.whitelabel.ips._(id).validate.post(data=data)
print response.status_code
print response.text
```

## Create a Link

This is a place for notes and extra information about this endpoint. It is written
in Markdown - more info in the [documentation](/docs/designer#markdown).

There are several special markdown helpers that automatically build tables
and html off of your endpoint definition. You can find some examples in this content.

Click the "Open Editor" button above to start editing this content.

### POST /whitelabel/links

```
data = {'sample': 'data'}
params = {'limit': 0, 'offset': 0}
response = self.sg.client.whitelabel.links.post(data=data, params=params)
print response.status_code
print response.text
```

## List all Links



### GET /whitelabel/links

```
params = {'limit': 'test_string'}
response = self.sg.client.whitelabel.links.get(, params=params)
print response.status_code
print response.text
```

## Default Link

Default link is the actual link whitelabel to be used when sending messages.  If there are multiple link whitelabels, the default is determined by the following order:
<ul>
  <li>Validated link whitelabels marked as "default"</li>
  <li>Legacy link whitelabels (migrated from the whitelabel wizard)</li>
  <li>Default SendGrid link whitelabel (i.e. 100.ct.sendgrid.net)</li>
</ul>

### GET /whitelabel/links/default

```
params = {'domain': 'test_string'}
response = self.sg.client.whitelabel.links.default.get(, params=params)
print response.status_code
print response.text
```

## List Associated Link



### GET /whitelabel/links/subuser

```
params = {'username': 'test_string'}
response = self.sg.client.whitelabel.links.subuser.get(, params=params)
print response.status_code
print response.text
```

## Disassociate Link

Link Whitelabels can be associated with subusers via parent accounts.  This functionality allows
subusers to send mail off their parent's Whitelabels.  To associate a Whitelabel, the parent account
must first create a Whitelabel and validate it.  Then the parent may associate the Whitelabel in
subuser management.

### DELETE /whitelabel/links/subuser

```
params = {'username': 'test_string'}
response = self.sg.client.whitelabel.links.subuser.delete(, params=params)
print response.status_code
print response.text
```

## Update a Link



### PATCH /whitelabel/links/{id}

```
data = {'sample': 'data'}
id = "test_url_param"
response = self.sg.client.whitelabel.links._(id).patch(data=data)
print response.status_code
print response.text
```

## Retrieve a Link



### GET /whitelabel/links/{id}

```
id = "test_url_param"
response = self.sg.client.whitelabel.links._(id).get()
print response.status_code
print response.text
```

## Delete a Link



### DELETE /whitelabel/links/{id}

```
id = "test_url_param"
response = self.sg.client.whitelabel.links._(id).delete()
print response.status_code
print response.text
```

## Validate a Link



### POST /whitelabel/links/{id}/validate

```
data = {'sample': 'data'}
id = "test_url_param"
response = self.sg.client.whitelabel.links._(id).validate.post(data=data)
print response.status_code
print response.text
```

## Associate Link



### POST /whitelabel/links/{link_id}/subuser

```
data = {'sample': 'data'}
link_id = "test_url_param"
response = self.sg.client.whitelabel.links._(link_id).subuser.post(data=data)
print response.status_code
print response.text
```

