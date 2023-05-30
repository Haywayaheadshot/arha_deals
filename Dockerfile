FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project files
COPY . .

# Set the development command
CMD npm run dev
