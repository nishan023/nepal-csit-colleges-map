// Data for the colleges
const colleges = [
  {
    name: "Patan Multiple Campus",
    lat: 27.67918440690178,
    lng: 85.32136925481645,
    type: "Constituent Institution",
    quota: {
      totalSeats: 144,
      openQuota: 115,
      samabeshiQuota: 29,
    },
  },
  {
    name: "Amrit Science Campus",
    lat: 27.717823721906804,
    lng: 85.31282295235259,
    type: "Constituent Institution",
    quota: {
      totalSeats: 144,
      openQuota: 115,
      samabeshiQuota: 29,
    },
  },
  {
    name: "Bhaktapur Multiple Campus",
    lat: 27.669107127179227,
    lng: 85.42089089468044,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Padma Kanya Multiple Campus",
    lat: 27.705778622177007,
    lng: 85.3208236004033,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Siddhanath Science Campus",
    lat: 28.955072134205146,
    lng: 80.1822733336628,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Ramsworup Ramsagar Multiple Campus",
    lat: 26.716191504999866,
    lng: 85.93245496212977,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Mechi Multiple Campus",
    lat: 26.56092050006111,
    lng: 88.08718257778567,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Mahendra Morang Adarsh Multiple Campus",
    lat: 26.445906781144206,
    lng: 87.27263621236555,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Birendra Multiple Campus",
    lat: 27.688028342726824,
    lng: 84.4306535904845,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Prithvi Narayan Campus",
    lat: 28.240025327706057,
    lng: 83.99172902862846,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Butwal Multiple Campus",
    lat: 27.71076121222853,
    lng: 83.4678999173573,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Bhairahawa Multiple Campus",
    lat: 27.505930568169585,
    lng: 83.46401799584952,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Mahendra Multiple Campus",
    lat: 28.0388826826914,
    lng: 81.61053010394222,
    type: "Constituent Institution",
    quota: {
      totalSeats: 72,
      openQuota: 58,
      samabeshiQuota: 14,
    },
  },
  {
    name: "Mahendra Multiple Campus",
    lat: 28.028824236481512,
    lng: 82.48624939553484,
    type: "Constituent Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Central Campus of Technology",
    lat: 26.80655261115591,
    lng: 87.28454033758845,
    type: "Constituent Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "St.Xaviers College",
    lat: 27.693318401067536,
    lng: 85.32112641308255,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Kathford International College of Engineering and Management",
    lat: 27.673696341366178,
    lng: 85.33858855240061,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "New Summit College",
    lat: 27.687477251285504,
    lng: 85.34358038363456,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Prime College",
    lat: 27.717088987910966,
    lng: 85.30301963406615,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "St.Lawrence College",
    lat: 27.715412465592475,
    lng: 85.34686317743076,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "College of Applied Business",
    lat: 27.720114668154643,
    lng: 85.34269776584458,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Kathmandu Bernhardt College",
    lat: 27.701812693094208,
    lng: 85.28319741984984,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Deerwalk Institute of Technology",
    lat: 27.712623231137623,
    lng: 85.34250453728608,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Vedas College",
    lat: 27.67284065511413,
    lng: 85.31775912412601,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Texas International College",
    lat: 27.71356911506786,
    lng: 85.3424805725331,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "National College of Computer Studies",
    lat: 27.71472142939615,
    lng: 85.30900567195128,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Orchid International College",
    lat: 27.702533603928657,
    lng: 85.34661232761634,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Ambition College",
    lat: 27.695570310571725,
    lng: 85.33552617804035,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Sagarmatha College of Science & Technology",
    lat: 27.68824513721324,
    lng: 85.30252421851284,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Nagarjuna College of Information Technology",
    lat: 27.679826528597307,
    lng: 85.32985430828002,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Academia International College",
    lat: 27.668463099332932,
    lng: 85.33207742115349,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Himalaya College of Engineering",
    lat: 27.67698889701472,
    lng: 85.332747135785,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Asian School of Management and Technology",
    lat: 27.735349686912933,
    lng: 85.31275439460339,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Madan Bhandari Memorial College",
    lat: 27.695111682029736,
    lng: 85.32936372484727,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Nepalaya College",
    lat: 27.69488560405335,
    lng: 85.28536504661227,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Asian College of Higher Studies",
    lat: 27.670623633103308,
    lng: 85.30971142495682,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Trinity International College",
    lat: 27.70373284782749,
    lng: 85.32509809830255,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Samriddhi College",
    lat: 27.676149149022343,
    lng: 85.36118057089253,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Swastik College",
    lat: 27.67390878656836,
    lng: 85.38069849690382,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Kathmandu College of Technology",
    lat: 27.674361873496675,
    lng: 85.36195048494996,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "NIST College",
    lat: 27.718451733264654,
    lng: 85.31533509377412,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Shreeyantra College",
    lat: 26.656841376810135,
    lng: 87.69167479463901,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Birendra Memorial College",
    lat: 26.82236444226376,
    lng: 87.28426451795885,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Sushma Godawari College",
    lat: 26.654094854201748,
    lng: 87.27744952347396,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Birat Kshitiz College",
    lat: 26.451987070112914,
    lng: 87.28237209751012,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Nihareeka College",
    lat: 26.472993078127715,
    lng: 87.27453515352728,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Birat Multiple College",
    lat: 26.50289677287652,
    lng: 87.28308264806223,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "AIMS College",
    lat: 26.451940963214085,
    lng: 87.27809074836308,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Himalaya Darshan College",
    lat: 26.44843698210649,
    lng: 87.27846530690003,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "National Infotech College",
    lat: 27.02107117254401,
    lng: 84.89198439814867,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Hetauda City College",
    lat: 27.41712328112518,
    lng: 85.04814966460945,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Chitwan College of Technology",
    lat: 27.67116310925366,
    lng: 84.450486291625,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Lumbini ICT Campus",
    lat: 27.7053966853993,
    lng: 84.40638271788039,
    type: "Private Institution",
    quota: {
      totalSeats: 48,
      openQuota: 38,
      samabeshiQuota: 10,
    },
  },
  {
    name: "Mount Annapurna Campus",
    lat: 28.223996117991177,
    lng: 83.98069571846709,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Soch College",
    lat: 28.221970439335518,
    lng: 83.9975477706166,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Lumbini City College",
    lat: 27.64802748570998,
    lng: 83.46729696359836,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Nepathya College",
    lat: 27.628507415323938,
    lng: 83.47049690464554,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Banke Bageshwori Campus",
    lat: 28.047358400710067,
    lng: 81.61600861343206,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Nepalgunj Campus",
    lat: 28.0554940791675,
    lng: 81.61785434418047,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
  {
    name: "Ambikeshwori Campus",
    lat: 28.041868477980163,
    lng: 82.4732025239804,
    type: "Private Institution",
    quota: {
      totalSeats: 36,
      openQuota: 29,
      samabeshiQuota: 7,
    },
  },
];


const mapStyle = `
    <style>
        #map {
            border: 2px solid #ccc;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            border-radius: 8px;
        }
    </style>
`;
document.head.insertAdjacentHTML('beforeend', mapStyle);
// Initialize the map
const map = L.map("map").setView([27.7172, 85.324], 7); // Centered on Kathmandu

// Add the tile layer (the base map)

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "©OpenStreetMap, ©CartoDB",
}).addTo(map);

// Create a custom icon for constituent colleges (green)
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Create a custom icon for private colleges (red)
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Loop through the college data and add markers
colleges.forEach((college) => {
  const icon = college.type === "Constituent Institution" ? greenIcon : redIcon;
  L.marker([college.lat, college.lng], { icon: icon }).addTo(map).bindPopup(`
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0;">${college.name}</h3>
                <p style="margin: 5px 0;">Total Seats: ${college.quota.totalSeats}</p>
                <p style="margin: 5px 0;">Open Quota: ${college.quota.openQuota}</p>
                <p style="margin: 5px 0;">Samabeshi Quota: ${college.quota.samabeshiQuota}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=${college.lat},${college.lng}" 
                   target="_blank" 
                   style="color: blue; text-decoration: none;">
                   View on Google Map
                </a>
            </div>
        `);
});

const legend = L.control({ position: "topright" }); 

legend.onAdd = function (map) {
  const div = L.DomUtil.create("div", "legend");
  div.innerHTML = `
        <style>
            .legend {
                background: white;
                padding: 15px;
                border-radius: 8px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border: 1px solid #ccc;
            }
            .legend-title {
                font-weight: bold;
                font-size: 16px;
                box-sizing: border-box;
                margin-bottom: 10px;
            }
            .legend-item {
                margin: 8px 0;
                display: flex;
                align-items: center;
            }
            .legend-marker img {
                width: 12px;
                height: 20px;
                margin-right: 8px;
            }
        </style>
        <div class="legend-title">Index</div>
        <div class="legend-item">
            <div class="legend-marker">
                <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" 
                     alt="Government College Marker">
            </div>
            Government Colleges
        </div>
        <div class="legend-item">
            <div class="legend-marker">
                <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" 
                     alt="Private College Marker">
            </div>
            Private Colleges
        </div>
    `;
  return div;
};

legend.addTo(map);
