import { TableContainer, TableHead, Table, TableRow, TableCell, TableBody } from "@mui/material";
import { useState } from "react";
function Info(){
    const [userMediaInfo, setUserMediaInfo] = useState("please confirm browser to use video and audio");
    const constraint = {
        audio: true,
        video: true
    }
    navigator.mediaDevices.getUserMedia(constraint).then((value) => {
        setUserMediaInfo(String(value.getTracks().map((track)=>{return  track.label})));
    });
    const rows = [
        ["有帮助的网址","chrome://webrtc-internals/"],
        ["是否支持webRTC", window.RTCPeerConnection?"是" : "否"],
        ["检测到的设备", userMediaInfo]
    ]
    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center">
                        Info
                    </TableCell>
                    <TableCell align="center">
                        Value
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th"  scope="row" align="center">
                {row[0]}
              </TableCell>
              <TableCell align="center">{row[1]}</TableCell>
            </TableRow>
          ))}

            </TableBody>
        </Table>
    </TableContainer>
}
export default Info;