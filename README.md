# Pet project: ReactSocialNetwork

[https://dartmax.github.io/TwitterMaterialUI/](https://dartmax.github.io/TwitterMaterialUI/)

### `The main task of the project:`
Practice of using React, Redux and related npm packages, create social network with simplification of functionality
### `Description of the project:`
The social network TwitterMaterialUI is written on the basis of [Create React App](https://github.com/facebook/create-react-app). The entire application is written using a third-party API, including the authorization module. Event handling methods and work with asynchronous requests trough Redux-Saga to the server through axios were actively used. Gradually typing code using TypeScript

##### Functionality:
* login:
    * Authorization through and logout through a third-party API <br/>
* profile:
    * Ability to update photo and status for an authorized user
    * Ability to add or remove a post from the wall. The wall is common for all users due to API restrictions
* messages:
    * Ability to send a chat message to the default user Ability to send a chat message to the default user
    * Message history is generated after every rerender
* users:
    * Preloader for page load
    * The ability to go to the user's page, look at his profile photo, name and status

### `Technologies:`
- Main:
    - React / Redux
    - JavaScript
    - TypeScript
    - Html 5 + CSS 3 (flex layout) + Styled-components
- Other:
    - Redux-Saga
    - Reselect
    - React hook's
    - React-redux
    - React-router-dom
    - Redux-form.
    - React HOC/HOF
    - Jest
    - Axios
    - EsLint
    - Git
    - npm