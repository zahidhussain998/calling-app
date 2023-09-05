import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Home  () {
    const { roomId } = useParams();


    const config = async(element) =>{

      const appID = 61874284;

      const serverSecret = "c5d16a5a56f71d717bc84db23cd23411";

       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), 'zahid')

       const zp = ZegoUIKitPrebuilt.create(kitToken)
       zp.joinRoom({
        container:element,
        scenario:{
            mode: ZegoUIKitPrebuilt.VideoConference
        }
       })
    }
  return (


    <div className='room-page'>
  <div ref={config}/>
    </div>
  )
}

export default Home