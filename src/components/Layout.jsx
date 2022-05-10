import React from 'react';
// Router
import { Link, Outlet, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
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
    Indicator 
} from "./Styled/Buttons";
import {
    ToplineWrapper,
    ToplineContainer,
    ToplineNav,
    ToplineButton
} from "./Styled/TopLine";
import {
    Footer,
    SocialContainer,
    SocialLink,
    Copyright
} from "./Styled/Footer"


const Layout = ({goodsInCart}) => {

    // Current page 
    const currentLocation = useLocation().pathname;

    // Return how many goods are in cart
    const cartHasItems = () => {
        if (goodsInCart.length >= 1) return goodsInCart.length;
        return false;
    }
    cartHasItems();


    return (
        <>
            {/*------- Topline Menu --------*/}
            <ToplineWrapper>
                <ToplineContainer>

                    <ToplineNav>
                        <ToplineButton>
                            <MenuIcon />
                        </ToplineButton>
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
                    <Link to="/">
                        <BackButton>
                            <BackIcon />
                        </BackButton>
                    </Link>
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