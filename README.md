# Bible Baptist Church - Farmington

This is a modern, responsive website for Bible Baptist Church in Farmington, MN. It is built with React, Vite, Tailwind CSS, and Shadcn UI.

## Project Structure

- `client/`: Contains the frontend React application.
  - `src/components/`: Reusable UI components (Navbar, Footer, Hero, etc.).
  - `src/pages/`: Page components (Home, About, etc.).
  - `src/lib/`: Utility functions.
- `server/`: (Optional) Simple Express server for development and API mocking.
- `shared/`: Shared types and schemas.

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm (or yarn/pnpm)

### Installation

1.  Clone the repository or extract the zip file.
2.  Install dependencies:

    ```bash
    npm install
    ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment to AWS S3

Since this is a static React application, it can be easily hosted on AWS S3.

1.  **Build the Project:**
    Run `npm run build`. This creates a `dist/` folder containing your static website files (HTML, CSS, JS, images).

2.  **Create an S3 Bucket:**
    - Go to the AWS Console and create a new S3 bucket.
    - Enable "Static website hosting" in the bucket properties.
    - Set both "Index document" and "Error document" to `index.html`. (Setting the error document to `index.html` is crucial for client-side routing to work correctly).

3.  **Upload Files:**
    - Upload the **contents** of the `dist/` folder (not the folder itself) to your S3 bucket.
    - Ensure the files have public read permissions (via Bucket Policy).

    *Example Bucket Policy:*
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
            }
        ]
    }
    ```

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI (based on Radix UI)
- **Routing:** Wouter
- **Icons:** Lucide React
- **Fonts:** DM Sans (Sans-serif), Playfair Display (Serif)

## Customization

- **Colors & Fonts:** You can customize the theme in `client/src/index.css`.
- **Components:** Edit components in `client/src/components/` to change the layout or content.
- **Images:** Images are located in `attached_assets/` and imported via the `@assets` alias.
