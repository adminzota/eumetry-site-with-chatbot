# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []


from typing import Any, Text, Dict, List
from datetime import datetime
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import datetime as dt
from rasa_sdk.forms import FormAction


class get_time_response(Action):
    def name(self) -> Text:
        return "action_get_time_response"

    def run(self, dispatcher, tracker, domain):
        # type: (CollectingDispatcher, Tracker, Dict[Text, Any]) -> List[Dict[Text, Any]]

        hour = datetime.now().hour
        date = dt.datetime.now()
        date = date.strftime('%H:%M') 

        
        if 5 <= hour <= 11:
            greeting="morning"
        elif 12 <= hour <= 17:
            greeting ="afternoon"
        elif 18 <= hour <= 22:
            greeting="evening"
        else:
            greeting="night"
        

        
        
        message = "Hi there! it's " + date +"Good " + greeting

        dispatcher.utter_message(message)
        return []


  
