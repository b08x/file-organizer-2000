# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /web

# Install pnpm
RUN npm install -g pnpm

# Set up pnpm global bin directory
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

# Copy package.json to the working directory
COPY web/package.json ./

# Install the application dependencies and update lockfile
RUN pnpm install
RUN pnpm install --lockfile-only

# Copy the rest of the application code to the working directory
COPY web/ .

# Copy the .env file
COPY .env .

# Build the Next.js application
RUN pnpm run build

# Expose the port on which the application will run
EXPOSE 3000

# Set the command to run the application
CMD ["pnpm", "start"]
