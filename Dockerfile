# Use the official Node.js image as the base image
FROM node:17
# Set the working directory in the container
WORKDIR /well-fitness
# Copy the application files into the working directory
COPY . /well-fitness
# Install the application dependencies
RUN npm install
# Expose port 8000
EXPOSE 8000
# Define the entry point for the container
CMD ["npm", "start"]
