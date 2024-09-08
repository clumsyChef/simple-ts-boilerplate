#!/bin/bash

# Navigate to the frontend directory and install dependencies

printf "\n\t---------- INSTALLING FRONTEND DEPENDENCIES ----------\n\n"
cd frontend
npm install

# Navigate back to the root directory
cd ..

# Navigate to the backend directory and install dependencies
printf "\n\t---------- INSTALLING BACKEND DEPENDENCIES ----------\n\n"
cd backend
npm install

# Return to the root directory
cd ..

printf "\n\t------- ALL DEPENDENCIES SUCCESSFULLY INSTALLED -------\n\n"
