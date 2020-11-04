var mymap = L.map("mapid").setView([-26.5411793, -59.3570054], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZmF5c2VyIiwiYSI6ImNraDJteXc0eTE3dWIycnJuYzY0bGZ5NXYifQ.Qid8QnBsRoxPwGE2B6bDgw",
  }
).addTo(mymap);
