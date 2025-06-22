FROM mcr.microsoft.com/playwright:v1.51.1-jammy

WORKDIR /app

# Copy only lock files first for caching
COPY package.json package-lock.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy the rest of the files
COPY . .

# Only install default browsers (Chromium, Firefox, WebKit)
RUN npx playwright install

# Set explicit headless mode via environment variable
ENV HEADLESS=true

# Run tests with retries and HTML report
CMD ["npx", "playwright", "test", "--retries=1", "--reporter=html"]