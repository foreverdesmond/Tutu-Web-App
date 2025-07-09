#!/bin/bash

# Docker build script for Tutu Web App
# Usage: ./docker-build.sh [tag]

# Set default tag if not provided
TAG=${1:-latest}
IMAGE_NAME="tutu-web-app"

echo "🐻 Building Tutu Web App Docker Image..."
echo "Image: $IMAGE_NAME:$TAG"
echo "=========================================="

# Build the Docker image
docker build -t $IMAGE_NAME:$TAG .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "=========================================="
    echo "✅ Build successful!"
    echo "Image: $IMAGE_NAME:$TAG"
    echo ""
    echo "To run the container:"
    echo "docker run -p 80:3000 $IMAGE_NAME:$TAG"
    echo ""
    echo "Or use docker-compose:"
    echo "docker-compose up"
else
    echo "❌ Build failed!"
    exit 1
fi 