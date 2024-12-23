import json

def main(event, context):
  print("Received event: " + json.dumps(event, indent=2))
  
  response = {
    'statusCode': 200,
    'body': json.dumps('Hello from Lambda!')
  }
  
  return response