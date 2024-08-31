FROM node:18-alpine


WORKDIR /app


COPY package.json  ./


RUN npm install

# Install serve globally
RUN npm install -g serve


COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Start the application using serve
CMD ["serve", "-s", "dist", "-l", "80"]