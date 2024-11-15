# Step 1: Build stage
FROM node:20 AS build

WORKDIR /app

# Step 2: Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Step 3: Install dependencies
RUN npm install

# Step 4: Copy the rest of the app's source code
COPY . .

# Step 5: Build the React app
RUN npm run build

# Step 6: Production stage
FROM nginx:alpine

# Step 7: Copy the build output from the previous stage to nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose port 80 for the app
EXPOSE 80

# Step 9: Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

