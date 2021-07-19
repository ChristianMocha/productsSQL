# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14-alpine as build-step

RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY package.json /app

# Install all the dependencies
RUN npm install

COPY . /app

RUN npm run build --prod

# segundo paso

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/products /usr/share/nginx/html