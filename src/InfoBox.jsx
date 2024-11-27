import Card from "@mui/material/Card";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
export default function InfoBox({ info }) {
  const Hot_url =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
  const Cold_url =
    "https://images.unsplash.com/photo-1550077404-c00d89693129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain_url =
    "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";
  let Current_img;

  return (
    <>
      <div className="text-center h-4/5 ">
        <div className="flex justify-center  ">
          <Card sx={{ maxWidth: 345 }} className="w-7/12 h-2/4">
            <CardMedia
              className=""
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  ? Rain_url
                  : info.temp > 20
                  ? Hot_url
                  : Cold_url
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p>{info.city}    { info.humidity > 80
                  ? <UmbrellaIcon />
                  : info.temp > 20
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />
                  }</p>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <div>
                  Weather is
                  <i>
                    {" "}
                    <b>{info.weather}</b>
                  </i>
                </div>
                <div>Temprature={info.temp}&deg;C</div>
                <div>Humidity={info.humidity}</div>
                <div>Minimum-Temprature={info.mintemp}&deg;C</div>
                <div>Maximum-Temprature={info.maxtemp}&deg;C</div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
