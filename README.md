![Dashboard Image](https://github.com/gagassurya19/Laundry-app-offline/blob/main/docs/image/dashboard.PNG)

# UKK Laundry App OFFLINE
Project ini dibuat untuk mempersiapkan UKK sebagai modul nantinya.

#### Dokumentasi
- [Referensi Database dan fungsionalitas](https://github.com/gagassurya19/Laundry-app-offline/blob/main/docs/modul/2136-P3-SPK-Rekayasa%20Perangkat%20Lunak.doc)
- [Dokumentasi untuk Frontend](https://docs.google.com/document/d/1aiHwmZ9293nSkO0wpnDxLHMBFsSnnPdgD_e0Ez5Z8zw/edit?usp=sharing)
- [Dokumentasi untuk Backend](https://docs.google.com/document/d/1CowIHixpRjImN-4SA84yV-l7TfIIgP8McyrAYH2psug/edit?usp=sharing)
- [File Database SQL](https://github.com/gagassurya19/Laundry-app-offline/blob/main/docs/laundry-app.sql)
- [Download Modul PDF](https://github.com/gagassurya19/Laundry-app-offline/tree/main/docs/modul)
- [Repository Starter](https://github.com/gagassurya19/Laundry-app-offline-starter)

#### Instalasi
1. Clone repository ini:
`git clone https://github.com/gagassurya19/Laundry-app-offline.git`

2. Install node_modules, buka folder `be` atau `fe` terlebih dahulu
`npm install`

3. Import file SQL ke dalam PhpMySql

#### List library yang digunakan
Frontend
<pre>
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.24.0",
    "bootstrap": "4.4",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.3"
  },
</pre>

Backend
<pre>
 "dependencies": {
    "cors": "^2.8.5",
    "crypto-js": "^4.1.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.15",
    "sequelize": "^7.0.0-alpha.2"
  }
</pre>

# Tree Directory
#### Directory Frontend
<pre>
:fe
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   tree.txt
|         
+---public
|       index.html
|       manifest.json
|       robots.txt
|       
\---src
    |   App.js
    |   config.js
    |   index.js
    |   
    +---assets
    |   \---fontawesome
    |       +---css
    |       |       all.css
    |       |       
    |       \---webfonts
    |               fa-brands-400.eot
    |               fa-brands-400.svg
    |               fa-brands-400.ttf
    |               fa-brands-400.woff
    |               fa-brands-400.woff2
    |               fa-regular-400.eot
    |               fa-regular-400.svg
    |               fa-regular-400.ttf
    |               fa-regular-400.woff
    |               fa-regular-400.woff2
    |               fa-solid-900.eot
    |               fa-solid-900.svg
    |               fa-solid-900.ttf
    |               fa-solid-900.woff
    |               fa-solid-900.woff2
    |               
    +---components
    |       CRUD_member.js
    |       CRUD_outlet.js
    |       CRUD_paket.js
    |       CRUD_transaksi.js
    |       CRUD_user.js
    |       GenerateLaporan.js
    |       Header.js
    |       Statistic.js
    |       
    \---pages
            Dashboard.js
            Laporan.js
            Login.js
</pre>

#### Directory Backend
<pre>
:be
|   .gitignore
|   index.js
|   package-lock.json
|   package.json
|   tree.txt
|   yarn.lock
|   
+---api
|   |   member.js
|   |   outlet.js
|   |   paket.js
|   |   transaksi.js
|   |   transaksi_detail.js
|   |   user.js
|   |   
|   \---middleware
|           auth.js
|           auth_verify.js
|           
+---config
|       config.js
|       config.json
|       
+---migrations
|       20211225023949-create-tb-member.js
|       20211225024118-create-tb-outlet.js
|       20211225024300-create-tb-user.js
|       20211225024517-create-tb-paket.js
|       20211225024926-create-tb-transaksi.js
|       20211225025642-create-tb-detail-transaksi.js
|       
\---models
        index.js
        tb_detail_transaksi.js
        tb_member.js
        tb_outlet.js
        tb_paket.js
        tb_transaksi.js
        tb_user.js
</pre>
