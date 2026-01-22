# Lloyds React Application

A modern React application built with Vite featuring video streaming, user management, and interactive components.

## 🚀 Features

### 🎥 Video Streaming
- **VideoPlayer Component**: Stream videos with full playback controls
- **Comments System**: Interactive commenting with user avatars
- **Search Functionality**: Search through comments and users
- **Multiple Video Sources**: Support for YouTube and MP4 video formats

### 👥 User Management
- **Users Component**: Complete user management system
- **Search & Filter**: Real-time user search functionality
- **CRUD Operations**: Add, view, and delete users
- **User Profiles**: Display user information with avatars

### 🧮 Interactive Components
- **Counter Component**: Simple counter with increment/decrement functionality
- **Authentication State**: Login/logout state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Video Player**: React Player 3.4.0
- **Styling**: CSS Modules
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakesh-killamsetty/Counter-Application--React.git
   cd lloyds
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
lloyds/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Counter/        # Counter component
│   │   ├── Users/          # User management component
│   │   └── VideoPlayer/    # Video player component
│   ├── assets/             # Images and icons
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Components Overview

### VideoPlayer Component
- Features video playback with React Player
- Includes comment system with user avatars
- Search functionality for comments
- Responsive design with customizable dimensions

### Users Component
- User management with search and filter capabilities
- Delete functionality for user records
- Video streaming integration
- Real-time search through user list

### Counter Component
- Simple counter with increment/decrement buttons
- State management with React hooks
- Clean, minimal UI design

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
```

### Video Configuration
Videos can be configured in the components:
- YouTube URLs: Direct video links
- MP4 files: Local or external MP4 video sources
- Custom video sources: Extend React Player configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow React best practices and hooks guidelines
- Use meaningful component and variable names
- Keep components modular and reusable
- Maintain consistent code formatting
- Write descriptive commit messages

## 🐛 Troubleshooting

### Common Issues

**Video not loading:**
- Check network connectivity
- Verify video URL accessibility
- Ensure CORS configuration for external videos

**Component not rendering:**
- Check browser console for errors
- Verify all dependencies are installed
- Ensure proper import statements

**Build errors:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all environment variables are set

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Rakesh Killamsetty**
- GitHub: [@rakesh-killamsetty](https://github.com/rakesh-killamsetty)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for the fast build tool
- React Player for video streaming capabilities
- W3Schools for sample video content
