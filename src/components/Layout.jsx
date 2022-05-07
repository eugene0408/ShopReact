import React from 'react';
// Router
import { Link, Outlet, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as BackIcon } from '../assets/left_arrow.svg';
// Styled Components
import { 
    BottomNavContiner, 
    CartButton, 
    BackButton, 
    Indicator } from "./Styled/Buttons";
import {
    ToplineWrapper,
    ToplineContainer,
    ToplineNav,
    ToplineButton
} from "./Styled/TopLine";


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

        </>
    )
}

export default Layout