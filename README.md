# Dual-Token Authentication (DTA)

## 1. Live demo service deployed in Heroku 
[Demo server in https mode](https://dtae.herokuapp.com/ "https")  
[Demo server in http mode](http://dtae.herokuapp.com/ "http")  

## 2. What is dual-token authentication? 

It is a new token authentication technology that can be used in web services to improve security and efficiency of web services.

OAuth2.0 (and JWT) is the standard token authentication technology that is widely used in modern web services. OAuth 2.0 bearer token is widely used for stateless authentication in web environment, but it is vulnerable to eavesdropping attack. Thus, it should be used only in secure communication environment like https that it cannot provide stateless authentication. OAuth 2.0 MAC token is designed to provide randomized authentication using message authentication code that it can be used in non-secure communication environment, but it cannot provide stateless authentication since server has to keep the track of all mac keys for every client.

Dual-token authentication is newly developed token authentication technology that uses dual-token instead of single token. Server issues dual-token (public token and secret token) to logged in client (web browser). Then client can prove its authenticity instantly in time-dependent one-time way using the dual-token, and the server can verify it stateless way without managing any user dependent information.

Dual-token authentication is very efficient in the point of web server. Since time-dependent one-time authentication information cannot be reused by eavesdropping attacker, whole web service can be served in non-secure communication channel, which will save lots of computing. It is considered as an ultimate token authentication technology that makes real stateless web service possible.

## 3. Cloning and Install  

### Backend server (in project root folder)

Installation
> npm install 

To run in localhost 
> node app.js 

### Frontend angular live server (in angular-src folder) 

Installation 
> npm install 

Change API Connection mode 
prepEndpoint(ep) function in src/app/services/auth.service.ts should be modified to localhost mode 

To run in localhost 
> ng serve -o 

