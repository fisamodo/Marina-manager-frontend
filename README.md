# Marina-manager-frontend
Frontend for Marina manager app

How to start: 
- .env file is required to start
- Run "npm run start"

About the project:

This app is a basic marina management app which consists of 2 parts, employee and admin.

Employee type accounts are tied to a specific marina with "marinaId" foreign key. They can make "occupations" which are essentialy check-ins for a boat in that specific marina.
Each Marina can take 5 types of boats, and we can specify how much boats of each type we can take. Upon creating a new occupation, checks are done on the backend to unable to create 
more occupations in case we are hitting the limit. 

Admin part of the app allows us to perform admin rights. This is only available for admin users. Admins can promote "employee" users to "admin" role and they can also perform all other things, as admin 
is assigned his own marina by marinaId. Admins also have a possibility of creating other marinas but they cannot reassign them to that marina.

In the future, changing marinas per user should be a SuperAdmin duty, but that is to be developed. 

App also features Login/Register logic using Cookies. Tokens stored are jwt tokens which are made unique via jwt key.
Logins also expire after some time, so user is prompted to login again in case of expired token. 
