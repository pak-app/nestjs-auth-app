# 1st Stage: Build the app
FROM node:22 AS builder

WORKDIR /app
# Copy package and tsconfig files
COPY package*.json .
COPY tsconfig*.json .
# Install all packages
RUN npm install

COPY . .
# Build TS scripts
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --production

# 2nd Stage: Create minimal runtime image
FROM node:22 AS runner

WORKDIR /app

# Copy only what’s needed from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Run the compiled app
CMD ["npm", "run", "start:prod"]
