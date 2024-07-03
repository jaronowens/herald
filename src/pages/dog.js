import * as React from "react"

const Page = ({ serverData }) => {
  const { dogImage } = serverData

  const dog = JSON.stringify(dogImage);

  // Use dogImage in your page...

  return(<>{dog}</>);
}

export async function getServerData() {
  const appId = '1641960';
  const count = 5;
  const maxLength = 300;
  const res = await fetch(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${count}&maxlength=${maxLength}?&format=json`)
  const data = await res.json()

  return {
    props: {
      dogImage: data,
    },
  }
}

export default Page