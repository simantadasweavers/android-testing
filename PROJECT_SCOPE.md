# Features:
1. user register, login , dashboard view
2. credit system 3$-5$/app. after admin approval testing will start. buy more credits.
3. user can see app status: 
    waiting for approval(If any issue mail/report), waiting for approval, In progress, Ready for production. Every status change mail trigger.
    app states: 'approval', 'progress', 'ready' 
4. profile update, contact form for with tester TL.

# Admin Features: 
1. Global access to super admin. 
2. register/login of members. 
3. Person Name - Project => assign memeber. 
4. track total app orders, revenue, progress report in mail/pdf. 


Note:developer need to share close testing url, if not present then video show how to enter 15 unique testing id from our dashboard. and then creating close testing url or client can share play console details additional instructions. 

# New feature to added
1. canditate can make free website to react native app and can download from their accounts. 
but when create app have 10 free apps create logic. more than 10/N app need to 1 dollar for 1 app.


===============================
## Documents Structure

```
Users
_id
first name
last name
email
password
pri_phone
sec_phone
role
active
credits
```

```
Apps
_id
name
test_url
app_file_url
app_icon
instructions
user_id => relate to user id
testers_id => related to tester object id
```

```
App Status
_id
status
```

```
Tickets
_id
name
images
```

```
Files
_id
file_name
date_time
user_id ==> link to either User's, Admins, testers object id.
```

```
Admins
_id
first name
last name
email
password
active
```

```
Testers
_id
first name
last name
email
password
active
```






