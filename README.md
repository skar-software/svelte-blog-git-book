# Svelte Blog and Gitbook

Use the project to deploy a blog or git book like documentation component in your website.



## Running the Server in Local using Docker Images

Pull docker image from Docker Hub
```
docker pull anonranger/svelte-blogger
```

Start the docker server at [localhost:3000](http://localhost:3000)
```
docker run --name blogger -d -p 3000:4173 anonranger/svelte-blogger
```

## Documentation of Folder structure - Guidance on where to add content

**User Managed Content**

**static/content_images/content** - user need to add markdown content

**static/content_images/images** - user need to add images

**src/stores** - user to manage the mapping of content

**System Files**

src/api - static site rendering

src/components - Svelte components that render unique UI

src/routes - Mapping of route and components

src/shared - common libraries



## Blog Screenshots 

1. Blog articles listing with category filtering
<img width="1593" alt="Screenshot 2024-08-21 at 11 47 02 PM" src="https://github.com/user-attachments/assets/64f92f01-ecb7-4637-bb37-67f5a3c33b71">
<img width="1346" alt="Screenshot 2024-08-21 at 11 47 16 PM" src="https://github.com/user-attachments/assets/d26dd966-2fec-41e4-a47e-df9da10df6c1">

3. Blog article page
<img width="1439" alt="Screenshot 2024-08-21 at 11 55 26 PM" src="https://github.com/user-attachments/assets/e25b6f36-889c-4bc9-92f0-c0835c497c31">

## Git Book like Documentation Screenshots 

## Getting Started with Installation

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/skar-software/svelte-blogger.git
cd svelte-blogger
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server

To start the development server with hot-reloading:

```bash
npm run dev
```

Your application should now be running at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production

To build the application for production:

```bash
npm run build
```

This command will generate the production-ready files in the `dist` directory.

### 5. Preview the Production Build

To preview the production build locally:

```bash
npm run preview -- --host
```

This command will serve the built application, typically on port 4173, and make it accessible via the network.

## Running with Docker

If you prefer to run the application inside a Docker container, follow these steps:

### 1. Build the Docker Image

Build the Docker image using the Dockerfile:

```bash
docker build -t blogger .
```

### 2. Run the Docker Container

Run the Docker container, exposing the application on port 4173:

```bash
docker run -p 4173:4173 blogger
```

Your application will be accessible at [http://localhost:4173](http://localhost:4173).

## Scripts

Here are the main scripts available in the project:

- **`npm run dev`**: Starts the development server with hot-reloading.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run start`**: (In Docker) Starts the production server.
