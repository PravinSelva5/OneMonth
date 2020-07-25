import twilio
import twilio.rest
from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC75e53ebdc53c30451f75c7fdfd3024e7"
# Your Auth Token from twilio.com/console
auth_token  = "27178cb353e075f0bf97c31f9a5159ea"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+16479832117", 
    from_="+19383333918",
    body="Hello from Python! - Pravin")

print(message.sid)


'''
Created API Key SK0e6ddcee7a7ce03acd8627daf6e71c86

'''