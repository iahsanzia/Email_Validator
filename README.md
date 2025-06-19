# iValidate - Email Validator

A simple, fast, and reliable email validation tool that checks email addresses for validity, deliverability, and other important metrics using real-time API validation.

## 🚀 Features

- **Real-time Email Validation**: Instant validation using EmailValidation.io API
- **Comprehensive Analysis**: Get detailed information about email addresses including:
  - Format validation
  - Domain verification
  - MX record checking
  - SMTP validation
  - Disposable email detection
  - Role-based email identification
  - Deliverability scoring
- **Modern UI**: Clean and responsive web interface
- **Error Handling**: Robust error handling with user-friendly messages
- **Console Logging**: Detailed logging for debugging purposes

## 📁 Project Structure

```
Email Validator/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── css/
│   └── style.css       # Stylesheet
├── img/
│   └── logo.svg        # Application logo
└── js/
    └── index.js        # Main JavaScript functionality
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling and responsive design
- **Vanilla JavaScript**: Core functionality and API integration
- **Fetch API**: HTTP requests to validation service
- **EmailValidation.io API**: Email validation service

## 📋 How It Works

1. **User Input**: User enters an email address in the input field
2. **Client-side Validation**: Basic validation to ensure input is not empty
3. **API Request**: Makes a GET request to EmailValidation.io API with the email
4. **Response Processing**: Processes the JSON response and extracts validation data
5. **Results Display**: Shows comprehensive validation results in a formatted layout
6. **Error Handling**: Displays appropriate error messages if validation fails

## 🔧 Setup and Installation

1. **Clone or Download** the project files
2. **API Key Setup**: 
   - The project uses EmailValidation.io API
   - Current API key is included in the code
   - For production use, consider securing the API key
3. **Run the Application**:
   - Open `index.html` in a web browser, or
   - Serve through a local web server for better security

## 💻 Usage

1. Open the application in your web browser
2. Enter an email address in the input field
3. Click the "Validate" button
4. View the comprehensive validation results including:
   - Email format validity
   - Domain information
   - MX record status
   - SMTP check results
   - Disposable email detection
   - Role-based email identification
   - Deliverability score

## 🔍 API Response Details

The application displays various validation metrics:

- **format_valid**: Whether the email format is correct
- **mx_found**: MX record exists for the domain
- **smtp_check**: SMTP server validation
- **disposable**: Whether it's a disposable email service
- **free**: Whether it's a free email provider
- **role**: Whether it's a role-based email (e.g., admin@, info@)
- **score**: Deliverability score (0-1)
- **state**: Overall deliverability state
- **reason**: Detailed reason for the validation result

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**: If running locally via file://, consider using a local web server
2. **API Limits**: The API key has usage limits; monitor console for error messages
3. **Network Issues**: Check internet connection if validation fails

### Debug Information:

- Open browser Developer Tools (F12)
- Check Console tab for detailed logging
- Network tab shows API request/response details

## 🔐 Security Considerations

- API key is currently embedded in client-side code
- For production applications, consider:
  - Moving API calls to a backend server
  - Implementing proper API key management
  - Adding rate limiting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Check the browser console for error messages
- Verify internet connection
- Ensure the API service is accessible

---

**Built with ❤️ for reliable email validation**
