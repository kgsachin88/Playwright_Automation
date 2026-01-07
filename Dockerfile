# 1️ Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.57.0-jammy

# 2️ Set working directory inside container
WORKDIR /app

# 3️ Copy package files first (for caching)
COPY package.json package-lock.json ./

# 4️ Install dependencies
RUN npm ci

# 5️ Copy rest of the framework
COPY . .

# 6️ Default command to run tests
CMD ["npx", "playwright", "test"]
