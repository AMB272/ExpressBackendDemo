# ExpressBackendDemo
A plain backend local server to learn some express.js commands!

Using route parameters and the get function from 'express.js' to make a backend application - very barebones and plain!

to use:
1) Install express using NPM, also install node on your PC
2) open node and type 'node app.js' to run the server. make sure you're running it from the path where it is located!
3) You can use the following paths with this server:
  localhost:3000/
  
  localhost:3000/speak/[animal name]
  -->the animal names are: pig, cow, dog 
  (maintain case while entering, haven't added the minor fix, coming soon in the next commit!)  
  
  localhost:3000/repeat/[any word]/[no. of times you wish for it to repeat]
