#!/bin/bash

echo -e 'Node.js-Auth-Sessions'

# cd backend> /dev/null 2>&1
# npm start
# echo -e "$BLUE All dependencies installed. $N \n$GREEN Server starting..."
# cd .. && cd client > /dev/null 2>&1
# cd ..
# echo -e "$BLUE All dependencies installed. \n$GREEN Client starting..."
# npm start

echo -e "$BLUE All dependencies installed. $N \n$GREEN Server starting..."
echo -e "$BLUE All dependencies installed. \n$GREEN Client starting..."
start npm start --prefix backend && start npm run dev --prefix client

echo -e "$GREEN Client is running on http://localhost:3000/"