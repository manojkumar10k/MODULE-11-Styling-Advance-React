import React from 'react'
import Styled, { styled } from 'styled-components';
import "./App.css"
import logo from "./image/logo.svg"
import Cat from "./image/cat.png"
import Cata from "./image/cata.png"
import Catb from "./image/catb.png"
import Catc from "./image/catc.png"
import Catd from "./image/catd.png"
import Cate from "./image/cate.png"
import Catf from "./image/catf.png"
import Cati from "./image/cati.png"
import Catj from "./image/catj.png"
import Catk from "./image/catk.png"
function LogoNav() {


  const Main = Styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content: space-between;
   margin-top:50px;
    `
  const Logo = styled.img`
  margin-top: -10px;
    `
  const MainInput = styled.div`
      
      border: 2px solid #3bb77e;
      height: 50px;
    `
  const SelectItem = styled.select`
     
      border: none;
      width:150px;
      height: 35px;
      text-align: center;
       font-size: 17px;
       margin: 10px;
    `
  const SelectItemNav = styled.select`
     border: none;
      width:250px;
      height: 35px;
      text-align: center;
       font-size: 18px;
       margin: 10px;
       background-color:#3bb77e;
       color: white;
       border-radius: 5px;
    `
  const SelOption = styled.option`
     
    `
  const Inp = styled.input`
    width:500px;
    height: 30px;
    border: 0px solid;
    outline: none;
   
       `
  const MainCart = styled.div`
        display: flex;
        gap: 40px;
       `

  const Ptext = styled.p`
        
       `
  const Navbar = styled.div`
        display: flex;
        margin-top:10px;
        justify-content:space-evenly;
        align-items: center;

       `

  const NavLink = styled.a`
    
     `
  const SelectItemHome = styled.select`
     
      border: none;
      
      height: 35px;
      text-align: center;
       font-size: 17px;
       margin: 10px;
    `
  const CallNumberMain = styled.p`
     display: flex;
     gap: 10px;
   `
  const NumberSupport = styled.div`
    
   `
  const CallNumber = styled.p`
      color: #3bb77e;
    `
  const CallSupport = styled.p`
   `
  const HeadPhone = styled.p`
    margin-top: 10px;
  
   `
  const Slider1 = styled.div`
    background-image: url("https://nest-nextjs-13.vercel.app/assets/imgs/slider/slider-1.png");
    width: 97%;
    height: 75vh;
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
    margin-left: 27px;
    border-radius: 10%;
    font-size: 40px;
    padding: 110px 80px;
    color: #423f3f;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  `
  const SliderText = styled.p`
    padding: 20px;
    color: #686666;
  `
  const SliderInput = styled.div`
    height: 60px;
    width: 400px;
    
    background-color: #ffffff;
    
    border-radius: 20px;
    display: flex;
  `
  const SliderInputPart = styled.input`
    padding: 10px;
    margin: 9px 0px;
    outline: none;
    border: none;

   `
  const PaperPlane = styled.div`
        margin: 9px 16px;
 color: #686666;
   `
  const Subscribe = styled.button`
            background-color: #3bb77e;
     padding: 10px 30px;
     margin: 0px 15px;
     border: 0px;
     font-size: 25px;
     color: white;
     border-radius: 25px;
     &:hover {
      background-color: #0fe681;

     }
   `
  const Featuted = styled.div`
  display: flex;
  align-items: center;
  justify-content:start;
  gap: 50px;

 `
  const Feature = styled.h1`
  font-size: 35px;
  margin-left: 15px;
  margin: 20px;
 `
  const FeatureItemALL = styled.p`
display: flex;
gap: 50px;
 `
  const MainFruit = styled.div`
  display: flex;
 `
  const Fruit = styled.div`
 
  margin: 15px;
  background-color: #c1b2b2;
  border-radius: 10px;
  text-align: center;
 `





  return (
    <>
      <Main>
        <Logo src={logo} />
        <MainInput>
          <SelectItem >
            <SelOption >All Categories</SelOption>
            <SelOption>Home 1</SelOption>
            <SelOption>Home 1</SelOption>
            <SelOption>Home 1</SelOption>
          </SelectItem>
          <Inp placeholder="Search" />
        </MainInput>

        <MainCart>
          <Ptext><i class="fa-solid fa-rotate fa-xl"></i>Compare</Ptext>
          <Ptext><i class="fa-regular fa-heart fa-xl"></i> Wishlist</Ptext>
          <Ptext><i class="fa-solid fa-cart-shopping fa-xl"></i> Cart</Ptext>
          <Ptext><i class="fa-regular fa-user fa-xl"></i>Account</Ptext>
        </MainCart>

      </Main>
      <hr />
      <Navbar>
        <SelectItemNav>
          <SelOption > Browse All Categories</SelOption>
          <SelOption >All Categories</SelOption>
          <SelOption >All Categories</SelOption>
          <SelOption >All Categories</SelOption>
        </SelectItemNav>

        <NavLink>Hot Deals</NavLink>
        <SelectItemHome >
          <SelOption >Home</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <NavLink>About</NavLink>
        <SelectItemHome >
          <SelOption >Shop</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <SelectItemHome >
          <SelOption >Vendors</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <SelectItemHome >
          <SelOption >Mega menu</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <SelectItemHome >
          <SelOption >Blog</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <SelectItemHome >
          <SelOption >Pages</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
          <SelOption>Home 1</SelOption>
        </SelectItemHome>
        <NavLink>Contact</NavLink>
        <CallNumberMain>

          <HeadPhone><i class="fa-solid fa-headphones-simple fa-2xl"></i></HeadPhone>
          <CallSupport><CallNumber>1900 - 888</CallNumber>
            <CallSupport>24/7 Support Center</CallSupport></CallSupport>
        </CallNumberMain>
      </Navbar>
      <Slider1>
        <div className="mainSlider">
          <h1>Don't miss amazing <br /> grocery deals</h1>
          <SliderText> <h3>Sign up for the daily newsletter</h3> </SliderText>
          <SliderInput>
            <PaperPlane><i class="fa-regular fa-paper-plane fa-2xs"></i></PaperPlane>
            <SliderInputPart placeholder='Your email Address'></SliderInputPart>
            <Subscribe>Subscribe</Subscribe>
          </SliderInput>
        </div>
      </Slider1>

      <Featuted>
        <Feature>Featured Categories</Feature>
        <FeatureItemALL>
          <h3>Cake & Milk</h3>
          <h3>Coffes & Teas</h3>
          <h3>Pet Foods</h3>
          <h3>Vegetables</h3>
        </FeatureItemALL>
      </Featuted>
      <MainFruit>
        <Fruit><img src={Cat} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Cata} alt="" />
          <h4>Cake & Milk</h4><p>26 items</p>
        </Fruit>
        <Fruit><img src={Catb} alt="" />
          <h4>Cake & Milk</h4><p>26 items</p>
        </Fruit>
        <Fruit><img src={Catc} alt="" />
          <h4>Cake & Milk</h4><p>26 items</p>
        </Fruit>
        <Fruit><img src={Catd} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Cate} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Catf} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Cati} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Catj} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
        <Fruit><img src={Catk} alt="" />
          <h4>Cake & Milk</h4>
          <p>26 items</p>
        </Fruit>
      </MainFruit>

    </>
  )
}

export default LogoNav
