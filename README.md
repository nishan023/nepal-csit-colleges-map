# BSc CSIT Colleges Map Nepal

An interactive web map showing the locations and details of BSc CSIT colleges across Nepal, built with Leaflet.js.

## Features

- Interactive map with college locations
- Color-coded markers for constituent and private colleges
- Detailed information popup for each college including:
  - Total seats
  - Open quota
  - Samabeshi quota
- Direct link to Google Maps for each location
- Mobile responsive design
- Legend showing college types

## Demo

[Live Demo](https://nepal-csit-colleges-map.onrender.com)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Leaflet.js
- CartoDB basemap

## Getting Started

### Prerequisites

- Node.js and npm installed
- Web browser
- Text editor (VS Code recommended)

### Local Development

1. Clone the repository
```bash
git clone https://github.com/nishan023/nepal-csit-colleges-map.git
cd nepal-csit-colleges-map
```

2. Install dependencies
```bash
npm install
```

3. Start local server
```bash
npm start
```

4. Open `http://localhost:3000` in your browser

### Project Structure

```
leaflet-map-project/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── map.js
│   └── data.js
└── package.json
```

## Deployment

The project is set up for deployment on Render.com:

1. Push your code to GitHub
2. Create a new Static Site on Render
3. Connect your GitHub repository
4. Configure build settings:
   - Build Command: `npm install`
   - Publish Directory: `public`

## Embedding

To embed this map in other websites, use the following iframe code:

```html
<iframe 
  src="https://nepal-csit-colleges-map.onrender.com" 
  width="100%" 
  height="600" 
  frameborder="0" 
  scrolling="no">
</iframe>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data source: TU CSIT Program
- Map tiles: CartoDB
- Icons: Leaflet Color Markers