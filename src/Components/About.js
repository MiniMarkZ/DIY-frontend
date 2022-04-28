import React from 'react'
import {Container} from '../style/layoutComponent'

function About() {
  return (
    <Container>
        <h1 style={{fontFamily:"muli-extrabold", marginBottom:"0",fontWeight:"900"}}>เกี่ยวกับเรา</h1>
        <div style={{width:"90px",background: "#ffc425", margin:"0.5rem auto" ,height:"3px",}}></div>
        <p style={{fontSize:"25px",lineHeight:"1.2",textAlign:"left",marginTop:"20px"}}>มิสเตอร์. ดี.ไอ.วาย. เปิดสาขาแรกที่กัวลาลัมเปอร์ ประเทศมาเลเซียในเดือน กรกฎาคม 2548 ซึ่งเรามุ่งมั่นทุ่มเท เติบโตขึ้นเป็นผู้ค้าปลีกต่อเติมบ้านที่ใหญ่ที่สุดในภูมิภาค โดยมีสาขาที่มาเลเซีย สิงคโปร์ ไทย บรูไน อินโดนีเซีย ฟิลิปปินส์ กัมพูชา ตุรกี และสเปน</p>
    </Container>
  )
}

export default About