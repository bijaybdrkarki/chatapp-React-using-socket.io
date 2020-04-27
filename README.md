# READY TO GRADE 

Please read all steps to run the app locally

## chatapp-React


step 1: download/clone the app


step 2: open terminal do  ```npm i``` (this will install all packages required for server)


step 3: cd chatapp and ```npm i``` (this will install all packages of client/react app)


step 4: reload the editor(or close the editor and open again) if you canot see node_modules folder


step 5: open two terminals (one for server and one for react app). In server terminal ```npm run dev``` whereas in react app termminal (if you are in root folder do cd chatapp) and ```npm start``` 

step 6: Open browser and type ```localhost:3000``` (to understand more open 3 different window and type same)

step 7: you will be prompted to user login just type any name in User id field (for now password field might be empty and all login criteria will be tested in next version). do same in all three terminal but remember to use different names


step 8: home page for all user looks same for now. 

  the home page has
  
  i)user image , to do list this list is hard coded for now,
  
  
  ii)live ticking clock, current date and day of week
  
  iii) weather forecast info for toronto(city -hardcoded now) with data coming from weatherAPI. click see more to see forecast        of 5 days


step 9: To check for chat, click to menu option on header and click chat so same for all three window.
      by doing that you will see all the online users on left side of window including yourself. 
      
      
step 10: To send messg you must click any one online user other than your self. and type the message you want to send in input field and must click send button (clicking enter will not send).

step 11: to see message side select the window of reviever and do console log you can see object of message being received with actual messg, sender name and reviever name. (check console for third one there is nothing ie. message was send only to specific user) displaying received message in browser message section is further enhancement

step 12: close browser window for any one of user, and see online users for other two. now you can see only two user. or add few more users you can see all of them online in eachothers profile. Also if you visit any other page(like go back to home page from chat page and come back to chat) you will still be online
