#!/bin/bash

# Start frontend and backend servers concurrently

# Navigate to the frontend directory and start the dev server
echo "Starting frontend..."
cd frontend
exec npm run dev &

# Navigate to the backend directory and start the dev server
echo "Starting backend..."
cd ../backend
exec npm run dev

# Wait for both processes to complete (they'll keep running)
wait

echo "Both frontend and backend servers are running. (DEV)"