#!/bin/bash

# Function to display the menu
show_menu() {
  echo "Please select an option:"
  echo "1) Run backend services (products)"
  echo "2) Run client app (Next.js)"
  echo "3) Run dashboard app"
  echo "4) Run all apps (backend, client, and dashboard)"
  echo "5) Stop all running Docker containers"
  echo "6) Exit"
  echo "----------------------------------------"
}

# Function to run backend services
run_backend() {
  echo "Starting backend services..."
  yarn workspace products start:dev
  wait
}

# Function to run client app
run_client() {
  echo "Starting client app..."
  yarn workspace client-app dev
}

# Function to run dashboard app
run_dashboard() {
  echo "Starting dashboard app..."
  yarn workspace dashboard-app dev
}

# Function to run all apps
run_all() {
  echo "Starting all apps..."
  yarn run concurrently "yarn workspace products start:dev" \
                        "yarn workspace customers start:dev" \
                        "yarn workspace dashboard-app dev"
}

# Function to stop all Docker containers
stop_all() {
  echo "Stopping all Docker containers..."
  docker-compose -f ./apps/backend/docker-compose.dev.yml down
}

# Main loop to display the menu and process user choice
while true; do
  show_menu
  read -p "Enter your choice [1-6]: " choice

  case $choice in
    1)
      run_backend
      ;;
    2)
      run_client
      ;;
    3)
      run_dashboard
      ;;
    4)
      run_all
      ;;
    5)
      stop_all
      ;;
    6)
      echo "Exiting..."
      exit 0
      ;;
    *)
      echo "Invalid option. Please select a number between 1 and 6."
      ;;
  esac

  echo "---------------------------------------"
done