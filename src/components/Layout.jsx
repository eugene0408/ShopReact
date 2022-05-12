import React from 'react';
// Router
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// Icons
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as BackIcon } from '../assets/left_arrow.svg';
import { ReactComponent as FbIcon } from '../assets/facebook.svg';
import { ReactComponent as InstaIcon } from '../assets/insta.svg';
import { ReactComponent as TgIcon } from '../assets/telegram.svg';
// Styled Components
import { 
    BottomNavContiner, 
    CartButton, 
    BackButton, 
    Indicator, 
    ThemeSwitch
} from "./Styled/Buttons";
import {
    ToplineWrapper,
    ToplineContainer,
    ToplineNav,
    LogoWrapper
} from "./Styled/TopLine";
import {
    Footer,
    SocialContainer,
    SocialLink,
    Copyright
} from "./Styled/Footer"


const Layout = ({
    goodsInCart,
    theme, 
    setTheme
}) => {

    // Current page 
    const currentLocation = useLocation().pathname;
    const navigate = useNavigate();

    // Return how many goods are in cart
    const cartHasItems = () => {
        if (goodsInCart.length >= 1) return goodsInCart.length;
        return false;
    }
    cartHasItems();

    // Switch theme
    const switchTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }


    return (
        <>
            {/*------- Topline Menu --------*/}
            <ToplineWrapper>
                <ToplineContainer>

                    <ToplineNav>
                        <Link to="/">
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                        </Link>

                        <ThemeSwitch onClick={switchTheme}>
                            {theme === 'light' &&
                                <SunIcon/>
                            }
                            {theme === 'dark' &&
                                <MoonIcon/>
                            }
                        </ThemeSwitch>
                    </ToplineNav>

                </ToplineContainer>
            </ToplineWrapper>


            <Outlet />

            {/*--------- Bottom Navigation ----------*/}

            <BottomNavContiner>

                {(currentLocation !== '/cart' && cartHasItems()) &&
                    <Link to="/cart">
                        <CartButton>
                            <CartIcon />
                            <Indicator>
                                <span>
                                    {cartHasItems()}
                                </span>
                            </Indicator>
                        </CartButton>
                    </Link>
                }

                {currentLocation !== '/'  &&
  
                    <BackButton onClick={()=> navigate(-1)}>
                        <BackIcon />
                    </BackButton>

                }

            </BottomNavContiner>

            <Footer>

                <SocialContainer>
                    <SocialLink href='https://facebook.com'>
                        <FbIcon />
                    </SocialLink>
                    <SocialLink href='https://www.instagram.com/'>
                        <InstaIcon />
                    </SocialLink>
                    <SocialLink href='https://t.me'>
                        <TgIcon />
                    </SocialLink>
                </SocialContainer>

                <Copyright>© 2022</Copyright>
                
            </Footer>

        </>

        
    )};

export default Layout