# Cereal-Killahs-FrontEnd

Hi, welcome to our Cereal Killahs app where we showcase cereals behind bars 🙃

Users can enter the site here _https://cereal-killahs.netlify.app/_ 

&nbsp;&nbsp;&nbsp;Or you can follow these steps to run the codebase on your local server
1. fork & clone this repository
2. `npm i` or `npm install` to update and download latest dependencies
3. users should have or create a `.env` file and set these variables
   
   >VITE_PORT=https://serial-killa-foreal.onrender.com
   >
   >VITE_APP_URL=http://localhost:[your port that the backend will run on] -
   >
   >You can see instructions for the backend here _https://github.com/anickacodes/Cereal-Killahs-BackEnd_
   >
4. `npm run dev` to start up the server. Make sure the API variable in `CerealDetails.jsx` `Cereals.jsx` `CerealEditForm.jsx` `CerealNewForm.jsx` match the correct env. 

Once on the site, users can click `'-CEREALS-'` to see a list of all cereals or go here => _https://cereal-killahs.netlify.app/cereals_

Users can click a cereal image or title to navigate to the individual cereal's page where they will see the following information ::: 
`name and whether it is a favorite⭐️: 
brand: 
type: 
price: 
rating`

Users can click `'ADD NEW CEREAL'` and fill in all fields to add their own cereal killah to the database
Users can click `'Edit'` on an individual cereal's page and update any field
Users can click `'delete'` on an individual cereal's page and once they click `'ok'` on the pop up, the cereal will be deleted

