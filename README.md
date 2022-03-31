

![alt text](https://i.imgur.com/lzVI3d8.png)

# General Assembly: Software Engineering Immersive

## Name your cocktail

https://cocktail-lovers-unite.netlify.app/ 

### Overview

A 48-hour pair programming challenge using React, JavaScript, Express with Node.js using a third-party API, where we built an app to create a cocktail menu based on the initials in your name.

### Project members 

Essi Karjalainen - https://github.com/EssiKarj 

### Site screenshots 

#### Home page:

![alt text](https://i.imgur.com/HAs97EY.jpg)

#### Result page after submitting Marilyn:

![alt text](https://i.imgur.com/DLdPJCD.jpg)

### Technologies used

- React
- JavaScript 
- HTML
- SASS
- React Bootstrap
- Git and GitHub
- Insomnia 
- TheCocktailDB API:
   - Lists all cocktails by first letter 
   - https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a 

### Approach taken 

#### Research and planning 

We initially spent time researching third party API’s that didn’t require tokens or authentication for use. 
Once we found The Cocktail API, Essi came up with the unique idea to generate a result of cocktails based on the initials in one’s name. Since we were short for time, we formulated a brief plan with our MVP, designed a basic wireframe for our application, created a to-do list in google docs and worked together on zoom. The endpoints and structure of the API were viewed using insomnia, so we were aware of the data type we were dealing with when accessing the information from the API.

#### Wireframes

![alt text](https://i.imgur.com/Bhh6uv9.jpg)

#### Pair coding 

We decided to code together, with one person screen sharing.

#### Routes and Navbar

The routes were set up in the App.js file and the navbar was created using react bootstrap.

#### Home page

A key component in the homepage was the functionality around the search result. useState was used to set the result of the search bar input to a variable named inputs. Upon submission of the form, the value of the final input originally denoted as an empty string in App.js was set to the value of the inputs. A ternary operator was used to ensure the user did not enter any numbers. 

#### Result page 

To split the final input into an array of substrings, the split method was used. This was then iterated using a map which invoked the getCocktails function and returned a letter to the axios request. To ensure the result was case sensitive, the method toLowerCase was used in the axios request.

![alt text](https://i.imgur.com/Ggo6R3E.jpg)

The getCocktails function returned an object with the cocktails name and image using a random generator to generate the same information if the user had letters in their name that appeared more than once. 

### Challenges 

The main challenge was setting the cocktails state to the correct data type. Initially, the return from the getCocktails function created an object promise, since we were calling the promise value before it was resolved. With the help of our teaching assistants, we were able to resolve this using the Promise method to check that the promise had been fulfilled before mapping through the result array and setting the value of the cocktail state. 

![alt text](https://i.imgur.com/DHquqTW.jpg)

### Bugs 

- Occasionally the error message ‘failed to load’ on the result page will appear when the axios request is successful 

### Wins 

- I really loved the idea proposed by Essi. After a challenging couple of hours trying to resolve the asynchronous issue, I was glad to see the functionality of the result page in fruition 

### Future improvements 

- Responsive design 
- The ability to the share the result with friends to make the app more social 
- A single page for each cocktail which shows the ingredients and instructions on how to make the cocktail
- Error handling to prevent the submission of any special characters in the search bar 

### Key learnings 

This was a good opportunity for me to cement my knowledge on using react hooks such as useState and useEffect and understanding their dependencies. I was able to test my understanding of breaking down the file into different components and passing information down as props. I was able to solidify my knowledge of these concepts on a smaller scale which gave me a lot more confidence going into the next module in the course.

### Contact 

- Linkedin - https://www.linkedin.com/in/marilyn-poku
- Email - marilynpoku@hotmail.com 
