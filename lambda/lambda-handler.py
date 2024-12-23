import json
import cowsay

def main(event, context):
  print("Event: " + json.dumps(event, indent=2))
  
  cowsay.cow('Hello Lambda')

  response = {
    'statusCode': 200,
    'body': json.dumps('Hello from Lambda!')
  }
  
  return response
