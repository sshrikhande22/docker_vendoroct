FROM node:lts-alpine AS BUILD
WORKDIR /app

# 1. Copy and install dependencies first for layer caching
COPY package*.json ./
RUN npm install --silent

# 2. Copy all application source code
COPY . .

# 3. Build the Angular application for production
# This uses the correct ng build command structure to create the 'dist' folder.
RUN npm run build -- --configuration=production --base-href=/

# --- Stage 2: Production Stage (Uses a tiny Nginx image to serve static files) ---
# --- Stage 2: Production Stage ---
FROM nginx:alpine

# 1. Copy the custom Nginx configuration file
# Make sure your custom file is named 'nginx.conf' and is in the project root
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2. Copy the built Angular files (Use the correct path you found earlier)
COPY --from=BUILD /app/dist/<YOUR_CORRECT_PATH> /usr/share/nginx/html 

# Nginx runs on port 80 by default
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
