
# Colorwise AI

**Colorwise AI** is a cutting-edge tool designed to help you find the perfect colors that match and enhance your skin tone. Using advanced AI and image processing technology, Colorwise AI offers personalized color recommendations based on the tones detected in your uploaded image.

## Features

- **Easy Image Upload**: Upload one or more images for analysis with just a few clicks.
- **Real-Time Analysis**: We analyze your image on the spot to detect your skin tone, without saving or storing the original files. Your images are only used temporarily and not retained.
- **Personalized Color Recommendations**: Get tailored suggestions for complementary, harmonious, accent, balance, contrast, and highlight colors.
- **User-Friendly Interface**: Enjoy a simple and intuitive design for a smooth experience.

## How It Works

1. **Upload Your Image**: Choose and upload your image(s).
2. **Processing**: Our system analyzes the image to identify your skin tone. The images are processed temporarily and not saved.
3. **Receive Recommendations**: Get a set of curated color suggestions that complement your skin tone.

## Getting Started

To set up Colorwise AI locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ColorwiseAI/colorwiseAI.git
   ```

2. **Run the Backend Locally**:

   ```bash
   cd backend
   pip install -r requirements.txt
   python -m uvicorn api:app --reload --host 0.0.0.0 --port 8000
   ```

3. **Run the Frontend Locally**:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
