import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../Layout/RootLayout'

import AdminLogin from '../Pages/Admin/AdminLogin'

import { CommonLayout } from '../Layout/CommonLayout'
import { CommonLogin } from '../Pages/CommonLogin'
import { UserHomePage } from '../Pages/UserHomePage'
import { UserLayout } from '../Layout/UserLayout'
import { AboutPage } from '../Pages/User/AboutPage'
import { IteamPage } from '../Pages/User/IteamPage'
import { Privacy } from '../Components/User/Privacy'
import { Terms } from '../Components/User/Terms'
import { Contact } from '../Components/User/Contact'
import { AllProductsCards } from '../Components/User/AllProductsCards'
import { AllProducts } from '../Pages/User/AllProducts'
import { ResturantLogin } from '../Pages/Resturant/ResturantLogin'
import { ProfilePage } from '../Pages/User/ProfilePage'
import { CartPage } from '../Pages/User/CartPage'




export const router=createBrowserRouter([

    {
        path: "/admin",
        element:<RootLayout/>,
        children:[
            {
                path: "Admin",
                element: <AdminLogin />
            },

]},
{
    path: "/",
    element:<CommonLayout/>,
    children:[
        {
            path: "login",
            element: <CommonLogin/>
        },
        {
            path: "ResturantLogin",
            element: <ResturantLogin/>
        },
        


]},
{
    path: "/",
    element:<UserLayout/>,
    children:[
        {
            path: "/home",
            element: <UserHomePage/>
        },
        {
            path: "About",
            element: <AboutPage/>
        },
        {
            path: "privacy",
            element: <Privacy/>
        },
        {
            path: "terms",
            element: <Terms/>
        },
        {
            path: "contact",
            element: <Contact/>
        },
        {
            path: "Iteam/:id",
            element: <IteamPage/>
        },
        {
            path: "AllProducts",
            element: <AllProducts/>
        },
        {
            path: "profile",
            element: <ProfilePage/>
        },
        {
            path: "Cart",
            element: <CartPage/>
        },
        


        

]}
    

])
