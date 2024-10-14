---
title: Automating Docker Image Builds with Bash Scripts
Description: Learn how to automate Docker image builds using simple Bash scripts for a streamlined and repeatable deployment process.
Published Date: "2024-10-14"
Author: Wajih Tarkhani
Read Time: "5 min read"
tags: ["Docker", "Automation", "Bash Scripts", "DevOps"]
---

Deploying and managing Docker images manually can be a repetitive process, especially when you're building and deploying multiple times. Automation through Bash scripts allows you to make Docker image building more efficient, reproducible, and error-free. In this blog post, I’ll walk you through a simple Bash script that automates the process of building Docker images, tagging them, and pushing them to a Docker registry.

### Why Automate Docker Builds?

Automating Docker image builds is essential for:

1. **Efficiency**: No need to manually type out Docker commands every time you update your application.
2. **Consistency**: The same build steps are followed every time, reducing human error.
3. **CI/CD Integration**: A script can easily be added to a continuous integration pipeline for automatic builds on code commits or releases.

### Prerequisites

Before you start automating Docker builds, make sure you have:

- Docker installed on your machine or server.
- A Dockerfile in your project directory.
- A basic understanding of Docker commands.

### The Bash Script

Let’s dive into a Bash script that automates the Docker image build process, tags it with the latest commit hash, and pushes it to a Docker registry.

#### Steps Covered in the Script:

1. **Build the Docker Image**: Builds the image from a Dockerfile.
2. **Tag the Image**: Tags the image with the latest Git commit hash or a version number.
3. **Push the Image**: Pushes the image to a Docker registry (like Docker Hub or a private registry).
4. **Cleanup**: Optionally removes dangling images to free up space.

Here’s the script:

```bash
#!/bin/bash

# Usage: ./build_and_push_docker.sh <image_name> <version>

# Input parameters
IMAGE_NAME=$1
VERSION=$2

# Check if image name is provided
if [ -z "$IMAGE_NAME" ]; then
    echo "Usage: $0 <image_name> <version>"
    exit 1
fi

# If no version is provided, use the latest Git commit hash
if [ -z "$VERSION" ]; then
    VERSION=$(git rev-parse --short HEAD)
    echo "No version provided, using latest Git commit hash: $VERSION"
fi

# Step 1: Build the Docker image
echo "Building Docker image: $IMAGE_NAME:$VERSION..."
docker build -t $IMAGE_NAME:$VERSION .

if [ $? -ne 0 ]; then
    echo "Docker build failed!"
    exit 1
fi

# Step 2: Tag the image with 'latest'
docker tag $IMAGE_NAME:$VERSION $IMAGE_NAME:latest

# Step 3: Push the images to Docker Hub (or your private registry)
echo "Pushing Docker image: $IMAGE_NAME:$VERSION..."
docker push $IMAGE_NAME:$VERSION

if [ $? -ne 0 ]; then
    echo "Docker push failed!"
    exit 1
fi

echo "Pushing Docker image: $IMAGE_NAME:latest..."
docker push $IMAGE_NAME:latest

if [ $? -ne 0 ]; then
    echo "Docker push failed!"
    exit 1
fi

# Step 4: Optional cleanup
echo "Cleaning up dangling images..."
docker image prune -f

echo "Docker image build and push complete."
```

#### How It Works:

- Input Parameters: The script expects two parameters: the image_name (the name of your Docker image) and an optional version. If no version is provided, it will use the latest Git commit hash as the version tag.
- Building the Docker Image: The docker build command creates a Docker image from the Dockerfile in the current directory.
- Tagging the Image: The script tags the image with the version number and also tags it as latest. This way, you can easily pull the latest version of your image without specifying the commit hash.
- Pushing the Image: The image is pushed to a Docker registry. If you’re using Docker Hub, ensure you’re logged in with docker login before running the script. If you’re using a private registry, replace the registry URL in the image name (e.g., your-registry.com/your-image).
- Cleanup: The script runs docker image prune -f to remove any dangling images left over from the build process, keeping your system clean.


#### Running the Script:

To use this script, save it as build_and_push_docker.sh in your project directory, give it executable permissions, and run it:
```bash
chmod +x build_and_push_docker.sh
./build_and_push_docker.sh my-app 1.0.0
```

If you don’t provide a version, the script will automatically use the latest Git commit hash:
```bash
./build_and_push_docker.sh my-app
```

### Integrating with CI/CD

This script can easily be integrated into a CI/CD pipeline. For example, in GitLab CI, you can add a job in your .gitlab-ci.yml file to build and push the Docker image automatically on every commit:

```yaml
stages:
   - build

build_docker_image:
   stage: build
   script:
      - ./build_and_push_docker.sh my-app
   only:
      - main

```
For other CI platforms like GitHub Actions, Jenkins, or CircleCI, similar configurations can be added.


### Conclusion

By automating the Docker image build process with Bash scripts, you can save time and ensure a consistent and repeatable build process. Whether you’re working on a single project or managing multiple Dockerized applications, this approach will help streamline your workflow.

Feel free to adapt this script for your own needs and projects. Happy coding!