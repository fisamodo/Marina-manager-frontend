# Marina-manager-frontend
Frontend for Marina manager app

How to start: 
- .env file is required to start
- Run "npm i"
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

Used tools and what for:

Emotion css - Used for basic and programmable css.

Axios - Used for creating and axiosClient and it's interceptor. Axios client allows us to have a stable api communication, and interceptor is used to handle 401 and 500 errors (in case of expired token or "Something went wrong" cases. Check "axiosBackendClient.ts" file for more

Bootstrap - Only used for responsive navbar

RC-Table - Used for table views. It's very lightweight so that's why it was my solution. Tables are only used to display data and make api calls, so nothing heavier is needed. Some tables have rows with buttons which perform api calls based on the specific row (Check AdminMarinaPage.tsx") and column schemas are stored in "table-schema.ts" file

React-hook-form and Yup - Used to make forms in the app. React hook form gives us access to useForm hook which allows us to manage the form, and Yup is used to write basic validation. 

React-router and React-router-dom - Used to handle navigation as well as route definitions. Check "AppNavigator.tsx" for public and private route definitions. Check "AdminRoutes.tsx" and "ProtectedRoutes.tsx" for role based route access.

Recoil/Recoil persist - Used to handle global state (Storing user data all trought the app).

Typescript - Added type annotations on top of React app to ensure ease in development and safety.
