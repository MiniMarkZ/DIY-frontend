import React from 'react'
import {Container, ImgCon, Sizeh2, Sizeh2Down} from '../style/layoutComponent'
import world from '../img/icon05_1.png'
import stack from '../img/dimension.png'
import product from '../img/products.png'
import icon1 from '../img/icon01_1.png'
import icon2 from '../img/icon02_1.png'
import icon3 from '../img/icon03_1.png'
import AnimatedPage from './AnimatedPage'

function About() {
  return (
    <AnimatedPage>
      <Container>
          <h1 style={{fontFamily:"muli-extrabold", marginBottom:"0",fontWeight:"900"}}>เกี่ยวกับเรา</h1>
          <div style={{width:"90px",background: "#ffc425", margin:"0.5rem auto" ,height:"3px",}}></div>
          <p style={{fontSize:"25px",lineHeight:"1.2",textAlign:"left",marginTop:"20px",marginBottom:"80px"}}>
            มิสเตอร์. ดี.ไอ.วาย. เปิดสาขาแรกที่กัวลาลัมเปอร์ ประเทศมาเลเซียในเดือน กรกฎาคม <b>2548</b> ซึ่งเรามุ่งมั่นทุ่มเท 
            เติบโตขึ้นเป็นผู้ค้าปลีกต่อเติมบ้านที่ใหญ่ที่สุดในภูมิภาค โดยมีสาขาที่มาเลเซีย สิงคโปร์ ไทย 
            บรูไน อินโดนีเซีย ฟิลิปปินส์ กัมพูชา ตุรกี และสเปน
          </p>

          <ImgCon>

            <div>
              <div>
                <img src={world} alt='world' width="106px" height="106px"/>
              </div>
              <Sizeh2>1,800</Sizeh2>
              <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
              <p style={{fontFamily:"Muli-Light", fontSize:"16px", color:"#8f8f8f", margin:"0", textAlign:"center"}}>สาขาทั้วโลก</p>
            </div>
            <div>
              <div>
                <img src={stack} alt='world' width="106px" height="106px"/>   
              </div>
              <Sizeh2>10,000</Sizeh2>
              <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
              <p style={{fontFamily:"Muli-Light", fontSize:"16px", color:"#8f8f8f", margin:"0", textAlign:"center"}}>พื้นที่สาขาตารางฟุตเฉลี่ย</p>
            </div>
            <div>
              <div>
                <img src={product} alt='world' width="106px" height="106px"/>   
              </div>
              <Sizeh2>18,000</Sizeh2>
              <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
              <p style={{fontFamily:"Muli-Light", fontSize:"16px", color:"#8f8f8f", margin:"0", textAlign:"center"}}>ความหลากหลายของสินค้า</p>
            </div>
            
          </ImgCon>

          <div style={{margin:"80px 0 0"}}>
              <p style={{fontFamily:"Muli",fontSize:"20px", textAlign:"justify"}}>มิสเตอร์. ดี.ไอ.วาย. อำนวยความสะดวกด้วยพื้นที่บริเวณร้านที่กว้างขวางประมาณ 10,000 
                ตารางฟุต เพิ่มอรรถรสให้ลูกค้าทุกครอบครัว ได้ช้อปปิ้งเลือกหาสินค้าที่ต้องการได้อย่างเพลิดเพลิน มิสเตอร์. 
                ดี.ไอ.วาย. สามารถให้บริการลูกค้ามากกว่า 188 ล้านคนต่อปีที่สาขาทุกแห่งทั่วเอเชีย
                <br/>
                <br/>
                ทุกสาขาบริหารจัดการโดยตรงโดยมิสเตอร์. ดี.ไอ.วาย. และทำงานร่วมกับผู้ค้าปลีกรายใหญ่ตลอดจนเจ้าของห้างสรรพสินค้า 
                สำหรับการเช่าพื้นที่จัดตั้งร้านสาขาในแต่ละสถานที่ ทั้งในเทสโก้ โลตัส เซ็นทรัล กรุ๊ป และ บิ๊กซี
                <br/>
                <br/>
                สินค้าหลักทั้ง 10 แผนก — ประกอบด้วย ฮาร์ดแวร์ เครื่องใช้ในครัวเรือน เครื่องใช้ไฟฟ้า อุปกรณ์ตกแต่งบ้าน อุปกรณ์ประดับยนต์ 
                เครื่องเขียน และ อุปกรณ์กีฬา ของเล่น ของขวัญ อุปกรณ์คอมพิวเตอร์ และ โทรศัพท์มือถือ และเครื่องประดับ และ เครื่องสำอาง — 
                ในแต่ละสาขาของมิสเตอร์. ดี.ไอ.วาย. มีสินค้าให้เลือกมากมายกว่า 18,000 รายการในราคาแสนย่อมเยา
              </p>
            </div>

            <div style={{margin:"80px 0 80px",padding:"30px",background:"#f6f6f6", display:"flex"}}>
              <div style={{paddingLeft:"20px"}}>
                <div>
                  <img src={icon1} alt='world' width="106px" height="106px"/>
                </div>
                <Sizeh2Down>ใหญ่ที่สุด</Sizeh2Down>
                <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
                <p style={{fontSize:"14px",textAlign:"center"}}>ผู้ค้าปลีกสินค้าซ่อมแซมบ้านในเอเชียตะวันออกเฉียงใต้</p>
              </div>
              

              <div style={{padding:"0 80px"}}>
                <div>
                  <img src={icon2} alt='world' width="106px" height="106px"/>
                </div>
                <Sizeh2Down>หลากหลายที่สุด</Sizeh2Down>
                <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
                <p style={{fontSize:"14px",textAlign:"center"}}>สินค้าหลากหลายที่สุด</p>
              </div>
              
              <div style={{padding:"0 90px"}}>
                <div>
                  <img src={icon3} alt='world' width="106px" height="106px"/>
                </div>
                <Sizeh2Down>ถูกที่สุด</Sizeh2Down>
                <hr style={{width:"30px",height:"2px",background: "#ffc425",margin:"1rem auto", border:"none", borderTop:"1px solid rgba(0,0,0,.1)"}}/>
                <p style={{fontSize:"14px",textAlign:"center"}}>ราคาถูกที่สุด</p>
              </div>
              
            </div>

      </Container>
    </AnimatedPage>
  )
}

export default About