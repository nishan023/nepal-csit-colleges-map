// College data array with all colleges
const colleges = [
  // Constituent Institutions
  {
    sNo: 1,
    name: "Patan Multiple Campus",
    link: "https://pmc.tu.edu.np/",
    type: "Constituent",
    total: 144,
    open: 115,
    samabeshi: 29,
    lat: 27.67918440690178,
    lng: 85.32136925481645
  },
  {
    sNo: 2,
    name: "Amrit Science Campus",
    link: "https://ac.tu.edu.np/",
    type: "Constituent",
    total: 144,
    open: 115,
    samabeshi: 29,
    lat: 27.717823721906804,
    lng: 85.31282295235259
  },
  {
    sNo: 3,
    name: "Bhaktapur Multiple Campus",
    link: "https://bkmc.tu.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 27.669107127179227,
    lng: 85.42089089468044
  },
  {
    sNo: 4,
    name: "Padma Kanya Multiple Campus",
    link: "https://pkcampus.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 27.705778622177007,
    lng: 85.3208236004033
  },
  {
    sNo: 5,
    name: "Siddhanath Science Campus",
    link: "https://www.snsc.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 28.955072134205146,
    lng: 80.1822733336628
  },
  {
    sNo: 6,
    name: "Ramsworup Ramsagar Multiple Campus",
    link: "https://rrmc.tu.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 26.716191504999866,
    lng: 85.93245496212977
  },
  {
    sNo: 7,
    name: "Mechi Multiple Campus",
    link: "https://mechicampus.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 26.56092050006111,
    lng: 88.08718257778567
  },
  {
    sNo: 8,
    name: "Mahendra Morang Adarsh Multiple Campus",
    link: "https://www.mmamc.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 26.445906781144206,
    lng: 87.27263621236555
  },
  {
    sNo: 9,
    name: "Birendra Multiple Campus",
    link: "https://bmc.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 27.688028342726824,
    lng: 84.4306535904845
  },
  {
    sNo: 10,
    name: "Prithvi Narayan Campus",
    link: "https://pncampus.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 28.240025327706057,
    lng: 83.99172902862846
  },
  {
    sNo: 11,
    name: "Butwal Multiple Campus",
    link: "https://bumc.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 27.71076121222853,
    lng: 83.4678999173573
  },
  {
    sNo: 12,
    name: "Bhairahawa Multiple Campus",
    link: "https://bhairahawacampus.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 27.505930568169585,
    lng: 83.46401799584952
  },
  {
    sNo: 13,
    name: "Mahendra Multiple Campus (Nepalgunj)",
    link: "https://www.mmcn.edu.np/",
    type: "Constituent",
    total: 72,
    open: 58,
    samabeshi: 14,
    lat: 28.0388826826914,
    lng: 81.61053010394222
  },
  {
    sNo: 14,
    name: "Mahendra Multiple Campus (Dang)",
    link: "https://mamc.tu.edu.np/",
    type: "Constituent",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.028824236481512,
    lng: 82.48624939553484
  },
  {
    sNo: 15,
    name: "Central Campus of Technology",
    link: "https://www.cctdharan.edu.np/",
    type: "Constituent",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.80655261115591,
    lng: 87.28454033758845
  },

  // Private Institutions
  {
    sNo: 1,
    name: "St.Xaviers College",
    link: "https://www.sxc.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.693318401067536,
    lng: 85.32112641308255
  },
  {
    sNo: 2,
    name: "Kathford International College of Engineering and Management",
    link: "https://kathford.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.673696341366178,
    lng: 85.33858855240061
  },
  {
    sNo: 3,
    name: "New Summit College",
    link: "https://newsummit.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.687477251285504,
    lng: 85.34358038363456
  },
  {
    sNo: 4,
    name: "Prime College",
    link: "https://prime.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.717088987910966,
    lng: 85.30301963406615
  },
  {
    sNo: 5,
    name: "St.Lawrence College",
    link: "https://www.stlawrence.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.715412465592475,
    lng: 85.34686317743076
  },
  {
    sNo: 6,
    name: "College of Applied Business",
    link: "https://www.cab.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.720114668154643,
    lng: 85.34269776584458
  },
  {
    sNo: 7,
    name: "Kathmandu Bernhardt College",
    link: "https://kbc.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.701812693094208,
    lng: 85.28319741984984
  },
  {
    sNo: 8,
    name: "Deerwalk Institute of Technology",
    link: "https://deerwalk.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.712623231137623,
    lng: 85.34250453728608
  },
  {
    sNo: 9,
    name: "Vedas College",
    link: "https://vedascollege.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.67284065511413,
    lng: 85.31775912412601
  },
  {
    sNo: 10,
    name: "Texas International College",
    link: "https://texasintl.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.71356911506786,
    lng: 85.3424805725331
  },
  {
    sNo: 11,
    name: "National College of Computer Studies",
    link: "https://nccs.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.71472142939615,
    lng: 85.30900567195128
  },
  {
    sNo: 12,
    name: "Orchid International College",
    link: "https://www.oic.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.702533603928657,
    lng: 85.34661232761634
  },
  {
    sNo: 13,
    name: "Ambition College",
    link: "https://ambition.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.695570310571725,
    lng: 85.33552617804035
  },
  {
    sNo: 14,
    name: "Sagarmatha College of Science & Technology",
    link: "http://www.scst.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.68824513721324,
    lng: 85.30252421851284
  },
  {
    sNo: 15,
    name: "Nagarjuna College of Information Technology",
    link: "https://nagarjunacollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.679826528597307,
    lng: 85.32985430828002
  },
  {
    sNo: 16,
    name: "Academia International College",
    link: "https://academiacollege.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.668463099332932,
    lng: 85.33207742115349
  },
  {
    sNo: 17,
    name: "Himalaya College of Engineering",
    link: "https://www.hcoe.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.67698889701472,
    lng: 85.332747135785
  },
  {
    sNo: 18,
    name: "Asian School of Management and Technology",
    link: "https://www.asm.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.735349686912933,
    lng: 85.31275439460339
  },
  {
    sNo: 19,
    name: "Madan Bhandari Memorial College",
    link: "https://www.mbmc.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.695111682029736,
    lng: 85.32936372484727
  },
  {
    sNo: 20,
    name: "Nepalaya College",
    link: "https://nepalaya.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.69488560405335,
    lng: 85.28536504661227
  },
  {
    sNo: 21,
    name: "Asian College of Higher Studies",
    link: "https://achsnepal.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.670623633103308,
    lng: 85.30971142495682
  },
  {
    sNo: 22,
    name: "Trinity International College",
    link: "https://www.trinity.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.70373284782749,
    lng: 85.32509809830255
  },
  {
    sNo: 23,
    name: "Samriddhi College",
    link: "https://samriddhicollege.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.676149149022343,
    lng: 85.36118057089253
  },
  {
    sNo: 24,
    name: "Swastik College",
    link: "https://swastikcollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.67390878656836,
    lng: 85.38069849690382
  },
  {
    sNo: 25,
    name: "Kathmandu College of Technology",
    link: "https://kct.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.674361873496675,
    lng: 85.36195048494996
  },
  {
    sNo: 26,
    name: "NIST College (Banepa)",
    link: "https://nist.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.718451733264654,
    lng: 85.31533509377412
  },
  {
    sNo: 27,
    name: "Shreeyantra College",
    link: "https://damaktechnical.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 26.656841376810135,
    lng: 87.69167479463901
  },
  {
    sNo: 28,
    name: "Birendra Memorial College",
    link: "https://bmcdharan.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 26.82236444226376,
    lng: 87.28426451795885
  },
  {
    sNo: 29,
    name: "Sushma Godawari College",
    link: "http://sushmagodawari.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.654094854201748,
    lng: 87.27744952347396
  },
  {
    sNo: 30,
    name: "Birat Kshitiz College",
    link: "https://kshitiz.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.451987070112914,
    lng: 87.28237209751012
  },
  {
    sNo: 31,
    name: "Nihareeka College of Management and IT",
    link: "http://nihareekacollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.472993078127715,
    lng: 87.27453515352728
  },
  {
    sNo: 32,
    name: "Birat Multiple College",
    link: "https://bmc.arnikofoundation.edu.np/home",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.50289677287652,
    lng: 87.28308264806223
  },
  {
    sNo: 33,
    name: "AIMS College",
    link: "https://www.aimsbrt.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.451940963214085,
    lng: 87.27809074836308
  },
  {
    sNo: 34,
    name: "Himalaya Darshan College",
    link: "https://himalayacollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 26.44843698210649,
    lng: 87.27846530690003
  },
  {
    sNo: 35,
    name: "National Infotech College",
    link: "https://nationalinfotechcollege.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.02107117254401,
    lng: 84.89198439814867
  },
  {
    sNo: 36,
    name: "Hetauda City College",
    link: "https://hetaudacitycollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.41712328112518,
    lng: 85.04814966460945
  },
  {
    sNo: 37,
    name: "Chitwan College of Technology",
    link: "https://www.chitwancollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.67116310925366,
    lng: 84.450486291625
  },
  {
    sNo: 38,
    name: "Lumbini ICT Campus",
    link: "https://lict.edu.np/",
    type: "Private",
    total: 48,
    open: 38,
    samabeshi: 10,
    lat: 27.7053966853993,
    lng: 84.40638271788039
  },
  {
    sNo: 39,
    name: "Mount Annapurna Campus",
    link: "https://www.macpokhara.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.223996117991177,
    lng: 83.98069571846709
  },
  {
    sNo: 40,
    name: "Soch College of IT",
    link: "https://www.sochcollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.221970439335518,
    lng: 83.9975477706166
  },
  {
    sNo: 41,
    name: "Lumbini City College",
    link: "https://lcc.edu.np",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.64802748570998,
    lng: 83.46729696359836
  },
  {
    sNo: 42,
    name: "Nepathya College",
    link: "https://nepathyacollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 27.628507415323938,
    lng: 83.47049690464554
  },
  {
    sNo: 43,
    name: "Banke Bageshwori Campus",
    link: "https://www.bbc.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.047358400710067,
    lng: 81.61600861343206
  },
  {
    sNo: 44,
    name: "Nepalgunj Campus",
    link: "https://nepalgunjcollege.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.0554940791675,
    lng: 81.61785434418047
  },
  {
    sNo: 45,
    name: "Ambikeshwori Campus",
    link: "https://amc.edu.np/",
    type: "Private",
    total: 36,
    open: 29,
    samabeshi: 7,
    lat: 28.041868477980163,
    lng: 82.4732025239804
  }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = L.map("map").setView([27.7172, 85.324], 7); // Centered on Kathmandu

    // Add the tile layer (the base map)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "©OpenStreetMap, ©CartoDB",
    }).addTo(map);

    // Create a custom icon for constituent colleges (green)
    const greenIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Create a custom icon for private colleges (red)
    const redIcon = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Loop through the college data and add markers
    colleges.forEach((college) => {
        if (college.lat && college.lng) {
            const icon = college.type === "Constituent" ? greenIcon : redIcon;
            L.marker([college.lat, college.lng], { icon: icon }).addTo(map).bindPopup(`
                <div style="padding: 10px;">
                    <h3 style="margin: 0 0 10px 0;">${college.name}</h3>
                    <p style="margin: 5px 0;">Total Seats: ${college.total}</p>
                    <p style="margin: 5px 0;">Open Quota: ${college.open}</p>
                    <p style="margin: 5px 0;">Samabeshi Quota: ${college.samabeshi}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${college.lat},${college.lng}" 
                       target="_blank" 
                       style="color: blue; text-decoration: none;">
                       View on Google Map
                    </a>
                </div>
            `);
        }
    });

    // Add legend
    const legend = L.control({ position: "topright" }); 
    legend.onAdd = function (map) {
        const div = L.DomUtil.create("div", "legend");
        div.innerHTML = `
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

    // Populate tables
    const constituentTableBody = document.getElementById('constituent-table-body');
    const privateTableBody = document.getElementById('private-table-body');

    colleges.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.sNo}</td>
            <td><a href="${college.link}" target="_blank" class="text-decoration-none">${college.name}</a></td>
            <td>${college.total}</td>
            <td>${college.open}</td>
            <td>${college.samabeshi}</td>
        `;
        if (college.type === 'Constituent') {
            constituentTableBody.appendChild(row);
        } else {
            privateTableBody.appendChild(row);
        }
    });
});
