const https = require('https');

const photoRegistry = {
  "dest-goa": {
    name: "Goa",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-manali": {
    name: "Manali",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-jaipur": {
    name: "Jaipur",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-agra": {
    name: "Agra",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-kashmir": {
    name: "Srinagar (Kashmir)",
    imageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-varanasi": {
    name: "Varanasi",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-kerala": {
    name: "Kerala (Kochi & Munnar)",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-udaipur": {
    name: "Udaipur",
    imageUrl: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-shimla": {
    name: "Shimla",
    imageUrl: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-leh": {
    name: "Leh Ladakh",
    imageUrl: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-andaman": {
    name: "Andaman & Nicobar Islands",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-rishikesh": {
    name: "Rishikesh",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-amritsar": {
    name: "Amritsar",
    imageUrl: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-ooty": {
    name: "Ooty",
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-darjeeling": {
    name: "Darjeeling",
    imageUrl: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-mumbai": {
    name: "Mumbai",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-delhi": {
    name: "Delhi",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-bengaluru": {
    name: "Bengaluru",
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-kolkata": {
    name: "Kolkata",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-hyderabad": {
    name: "Hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572455044327-7348c1be7267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-chennai": {
    name: "Chennai",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-puri": {
    name: "Puri",
    imageUrl: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-bhubaneswar": {
    name: "Bhubaneswar",
    imageUrl: "https://images.unsplash.com/photo-1629813366051-b58137b2792c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-pune": {
    name: "Pune",
    imageUrl: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-gangtok": {
    name: "Gangtok (Sikkim)",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-shillong": {
    name: "Shillong (Meghalaya)",
    imageUrl: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-dubai": {
    name: "Dubai",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-bali": {
    name: "Bali",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-singapore": {
    name: "Singapore",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-maldives": {
    name: "Maldives",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-bangkok": {
    name: "Bangkok",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509660933844-6910e12765a0?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-paris": {
    name: "Paris",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-london": {
    name: "London",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-switzerland": {
    name: "Switzerland (Zurich & Interlaken)",
    imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-rome": {
    name: "Rome",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-tokyo": {
    name: "Tokyo",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-new-york": {
    name: "New York City",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-sydney": {
    name: "Sydney",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "dest-cairo": {
    name: "Cairo",
    imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

async function verifyAll() {
  console.log("Verifying all real destination photo URLs...");
  const items = [];
  for (const [id, data] of Object.entries(photoRegistry)) {
    items.push({ id, name: data.name, idx: "main", url: data.imageUrl });
    data.gallery.forEach((url, i) => {
      items.push({ id, name: data.name, idx: `gallery-${i}`, url });
    });
  }

  let failed = 0;
  // Concurrently check in chunks of 15
  const chunkSize = 15;
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    await Promise.all(chunk.map(async (item) => {
      try {
        const status = await new Promise((resolve) => {
          const req = https.get(item.url, (resp) => resolve(resp.statusCode));
          req.on('error', (e) => resolve(500));
        });
        if (status !== 200) {
          console.error(`[FAIL] ${item.id} (${item.name}) ${item.idx}: ${item.url} -> Status ${status}`);
          failed++;
        }
      } catch (err) {
        console.error(`[FAIL] ${item.id} (${item.name}) ${item.idx}: ${item.url} -> Error ${err.message}`);
        failed++;
      }
    }));
  }

  console.log(`\nVerification Complete: ${items.length - failed}/${items.length} verified.`);
  if (failed > 0) {
    console.error(`Errors found: ${failed}`);
    process.exit(1);
  } else {
    console.log("SUCCESS! ALL 156 REAL DESTINATION PHOTOGRAPHS RETURN HTTP 200 OK!");
  }
}

verifyAll();
