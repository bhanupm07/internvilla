# Internvilla: Internship Discovery Platform

Internvilla is a MERN stack web platform designed to help users discover and apply for internships. The platform features a unique coin-earning system where users earn coins by completing their profile and adding experiences/projects. These coins can be used to apply for internships listed on the platform.

### [Explore Internvilla Now](https://internvilla.vercel.app/)  
### [Source Code](https://github.com/bhanupm07/internvilla)

## 🚀 Features

- **Explore Internships**: Discover internships scraped from [Cuvette](https://cuvette.tech), neatly listed with detailed descriptions and application requirements.
- **Profile Management**: Users can fill in their details, add experiences and projects to earn coins, which are used to apply for internships.
- **Coin Earning System**: An integrated reward system that incentivizes users to complete their profiles and enrich their portfolio.
- **Secure Authentication**: Register and login with OTP-based email verification via Nodemailer.
- **Responsive Design**: Fully optimized for mobile and desktop devices with seamless navigation.

## 🛠 Tech Stack

### Frontend
- **React**: Modular and dynamic interface.
- **Context API**: State management across different components.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.
- **ChakraUI**: Accessible, reusable components for building UI.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Fast, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database using Mongoose ORM for structured data handling.

### Additional Tools
- **Cloudinary**: Image hosting and handling service for profile pictures and media content.
- **Nodemailer**: Email service for sending OTPs during registration and login.

## 💡 Key Highlights

### 1. Explore Internships
The platform scrapes internships from Cuvette, populating the Explore page. Users can browse internships, check requirements, and apply using their earned coins.

### 2. Profile Page
Users can enhance their profiles by adding personal details, experiences, and projects. Each contribution helps them earn coins that can be redeemed when applying for internships.

### 3. Coin Earning System
A unique gamified experience that rewards users for completing their profile and adding value to their portfolio. Coins are essential for applying to internships and can be earned through:
- Completing basic profile details.
- Adding educational qualifications.
- Adding work experiences or projects.

### 4. Authentication & Authorization
- **OTP Verification**: Secure login and signup with one-time password (OTP) sent via email.
- **Authentication**: Users are authenticated before they can apply to internships or make changes to their profiles.

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas (or local MongoDB instance)

### Clone the Repository
```bash
git clone https://github.com/yourusername/internvilla.git
cd internvilla
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a .env file in the backend directory and configure the following environment variables:

   ```bash
   MONGO_URI=<Your MongoDB connection string>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
   CLOUDINARY_API_KEY=<Your Cloudinary API key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
   EMAIL_SERVICE=<Your email service provider>
   EMAIL_USER=<Your email service username>
   EMAIL_PASS=<Your email service password>
   ```
4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

  ```bash
  cd frontend
  ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Create a .env file in the frontend directory and configure the following environment variable:

  ```bash
  REACT_APP_BACKEND_URL=<Your Backend API URL>
  ```

4. Start the frontend development server:

  ```bash
  npm start
  ```
## 📽 Demo

### [Watch the demo video here](https://drive.google.com/file/d/1xZbd9ziuIlhE_cVQCxhxmzRSxh__gyuX/view)

You can record a demo of the project using tools like Loom or OBS Studio. Once recorded, upload the demo and paste the link here to showcase the functionality of the platform.

## 🔮 Future Enhancements

- **Admin Panel**: Add an admin interface for managing internships and user data.
- **Notifications**: Implement real-time notifications for new internships and profile completion reminders.
- **Payment Gateway**: Integrate a payment system for additional premium services.

## 🙌 Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
