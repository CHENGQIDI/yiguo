import styled from "styled-components"
export const Lbt=styled.div`
.box{
  height: 100%;
  width: 100%;
  display: flex;
  background: #e8e8e8;
  flex-direction: column;
  overflow: auto;
  flex: 1;
}
.imgshop{
  width: 3.75rem;
  height:3.75rem;
}
.imgshop>img{
  height: 100%;
  width: 100%;  

}
.headline{
  width: 100%;
  height: 1.52rem;
  background: #fff
}
.headline>p{
  font-size: 18px;
  margin-top:5px; 
  margin-left: 8px;
}
.headline>h2{
  font-size: 12px;
  color: #f21c1c;
  margin-top:5px; 
  margin-left: 8px;
}
.headline>h3{
  font-size: 20px;
  color: #f21c1c;
  font-weight: 900;
     margin-top:5px; 
     margin-left: 8px;
     
}
.jiang{
  width: 100%;
  height: 0.5rem;
  display: flex

}
.jiang>p{
  font-size: 12px;
  margin: 5px 10px; 
  
}
.specification{
  width: 100%;
  height:0.96rem;
  background: #fff;
  display: flex;
  position: relative;
  overflow: hidden;
  float: left;
  margin: 0.2rem 0;
}
.speci{
  width: 0.48rem;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;

}
.speci>p{
 font-size: 14px;
 color: #ccc

}

.specification>ul{
  width: 1000px;
  height: 100%;
  display: flex;
  overflow:auto;
  /* width: 100%;
  position: relative;
  -webkit-flex: 1; */
  flex: 1;

}
 

.specification>ul>li{
  width: 0.86rem;
  height: 0.56rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left; 
  margin:0 20px; 
  
}
.specification>ul>li>img{
  width: 0.22rem;
  height: 0.22rem
}
.specification>ul>li>p{
  font-size: 12px;;
  text-align: center;

}
.specification>ul>li>p:nth-child(3) {
  width: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis
}
/* 分期 */
.date{
  width: 100%;
  height: 0.62rem;
  display: flex;
  background: #fff;
  /* justify-content: flex-end;
  align-content: flex-end; */
  /* text-align: center; */
  margin: 3px;
  flex-direction: column;
  padding-left:10px; 
}
.date>span{
  font-size: 16px;
  color: #ccc;


}
.date>p{
  font-size: 16px;
  color: #000000;
 
}
.car{
  width: 100%;
  height: 0.58rem;
  background: #ccc;
  position: fixed;
  bottom: 0px;

  
}
.shopcar{
  position: fixed;
  bottom: 0;
  width: 1.4rem;
  height: 0.58rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shopcar>p{
  width: 0.48rem;
  height: 0.58rem;
  position: fixed;
  display: flex;
  bottom: 0;
}
.shopcar>p>i{
display: flex;
margin: 10px;
}
.shopcar>p>h2{
  display: flex;
}




.ant-carousel .slick-slide {
  text-align: center;
  height:3.76rem !important;
  line-height:3.76rem;
  background: #364d79;
  overflow: hidden;
}
.slider-frame,.slider-list{
  height:3.76rem!important;

}

.ant-carousel .slick-slide h3 {
  color: #fff;
} 


/*  */
`