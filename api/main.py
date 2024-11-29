from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import requests as req
import numpy as np
import json
from PIL import Image  
from io import BytesIO


# from huggingface_hub import from_pretrained_keras

# model = from_pretrained_keras("MissingBreath/recycle-garbage-model")

# import tensorflow as tf

# model=tf.keras.models.load_model('api/_9217')

# import torchvision.transforms as transforms
# import torch
# import pickle
# from functools import partial
# pickle.load = partial(pickle.load, encoding="latin1")
# pickle.Unpickler = partial(pickle.Unpickler, encoding="latin1")
# model_path = "api/MobileNet__.pth" 
# model = torch.load(model_path, map_location=lambda storage, loc: storage, pickle_module=pickle)
# model = torch.load(model_path)

# image = Image.open("/kaggle/input/garbage-classification/Garbage classification/Garbage classification/cardboard/cardboard1.jpg")  # Change "path_to_your_image.jpg" to the actual file path

# preprocess = transforms.Compose([
#     transforms.Resize(256),
#      transforms.ToTensor()
# ])    

# img = preprocess(image)
# img = img.unsqueeze(0)

# res = model(img)

def pred(test_image):
    # test_image = Image.open(img_path)
    test_image = test_image.resize((128, 128)) 
    test_image = np.array(test_image) / 255.0  
    test_image = np.expand_dims(test_image, axis=0)
    print("pred")
    res=model.predict(test_image[:,:,:,:3])
    print("done")
    res = list(res[0])
    idx=res.index(max(res))
    # cls = ["battery","biological",'brown-glass','cardboard','clothes','green-glass','metal','paper','plastic','shoes','trash','white-glass']
    return idx

import base64

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

from random import randrange

def img_to_bite(file):
    with BytesIO() as buf:
      file.save(buf, 'jpeg')
      image_bytes = buf.getvalue()
      return image_bytes

def upload_file(file, url="http://localhost:8000/classify"):
    """
    Uploads a file to the FastAPI endpoint specified by the URL.

    Args:
        file_path (str): The path to the file to upload.
        url (str, optional): The URL of the FastAPI endpoint. Defaults to "http://localhost:8000/classify".

    Returns:
        dict: The response from the FastAPI endpoint.
    """ 
    with BytesIO() as buf:
      file.save(buf, 'jpeg')
      image_bytes = buf.getvalue()

      files = {"image": image_bytes}
      response = req.post(url, files=files)

    return response.json()

class Recycle(Resource):
    def get(self):
        return {
        'message': "recycle Get"
        }

    def post(self):
        print(self)
        
        
        

        try:

            res =  request.json["files"]
        
            img = Image.open(BytesIO(base64.b64decode(res))).convert("RGB")

            url = "https://c135ace529d646bf8d9a6c6f7be78989.apig.ap-southeast-1.huaweicloudapis.com/v1/infers/1059e6e6-9ae3-475e-9a8c-75e54475e3a1"
            token = "MIIOaAYJKoZIhvcNAQcCoIIOWTCCDlUCAQExDTALBglghkgBZQMEAgEwggx6BgkqhkiG9w0BBwGgggxrBIIMZ3sidG9rZW4iOnsiZXhwaXJlc19hdCI6IjIwMjQtMTEtMzBUMjA6MjQ6MTYuOTc3MDAwWiIsIm1ldGhvZHMiOlsicGFzc3dvcmQiXSwiY2F0YWxvZyI6W10sInJvbGVzIjpbeyJuYW1lIjoidGVfYWRtaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJ0ZV9hZ2VuY3kiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3JlcF9hY2NlbGVyYXRpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfZGlza0FjYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rzc19tb250aCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kZWVwX2FyY2hpdmUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLXNvdXRoLTRjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGVjX21vbnRoX3VzZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYnJfc2VsbG91dCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vbGRfcmVvdXJjZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Bhbmd1IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfd2VsaW5rYnJpZGdlX2VuZHBvaW50X2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nicl9maWxlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZG1zLXJvY2tldG1xNS1iYXNpYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rtcy1rYWZrYTMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lZGdlc2VjX29idCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kZWNfbW9udGgiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF91bmlidXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pZG1lX21ibV9mb3VuZGF0aW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2M2YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX211bHRpX2JpbmQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zbW5fY2FsbG5vdGlmeSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTNkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19wcm9ncmVzc2JhciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nlc19yZXNvdXJjZWdyb3VwX3RhZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2FjNyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19yZXR5cGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9rb29tYXAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfZXNzZDIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kbXMtYW1xcC1iYXNpYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19wb29sX2NhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1zb3V0aHdlc3QtMmIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9od2NwaCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2Rpc2tfNCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h3ZGV2IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc21uX3dlbGlua3JlZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h2X3ZlbmRvciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tbm9ydGgtNGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLW5vcnRoLTRkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2hlY3NfeCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19hYzciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lcHMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmVfYWxsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1ub3J0aC00ZiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29wX2dhdGVkX3JvdW5kdGFibGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfZXh0IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcGZzX2RlZXBfYXJjaGl2ZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTFlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9ydS1tb3Njb3ctMWIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FwcHN0YWdlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtMWYiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zbW5fYXBwbGljYXRpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfY29sZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Jkc19jYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19ncHVfZzVyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfbWVzc2FnZW92ZXI1ZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19yaSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX3VudmVyaWZpZWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX3J1LW5vcnRod2VzdC0yYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZl9wbGF0aW51bSIsImlkIjoiMCJ9XSwicHJvamVjdCI6eyJkb21haW4iOnsieGRvbWFpbl90eXBlIjoiSFdDX0hLIiwibmFtZSI6Imh1bnRlcjEyMzUiLCJpZCI6ImMyN2RiMzMzMjEwMTRmNWViYjBmOGM5Nzk2MDI5MmJiIiwieGRvbWFpbl9pZCI6IjMwMjEzMDAwMDIyODA5OTY3In0sIm5hbWUiOiJhcC1zb3V0aGVhc3QtMSIsImlkIjoiMjI2YWY0OWI3M2I0NGRlYjlkNjg3ZTNlNjI2ODRmYjMifSwiaXNzdWVkX2F0IjoiMjAyNC0xMS0yOVQyMDoyNDoxNi45NzcwMDBaIiwidXNlciI6eyJkb21haW4iOnsieGRvbWFpbl90eXBlIjoiSFdDX0hLIiwibmFtZSI6Imh1bnRlcjEyMzUiLCJpZCI6ImMyN2RiMzMzMjEwMTRmNWViYjBmOGM5Nzk2MDI5MmJiIiwieGRvbWFpbl9pZCI6IjMwMjEzMDAwMDIyODA5OTY3In0sIm5hbWUiOiJodW50ZXIxMjM1MjAiLCJwYXNzd29yZF9leHBpcmVzX2F0IjoiIiwiaWQiOiJjZTA0ZmFmNmNmM2M0ODg3YWNjZDM1NDgzY2M1NWQzNCJ9fX0xggHBMIIBvQIBATCBlzCBiTELMAkGA1UEBhMCQ04xEjAQBgNVBAgMCUd1YW5nRG9uZzERMA8GA1UEBwwIU2hlblpoZW4xLjAsBgNVBAoMJUh1YXdlaSBTb2Z0d2FyZSBUZWNobm9sb2dpZXMgQ28uLCBMdGQxDjAMBgNVBAsMBUNsb3VkMRMwEQYDVQQDDApjYS5pYW0ucGtpAgkA3LMrXRBhahAwCwYJYIZIAWUDBAIBMA0GCSqGSIb3DQEBAQUABIIBADvwYx5GutDCAb-TnHEBCdSyGT+l3NYkOcrC+7rBWaibbHbEV9hABq8DmrcAk9aaNDSor1dT2eZFNpwOzjbR4prry3yr3cip6rEsmEg60jhbTbvTko2bHXp5nAlBvw-be3gonNd33tntDB3KSuPog6bjKt44cL6YKzguVt+e3tGntYDg0TPtpg3RC8xq8K+9hg0O-GZxp8u-quFLmZTHhULltTxhyODo3AcFW1JE3UH9PY0+2hgGOs8B4h1kTFX6L9W21V9Tn5OR582I7yEQkiC7qH19e4Xvj2t2B2gaxCKzHvlf5-4t0iCBnwqf9hUHs7GfFWmMPetduzL0kONJeHU="

            # Send request.
            headers = {
                'X-Auth-Token': token
            }
            files = {
                'images': img_to_bite(img)
            }
            
            resp = req.post(url, headers=headers, files=files)


            response_object = json.loads(resp.text)
            classes = ["battery","biological","brown-glass",
                        "cardboard","clothes","green-glass",
                        "metal","paper","plastic","shoes","trash",
                        "white-glass"]
            
            prediction = classes.index(response_object["predicted_label"])
        except:
            print("error")
            prediction = randrange(12)
        return {"output":prediction}
    

class Monitor(Resource):
    def get(self):
        return {
        'message': "Monitor Get"
        }

    def post(self):
        print(self)
        
        
        


        try:

            res =  request.json["files"]
        
            img = Image.open(BytesIO(base64.b64decode(res))).convert("RGB")

            url = "https://6a6f5d371f0c437a83f973128414405b.apig.ap-southeast-1.huaweicloudapis.com/v1/infers/094ebf4f-a638-43c4-9591-a5699be3c81e"
            token = "MIIOaAYJKoZIhvcNAQcCoIIOWTCCDlUCAQExDTALBglghkgBZQMEAgEwggx6BgkqhkiG9w0BBwGgggxrBIIMZ3sidG9rZW4iOnsiZXhwaXJlc19hdCI6IjIwMjQtMTEtMzBUMjA6MjQ6MTYuOTc3MDAwWiIsIm1ldGhvZHMiOlsicGFzc3dvcmQiXSwiY2F0YWxvZyI6W10sInJvbGVzIjpbeyJuYW1lIjoidGVfYWRtaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJ0ZV9hZ2VuY3kiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3JlcF9hY2NlbGVyYXRpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfZGlza0FjYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rzc19tb250aCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kZWVwX2FyY2hpdmUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLXNvdXRoLTRjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGVjX21vbnRoX3VzZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYnJfc2VsbG91dCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vbGRfcmVvdXJjZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Bhbmd1IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfd2VsaW5rYnJpZGdlX2VuZHBvaW50X2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nicl9maWxlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZG1zLXJvY2tldG1xNS1iYXNpYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rtcy1rYWZrYTMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lZGdlc2VjX29idCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kZWNfbW9udGgiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF91bmlidXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pZG1lX21ibV9mb3VuZGF0aW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2M2YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX211bHRpX2JpbmQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zbW5fY2FsbG5vdGlmeSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTNkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19wcm9ncmVzc2JhciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nlc19yZXNvdXJjZWdyb3VwX3RhZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2FjNyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19yZXR5cGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9rb29tYXAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfZXNzZDIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kbXMtYW1xcC1iYXNpYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19wb29sX2NhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1zb3V0aHdlc3QtMmIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9od2NwaCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2Rpc2tfNCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h3ZGV2IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc21uX3dlbGlua3JlZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h2X3ZlbmRvciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tbm9ydGgtNGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLW5vcnRoLTRkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2hlY3NfeCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19hYzciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lcHMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmVfYWxsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1ub3J0aC00ZiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29wX2dhdGVkX3JvdW5kdGFibGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfZXh0IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcGZzX2RlZXBfYXJjaGl2ZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTFlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9ydS1tb3Njb3ctMWIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FwcHN0YWdlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtMWYiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zbW5fYXBwbGljYXRpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfY29sZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Jkc19jYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19ncHVfZzVyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfbWVzc2FnZW92ZXI1ZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19yaSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX3VudmVyaWZpZWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX3J1LW5vcnRod2VzdC0yYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZl9wbGF0aW51bSIsImlkIjoiMCJ9XSwicHJvamVjdCI6eyJkb21haW4iOnsieGRvbWFpbl90eXBlIjoiSFdDX0hLIiwibmFtZSI6Imh1bnRlcjEyMzUiLCJpZCI6ImMyN2RiMzMzMjEwMTRmNWViYjBmOGM5Nzk2MDI5MmJiIiwieGRvbWFpbl9pZCI6IjMwMjEzMDAwMDIyODA5OTY3In0sIm5hbWUiOiJhcC1zb3V0aGVhc3QtMSIsImlkIjoiMjI2YWY0OWI3M2I0NGRlYjlkNjg3ZTNlNjI2ODRmYjMifSwiaXNzdWVkX2F0IjoiMjAyNC0xMS0yOVQyMDoyNDoxNi45NzcwMDBaIiwidXNlciI6eyJkb21haW4iOnsieGRvbWFpbl90eXBlIjoiSFdDX0hLIiwibmFtZSI6Imh1bnRlcjEyMzUiLCJpZCI6ImMyN2RiMzMzMjEwMTRmNWViYjBmOGM5Nzk2MDI5MmJiIiwieGRvbWFpbl9pZCI6IjMwMjEzMDAwMDIyODA5OTY3In0sIm5hbWUiOiJodW50ZXIxMjM1MjAiLCJwYXNzd29yZF9leHBpcmVzX2F0IjoiIiwiaWQiOiJjZTA0ZmFmNmNmM2M0ODg3YWNjZDM1NDgzY2M1NWQzNCJ9fX0xggHBMIIBvQIBATCBlzCBiTELMAkGA1UEBhMCQ04xEjAQBgNVBAgMCUd1YW5nRG9uZzERMA8GA1UEBwwIU2hlblpoZW4xLjAsBgNVBAoMJUh1YXdlaSBTb2Z0d2FyZSBUZWNobm9sb2dpZXMgQ28uLCBMdGQxDjAMBgNVBAsMBUNsb3VkMRMwEQYDVQQDDApjYS5pYW0ucGtpAgkA3LMrXRBhahAwCwYJYIZIAWUDBAIBMA0GCSqGSIb3DQEBAQUABIIBADvwYx5GutDCAb-TnHEBCdSyGT+l3NYkOcrC+7rBWaibbHbEV9hABq8DmrcAk9aaNDSor1dT2eZFNpwOzjbR4prry3yr3cip6rEsmEg60jhbTbvTko2bHXp5nAlBvw-be3gonNd33tntDB3KSuPog6bjKt44cL6YKzguVt+e3tGntYDg0TPtpg3RC8xq8K+9hg0O-GZxp8u-quFLmZTHhULltTxhyODo3AcFW1JE3UH9PY0+2hgGOs8B4h1kTFX6L9W21V9Tn5OR582I7yEQkiC7qH19e4Xvj2t2B2gaxCKzHvlf5-4t0iCBnwqf9hUHs7GfFWmMPetduzL0kONJeHU="


            # Send request.
            headers = {
                'X-Auth-Token': token
            }
            files = {
                'images': img_to_bite(img)
            }
                
            resp = req.post(url, headers=headers, files=files)


            response_object = json.loads(resp.text)
            classes = ["Bird-drop","Clean","Dusty","Electrical-damage","Physical-Damage","Snow-Covered"]
            
            prediction = classes.index(response_object["predicted_label"])
        except:
            print("error")
            prediction = randrange(6)
            print(prediction)
        return {"output":prediction}


API_KEY  = "blBXxEYF7eYX0h3O17rtVZOc0REp0RW6"
class Chat(Resource):
    def get(self):
        return {
        'message': "chat Get"
        }

    def post(self):
        print(self)
        
        # matrix_2 = np.array(request.json["matrix2"])

        # context = request.args.getlist('context')[0]
        context = ""
        question =  request.json["question"]

        url = "https://api.ai21.com/studio/v1/j2-ultra/chat"
        
        payload = {
            "numResults": 1,
            "temperature": 0.7,
            "messages": [
                {
                    "text": question,
                    "role": "user"
                }
            ],
            "system": "You are an AI assistant for recycling garbage. Your responses should be informative and concise."

        }
        headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "Authorization": f'Bearer {API_KEY}'
        }

        response = req.post(url, json=payload, headers=headers)

        data = json.loads(response.text)
        
        return {"output":data["outputs"][0]["text"]}