package main

import (
	"encoding/json"
	"fmt"
	"github.com/sendgrid/sendgrid-go"
	"os"
)

apiKey := "SENDGRID_APIKEY"
host = "https://api.sendgrid.com"

##################################################
# Create a domain whitelabel. #
# POST /whitelabel/domains #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "automatic_security": false, 
  "custom_spf": true, 
  "default": true, 
  "domain": "example.com", 
  "ips": [
    "192.168.1.1", 
    "192.168.1.2"
  ], 
  "subdomain": "news", 
  "username": "john@example.com"
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# List all domain whitelabels. #
# GET /whitelabel/domains #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains", host, "v3")
request.Method = "GET"
queryParams := make(map[string]string)
queryParams["username"] = "test_string"
queryParams["domain"] = "test_string"
queryParams["exclude_subusers"] = "true"
queryParams["limit"] = "1"
queryParams["offset"] = "1"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Get the default domain whitelabel. #
# GET /whitelabel/domains/default #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/default", host, "v3")
request.Method = "GET"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# List the domain whitelabel associated with the given user. #
# GET /whitelabel/domains/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/subuser", host, "v3")
request.Method = "GET"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Disassociate a domain whitelabel from a given user. #
# DELETE /whitelabel/domains/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/subuser", host, "v3")
request.Method = "DELETE"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Update a domain whitelabel. #
# PATCH /whitelabel/domains/{domain_id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{domain_id}", host, "v3")
request.Method = "PATCH"
request.RequestBody = []byte(` {
  "custom_spf": true, 
  "default": false
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve a domain whitelabel. #
# GET /whitelabel/domains/{domain_id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{domain_id}", host, "v3")
request.Method = "GET"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Delete a domain whitelabel. #
# DELETE /whitelabel/domains/{domain_id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{domain_id}", host, "v3")
request.Method = "DELETE"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Associate a domain whitelabel with a given user. #
# POST /whitelabel/domains/{domain_id}/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{domain_id}/subuser", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "username": "jane@example.com"
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Add an IP to a domain whitelabel. #
# POST /whitelabel/domains/{id}/ips #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{id}/ips", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "ip": "192.168.0.1"
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Remove an IP from a domain whitelabel. #
# DELETE /whitelabel/domains/{id}/ips/{ip} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{id}/ips/{ip}", host, "v3")
request.Method = "DELETE"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Validate a domain whitelabel. #
# POST /whitelabel/domains/{id}/validate #

request := sendgrid.GetRequest(apiKey, "/whitelabel/domains/{id}/validate", host, "v3")
request.Method = "POST"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Create an IP whitelabel #
# POST /whitelabel/ips #

request := sendgrid.GetRequest(apiKey, "/whitelabel/ips", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "domain": "example.com", 
  "ip": "192.168.1.1", 
  "subdomain": "email"
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve all IP whitelabels #
# GET /whitelabel/ips #

request := sendgrid.GetRequest(apiKey, "/whitelabel/ips", host, "v3")
request.Method = "GET"
queryParams := make(map[string]string)
queryParams["ip"] = "test_string"
queryParams["limit"] = "1"
queryParams["offset"] = "1"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve an IP whitelabel #
# GET /whitelabel/ips/{id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/ips/{id}", host, "v3")
request.Method = "GET"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Delete an IP whitelabel #
# DELETE /whitelabel/ips/{id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/ips/{id}", host, "v3")
request.Method = "DELETE"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Validate an IP whitelabel #
# POST /whitelabel/ips/{id}/validate #

request := sendgrid.GetRequest(apiKey, "/whitelabel/ips/{id}/validate", host, "v3")
request.Method = "POST"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Create a Link Whitelabel #
# POST /whitelabel/links #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "default": true, 
  "domain": "example.com", 
  "subdomain": "mail"
}`)
queryParams := make(map[string]string)
queryParams["limit"] = "1"
queryParams["offset"] = "1"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve all link whitelabels #
# GET /whitelabel/links #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links", host, "v3")
request.Method = "GET"
queryParams := make(map[string]string)
queryParams["limit"] = "1"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve a Default Link Whitelabel #
# GET /whitelabel/links/default #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/default", host, "v3")
request.Method = "GET"
queryParams := make(map[string]string)
queryParams["domain"] = "test_string"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve Associated Link Whitelabel #
# GET /whitelabel/links/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/subuser", host, "v3")
request.Method = "GET"
queryParams := make(map[string]string)
queryParams["username"] = "test_string"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Disassociate a Link Whitelabel #
# DELETE /whitelabel/links/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/subuser", host, "v3")
request.Method = "DELETE"
queryParams := make(map[string]string)
queryParams["username"] = "test_string"
request.QueryParams = queryParams
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Update a Link Whitelabel #
# PATCH /whitelabel/links/{id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/{id}", host, "v3")
request.Method = "PATCH"
request.RequestBody = []byte(` {
  "default": true
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Retrieve a Link Whitelabel #
# GET /whitelabel/links/{id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/{id}", host, "v3")
request.Method = "GET"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Delete a Link Whitelabel #
# DELETE /whitelabel/links/{id} #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/{id}", host, "v3")
request.Method = "DELETE"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Validate a Link Whitelabel #
# POST /whitelabel/links/{id}/validate #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/{id}/validate", host, "v3")
request.Method = "POST"
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

##################################################
# Associate a Link Whitelabel #
# POST /whitelabel/links/{link_id}/subuser #

request := sendgrid.GetRequest(apiKey, "/whitelabel/links/{link_id}/subuser", host, "v3")
request.Method = "POST"
request.RequestBody = []byte(` {
  "username": "jane@example.com"
}`)
response, err := sendgrid.API(request)
if err != nil {
  fmt.Println(err)
} else {
  fmt.Println(response.StatusCode)
  fmt.Println(response.ResponseBody)
  fmt.Println(response.ResponseHeaders)
}

