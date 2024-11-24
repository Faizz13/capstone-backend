# Gunakan image Node.js
FROM node:18

# Set working directory
WORKDIR /src

# Salin package.json dan install dependencies
COPY backend/package.json ./
RUN npm install

# Salin seluruh file ke dalam container
COPY . .

# Expose port yang digunakan oleh aplikasi
# EXPOSE 8080

# Jalankan aplikasi
CMD ["npm", "start"]
