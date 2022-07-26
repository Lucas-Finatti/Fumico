<h1 align="center"> Fumico </h1>

<h4 align="center"> An application with login who let you create, edit and delete reminders. </h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#user">User</a>•
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

![image](https://user-images.githubusercontent.com/77365066/181065733-28a9a9c0-a306-4cfa-99a1-c0ba795d1976.png)

```
Get All Users:
```
Request Addres: http://localhost:3000/users/

![image](https://user-images.githubusercontent.com/77365066/181066069-6d11faff-fd36-4d4f-b28e-b164e9665f02.png)
```
Get An Users:
```
Request Addres: http://localhost:3000/users/<user_id>

![image](https://user-images.githubusercontent.com/77365066/181066564-ba4c8268-1acc-4931-a2ad-6fc4aa03f217.png)
```
Patch An Users:
Put just the field that you want to change.
```
Request Addres: http://localhost:3000/users/update/<user_id>

![image](https://user-images.githubusercontent.com/77365066/181067135-19bce8de-7d31-4d14-b22a-e3a3837163e8.png)
```
Delete An Users:
```
Request Addres: http://localhost:3000/users/delete/<user_id>

![image](https://user-images.githubusercontent.com/77365066/181067581-0ef450ac-c3b5-428c-974b-8d3649446fde.png)
```

## Credits

This software uses the following open source packages:

- [express](https://expressjs.com/pt-br/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page/pt-br)
