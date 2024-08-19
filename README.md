# svelte-blogger
## Blogging site built with Svelte

## Getting Started

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/skar-software/svelte-blogger.git
cd skar-software
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
