<h1 align="center"> Fumico </h1>

<h4 align="center"> An application with login who let you create, edit and delete reminders. </h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#user">User</a> •
  <a href="#reminders">Reminders</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* Receive data from the user to create, edit and delete a user or an reminder.

## How To Use

To clone and run this script, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Cloning and installing

```bash
# Clone this repository
$ git clone https://github.com/Lucas-Finatti/Fumico.git

# Go into the repository folder
$ cd Fumico

# Install dependencies
$ npm install

```

### Usage exemple


#### Below is an example of how to use the script.

In an bash or terminal, inside the project root directory runs:

```bash
npm run start:prod
```

The script will run the server, then you just need to create an user to have access to the reminders:

## User

Create User:
```
Request addres: http://localhost:3000/users/create/

Send the user in the body as json object:
```
![create user](https://user-images.githubusercontent.com/77365066/181069383-0a824ba0-2554-4722-afdb-33ca7c270909.png)

Get All Users:
```
Request Addres: http://localhost:3000/users/
```
![image](https://user-images.githubusercontent.com/77365066/181066069-6d11faff-fd36-4d4f-b28e-b164e9665f02.png)

Get An Users:
```
Request Addres: http://localhost:3000/users/<user_id>
```
![image](https://user-images.githubusercontent.com/77365066/181066564-ba4c8268-1acc-4931-a2ad-6fc4aa03f217.png)

Patch An Users:
Put just the field that you want to change.
```
Request Addres: http://localhost:3000/users/update/<user_id>
```

![image](https://user-images.githubusercontent.com/77365066/181067135-19bce8de-7d31-4d14-b22a-e3a3837163e8.png)

Delete An Users:
```
Request Addres: http://localhost:3000/users/delete/<user_id>
```
![image](https://user-images.githubusercontent.com/77365066/181067581-0ef450ac-c3b5-428c-974b-8d3649446fde.png)

## Reminders
```
To use the routes of Reminders first do your login.

Request addres: http://localhost:3000/auth/login
```
![image](https://user-images.githubusercontent.com/77365066/181070848-b72d5f0c-cb0e-4ad3-9d92-6f891e4b766a.png)

```

The login will give you an token, you have use this token to use teminders routes. 

put the Token in Barrer Token in every reminders request.
```

![image](https://user-images.githubusercontent.com/77365066/181071424-d408b5bf-0036-4ae0-9bf9-c1fd110f3af8.png)

Create Reminder:
```
Request addres: http://localhost:3000/reminders/create

Send the user in the body as json object:
```
![image](https://user-images.githubusercontent.com/77365066/181078750-d7b084da-4cdf-40a2-a442-0850ed10f0b6.png)

Get All Reminder:
```
Request addres: http://localhost:3000/reminders/
```
![image](https://user-images.githubusercontent.com/77365066/181079472-cd42e003-7187-443b-ad3d-ac2af966bff2.png)

Get An Reminder:
```
Request addres: http://localhost:3000/reminders/<reminder_id>
```
![image](https://user-images.githubusercontent.com/77365066/181079657-a7b69bba-3b3d-4006-a259-f3bd326546f9.png)

Patch An Reminder:
```
Request addres: http://localhost:3000/reminders/update/<reminder_id>
```
![image](https://user-images.githubusercontent.com/77365066/181079956-59b63b39-8401-4874-b769-40633a4b871a.png)

Delete An Reminder:
```
Request addres: http://localhost:3000/reminders/delete/<reminder_id>
```
![image](https://user-images.githubusercontent.com/77365066/181080167-4a8bdae5-57bd-49dd-9ae3-c86fc026c74d.png)


## Credits

This software uses the following open source packages:

- [Node](https://nodejs.org/en/)
- [Nest](https://nestjs.com)
- [Mongoose](https://mongoosejs.com)
