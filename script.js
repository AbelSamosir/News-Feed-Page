// Sample news articles organized by categories
const newsCategories = {
  "National": [
    {
      title: "Indonesia Pangkas Anggaran Program Makan Gratis",
      content: "Pemerintah Indonesia berencana melakukan penyesuaian anggaran untuk Program Makan Bergizi Gratis sebagai bagian dari upaya meningkatkan efisiensi pengeluaran negara. Meski anggaran dikurangi, pemerintah menegaskan bahwa kualitas layanan dan target utama program tetap menjadi prioritas.",
      image: "./n1.png",
      date: "2026-06-26"
    },
    {
      title: "Masa Depan Nusantara Menunggu Keputusan Pemerintah",
      content: "Pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur terus berlanjut, namun sejumlah pihak masih menunggu keputusan resmi pemerintah mengenai tahapan pemindahan pusat pemerintahan. Para investor dan pelaku usaha berharap adanya kepastian kebijakan agar proyek yang telah menyerap investasi besar tersebut dapat berkembang sesuai rencana. Pemerintah menyatakan bahwa pembangunan infrastruktur dasar, fasilitas publik, dan kawasan pemerintahan tetap menjadi fokus utama dalam pengembangan Nusantara.",
      image: "./n2.jpg",
      date: "2026-06-26"
    },
    {
      title: "Indonesia Blokir 4,7 Juta Akun Anak di Media Sosial",
      content: "Pemerintah Indonesia mengambil langkah tegas untuk meningkatkan perlindungan anak di ruang digital dengan memblokir sekitar 4,7 juta akun media sosial yang teridentifikasi dimiliki oleh pengguna berusia di bawah 16 tahun. Kebijakan ini diterapkan sebagai bagian dari upaya menciptakan lingkungan internet yang lebih aman bagi anak-anak serta mengurangi risiko paparan terhadap konten yang tidak sesuai usia. Selain pemblokiran akun, pemerintah juga mendorong platform digital untuk memperkuat sistem verifikasi usia dan meningkatkan pengawasan terhadap aktivitas pengguna muda.",
      image: "./n3.jpg",
      date: "2026-06-26"
    }
  ],

  "World": [
    {
      title: "Belanda Minta Maaf kepada Keturunan Tentara Maluku",
      content: "Pemerintah Belanda menyampaikan permintaan maaf resmi kepada komunitas Maluku atas perlakuan yang diterima para mantan tentara dan keluarganya setelah masa kemerdekaan Indonesia. Permintaan maaf tersebut merupakan bagian dari upaya rekonsiliasi sejarah yang telah berlangsung selama beberapa tahun. Banyak pihak menyambut langkah ini sebagai bentuk pengakuan atas pengalaman dan pengorbanan masyarakat Maluku di masa lalu.",
      image: "./w1.jpeg",
      date: "2026-06-21"
    },
    {
      title: "Indonesia dan Rusia Perkuat Kerja Sama Hukum",
      content: "Indonesia dan Rusia menandatangani kesepakatan baru untuk memperkuat kerja sama di bidang hukum dan peradilan. Kerja sama ini mencakup pertukaran informasi, peningkatan kapasitas sumber daya manusia, serta pengembangan hubungan kelembagaan kedua negara. Kesepakatan tersebut diharapkan dapat mendukung hubungan bilateral yang lebih erat di masa mendatang.",
      image: "./w2.jpeg",
      date: "2026-06-24"
    },
    {
      title: "Indonesia dan Polandia Teken Kesepakatan Produk Halal",
      content: "Pemerintah Indonesia dan Polandia menyepakati kerja sama terkait pengakuan sertifikasi produk halal guna memperluas akses perdagangan internasional. Melalui kerja sama ini, produk halal dari kedua negara diharapkan dapat lebih mudah memasuki pasar masing-masing. Kesepakatan tersebut juga menunjukkan semakin besarnya perhatian dunia terhadap industri halal yang terus berkembang.",
      image: "./w3.png",
      date: "2026-06-24"
    }
  ],

  "Business": [
    {
      title: "MSCI Perpanjang Evaluasi Status Pasar Indonesia",
      content: "MSCI memperpanjang proses evaluasi terhadap status pasar modal Indonesia hingga November 2026. Keputusan ini diambil setelah mempertimbangkan berbagai aspek, termasuk transparansi pasar dan akses investor asing. Pemerintah serta pelaku industri keuangan berharap hasil evaluasi tersebut dapat memberikan dampak positif bagi daya tarik investasi Indonesia di tingkat global.",
      image: "./b1.png",
      date: "2026-06-23"
    },
    {
      title: "Indonesia Targetkan Investasi Baterai Kendaraan Listrik",
      content: "Pemerintah Indonesia terus mendorong investasi besar di sektor baterai kendaraan listrik sebagai bagian dari strategi pengembangan industri hijau. Indonesia memiliki cadangan nikel yang besar sehingga dinilai memiliki potensi menjadi pusat produksi baterai kendaraan listrik dunia. Investasi ini diharapkan mampu menciptakan lapangan kerja baru sekaligus meningkatkan nilai tambah sumber daya alam nasional.",
      image: "./b2.png",
      date: "2026-06-24"
    },
    {
      title: "Pertumbuhan Ekonomi Indonesia Diproyeksikan di Atas 5,5 Persen",
      content: "Pemerintah optimistis pertumbuhan ekonomi Indonesia pada semester kedua tahun 2026 dapat mencapai lebih dari 5,5 persen. Optimisme tersebut didukung oleh peningkatan konsumsi rumah tangga, pertumbuhan investasi, serta aktivitas perdagangan yang terus membaik. Berbagai program pembangunan dan stimulus ekonomi juga diharapkan mampu menjaga momentum pertumbuhan nasional.",
      image: "./b3.jpg",
      date: "2026-05-12"
    }
  ],

  "Sport": [
    {
      title: "Indonesia Open 2026 Berlangsung Meriah di Jakarta",
      content: "Turnamen bulu tangkis Indonesia Open 2026 kembali digelar di Istora Gelora Bung Karno, Jakarta, dengan menghadirkan para atlet terbaik dunia. Kejuaraan ini menjadi salah satu ajang paling bergengsi dalam kalender BWF World Tour dan menarik perhatian pecinta bulu tangkis dari berbagai negara. Selain menjadi kompetisi olahraga, acara ini juga memberikan dampak positif bagi sektor pariwisata dan ekonomi lokal.",
      image: "./s1.jpg",
      date: "2026-06-02"
    },
    {
      title: "Atlet Dunia Ramaikan Indonesia Open",
      content: "Sejumlah pemain bulu tangkis papan atas dunia turut berpartisipasi dalam Indonesia Open 2026. Kehadiran mereka meningkatkan kualitas pertandingan sekaligus memberikan kesempatan bagi atlet Indonesia untuk bersaing dengan lawan-lawan terbaik. Turnamen ini juga menjadi ajang penting dalam pengumpulan poin peringkat dunia bagi para peserta.",
      image: "./s2.jpg",
      date: "2026-06-05"
    },
    {
      title: "Jakarta Kembali Jadi Pusat Bulu Tangkis Dunia",
      content: "Jakarta kembali menjadi tuan rumah salah satu turnamen bulu tangkis terbesar di dunia melalui penyelenggaraan Indonesia Open 2026. Ribuan penonton memadati arena pertandingan untuk menyaksikan aksi para atlet internasional. Kesuksesan penyelenggaraan turnamen ini memperkuat reputasi Indonesia sebagai salah satu negara dengan tradisi bulu tangkis yang kuat.",
      image: "./s3.jpg",
      date: "2026-06-07"
    }
  ],

  "Science": [
    {
      title: "Indonesia Dorong Pengembangan Energi Nuklir",
      content: "Pemerintah Indonesia mulai mengkaji pemanfaatan energi nuklir sebagai salah satu solusi untuk memenuhi kebutuhan energi masa depan. Pengembangan energi nuklir dinilai dapat membantu mengurangi ketergantungan terhadap bahan bakar fosil serta mendukung target pengurangan emisi karbon. Para ahli menekankan pentingnya standar keamanan yang tinggi dalam setiap tahap pengembangannya.",
      image: "./c1.png",
      date: "2026-06-24"
    },
    {
      title: "Restorasi Terumbu Karang di Sulawesi Utara",
      content: "Berbagai program restorasi terumbu karang di Sulawesi Utara terus dilakukan oleh peneliti, pemerintah, dan organisasi lingkungan. Upaya ini bertujuan memulihkan ekosistem laut yang mengalami kerusakan akibat perubahan iklim dan aktivitas manusia. Selain menjaga keanekaragaman hayati, restorasi terumbu karang juga membantu melindungi mata pencaharian masyarakat pesisir yang bergantung pada sumber daya laut.",
      image: "./c2.jpg",
      date: "2026-06-26"
    },
    {
      title: "Penelitian Kelautan Jadi Fokus Konservasi",
      content: "Para peneliti Indonesia semakin aktif melakukan studi mengenai kesehatan laut dan pelestarian keanekaragaman hayati. Penelitian tersebut mencakup pemantauan kualitas air, kondisi ekosistem laut, serta dampak perubahan iklim terhadap kehidupan bawah laut. Hasil penelitian diharapkan dapat menjadi dasar dalam penyusunan kebijakan konservasi yang lebih efektif.",
      image: "./c3.jpg",
      date: "2026-06-26"
    }
  ],

  "Technology": [
    {
      title: "Pemerintah Perketat Keamanan Digital Anak",
      content: "Pemerintah Indonesia memperkuat kebijakan perlindungan anak di dunia digital melalui pengawasan yang lebih ketat terhadap penggunaan media sosial. Langkah ini dilakukan untuk mengurangi risiko paparan konten berbahaya dan meningkatkan keamanan pengguna muda saat mengakses internet. Selain regulasi, pemerintah juga mendorong edukasi literasi digital bagi orang tua dan anak-anak.",
      image: "./t1.jpg",
      date: "2026-06-26"
    },
    {
      title: "Indonesia Jadi Mitra Negara INNOPROM 2026",
      content: "Indonesia ditunjuk sebagai negara mitra dalam pameran teknologi dan industri INNOPROM 2026 yang diselenggarakan di Rusia. Partisipasi ini membuka peluang kerja sama di bidang inovasi, manufaktur, transformasi digital, dan pengembangan teknologi industri. Pemerintah berharap keikutsertaan tersebut dapat memperluas akses pasar dan investasi teknologi bagi Indonesia.",
      image: "./t2.jpeg",
      date: "2026-06-25"
    },
    {
      title: "Investasi Teknologi Baterai Kendaraan Listrik Meningkat",
      content: "Pengembangan industri baterai kendaraan listrik menjadi salah satu fokus utama transformasi teknologi di Indonesia. Dukungan investasi yang terus meningkat diharapkan mampu mempercepat inovasi dalam sektor energi bersih dan transportasi ramah lingkungan. Selain itu, pengembangan teknologi baterai juga berpotensi memperkuat posisi Indonesia dalam rantai pasok industri kendaraan listrik global.",
      image: "./t3.jpeg",
      date: "2026-06-24"
    }
  ]
};

// Function to populate the navigation menu dynamically
function populateNavigationMenu() {

    // Get the navigation menu element by its ID
    const navigationMenu = document.getElementById('navigationMenu');

    // Loop through each category in the newsCategories object
    for (const category in newsCategories) {

        // Create a list item (li) element for the menu item
        const menuItem = document.createElement('li');

        // Set the text content of the list item to the current category
        menuItem.textContent = category;

        // Add a click event listener to the menu item
        menuItem.addEventListener('click', () => handleNavigationClick(category));

        // Append the list item to the unordered list
        navigationMenu.appendChild(menuItem);
    }
}

// Function to handle navigation menu clicks
function handleNavigationClick(category) {

    // Check if the clicked category is 'Home'
    if (category == 'Home') {

        // If it's 'Home', call the function to display all news articles
        displayAllNews();

    } else {

        // If it's not 'Home', call the function to display news articles by the clicked category
        displayNewsByCategory(category);
    }
}
//a function for display all news
function displayAllNews(){

}

//a function for display only selected category news
function displayNewsByCategory(category){

}

// Call the populateNavigationMenu function to create the navigation menu
populateNavigationMenu();

// Function to update the date and time on the webpage
function updateDateTime() {

    // Get the date and time elements by their IDs
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    // Create a new Date object representing the current date and time
    const now = new Date();

    // Options for formatting the date
    const optionsDate = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Format the date using the specified options
    const formattedDate = now.toLocaleDateString('en-US', optionsDate);

    // Options for formatting the time
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    // Format the time using the specified options
    const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(now);

    // Update the content of the date and time elements
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update the date and time immediately when the page loads
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Function to display all news
function displayAllNews() {
    console.log("--> displayAllNews- start");
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = ''; // Clear previous articles

    newsContainer.classList.remove("news-container-category");
    newsContainer.classList.add("news-container-home");

    for (const category in newsCategories) {
        const articles = newsCategories[category];
        articles.forEach((article, index) => {

            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item-home");

            const aElement = document.createElement("a");
            const url = `index.html?cat=${category}&i=${index}`;
            aElement.href = url;
            aElement.classList.add("a");

            const categoryElement = document.createElement("h1");
            categoryElement.textContent = category;
            categoryElement.classList.add("category-home");

            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            imageElement.classList.add("news-image-home");

            const titleElement = document.createElement("h2");
            titleElement.textContent = article.title;
            titleElement.classList.add("title-home");

            const contentElement = document.createElement("p");
            contentElement.textContent = article.content;
            contentElement.classList.add("content-home");

            const dateElement = document.createElement("p");
            dateElement.textContent = "Published on: ${article.date}";
            dateElement.classList.add("date-home");

            gridItem.appendChild(imageElement);
            gridItem.appendChild(categoryElement);
            gridItem.appendChild(titleElement);
            gridItem.appendChild(dateElement);

            aElement.appendChild(gridItem);
            newsContainer.appendChild(aElement);
        });
    }
    console.log("---> displayAllNews- end");
}

// Function to display news articles by category
function displayNewsByCategoryIndex() {
    console.log("--->Call displayNewsByCategoryIndex ");

    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = ""; // Clear previous articles

    newsContainer.classList.remove("news-container-home");
    newsContainer.classList.add("news-container-category");

    // Create a new URLSearchParams object with the current URL's query parameters
    const urlParams = new URLSearchParams(location.search);

    // Store the values of "cat" and "i" parameters in variables
    const cat = urlParams.get("cat");
    const i = urlParams.get("i");

    // Retrieve a specific article from the newsCategories object based on the category and index
    const article = newsCategories[cat][i];

    // Create elements and add CSS class
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item-category");

    const categoryElement = document.createElement("h1");
    categoryElement.textContent = cat;
    categoryElement.classList.add("category");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    imageElement.classList.add("news-image-category");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    titleElement.classList.add("title-category");

    const contentElement = document.createElement("p");
    contentElement.textContent = article.content;
    contentElement.classList.add("content");

    const dateElement = document.createElement("p");
    dateElement.textContent = `Published on: ${article.date}`;
    dateElement.classList.add("date");

    const hrElement = document.createElement("hr");
    hrElement.classList.add("hr");

    gridItem.appendChild(titleElement);
    gridItem.appendChild(imageElement);
    gridItem.appendChild(contentElement);
    gridItem.appendChild(dateElement);
    gridItem.appendChild(hrElement);

    newsContainer.appendChild(gridItem);
}

const urlParams = new URLSearchParams(location.search);
if (urlParams.size !=0)
  displayAllNewsByCategoryIndex();
else
  displayAllNews();

// function for display only selected category news
function displayNewsByCategory(category) {

const newsContainer = document.getElementById("newsContainer");
newsContainer.innerHTML = ''; // Clear previous articles

newsContainer.classList.remove("news-container-home");
newsContainer.classList.add("news-container-category");

const articles = newsCategories[category];

articles.forEach(article => {
//alert(1);

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item-category");

const categoryElement = document.createElement("h1");
categoryElement.textContent = category;
categoryElement.classList.add("category");

const imageElement = document.createElement("img");
imageElement.src = article.image;
imageElement.classList.add("news-image-category");

const titleElement = document.createElement("h2");
titleElement.textContent = article.title;
titleElement.classList.add("title-category");

const contentElement = document.createElement("p");
contentElement.textContent = article.content;
contentElement.classList.add("content");

const dateElement = document.createElement("p");
dateElement.textContent = `Published on: ${article.date}`;
dateElement.classList.add("date");

const hrElement = document.createElement("hr");
hrElement.classList.add("hr");

// gridItem.appendChild(categoryElement);

gridItem.appendChild(titleElement);
gridItem.appendChild(imageElement);
gridItem.appendChild(contentElement);
gridItem.appendChild(dateElement);
gridItem.appendChild(hrElement);
newsContainer.appendChild(gridItem);

});
}